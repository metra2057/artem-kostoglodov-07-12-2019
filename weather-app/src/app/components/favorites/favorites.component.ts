import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppLoadStateService } from '../../services/app-load-state.service';
import { Observable } from 'rxjs';
import { IFavoriteCity } from '../../shared/interfaces/favorite-city.interface';
import { selectFavoriteList } from '../../shared/store/selectors/favorites.selectors';
import { GetFavoritesListAction } from '../../shared/store/actions/favorites.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favoriteList: Observable<IFavoriteCity []> = this.store$.pipe(select(selectFavoriteList));

  constructor(
    private store$: Store<any>,
    private router: Router,
    private appLoadStateService: AppLoadStateService
  ) {
    this.appLoadStateService.updateLoadState(true);
  }

  ngOnInit(): void {
    this.store$.dispatch(new GetFavoritesListAction());
  }

  public onItemClick(favoriteItem: IFavoriteCity): void {
    this.router.navigate(['home'], {
      queryParams: favoriteItem
    });
  }
}
