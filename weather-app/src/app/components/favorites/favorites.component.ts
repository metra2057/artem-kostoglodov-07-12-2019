import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppLoadStateService } from '../../services/app-load-state.service';
import { Observable } from 'rxjs';
import { IFavoriteCity } from '../../shared/interfaces/favorite-city.interface';
import { selectFavoriteList } from '../../shared/store/selectors/favorites.selectors';
import { setActionParams } from '../../shared/store';
import { GET_FAVORITES_LIST } from '../../shared/store/actions-types/actions-types';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public readonly favoriteList$: Observable<IFavoriteCity []> = this.store$.pipe(select(selectFavoriteList));

  constructor(
    private store$: Store<any>,
    private router: Router,
    private appLoadStateService: AppLoadStateService
  ) {
    this.appLoadStateService.updateLoadState(true);
  }

  ngOnInit(): void {
    this.store$.dispatch(setActionParams(GET_FAVORITES_LIST));
    this.favoriteList$.subscribe(res => console.log(res));
  }

  public onItemClick(favoriteItem: IFavoriteCity): void {
    this.router.navigate(['home'], {
      queryParams: favoriteItem
    });
  }
}
