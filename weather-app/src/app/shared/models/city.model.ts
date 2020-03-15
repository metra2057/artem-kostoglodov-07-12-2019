import {ICity} from '../interfaces/city.interface';

export class MCity implements ICity {
  constructor(
    public Version: number,
    public Key: string,
    public Type: string,
    public Rank: number,
    public LocalizedName: string,
    public Country: {
      ID: string,
      LocalizedName: string,
    },
    public AdministrativeArea: {
      ID: string,
      LocalizedName: string,
    },
  ) {
  }
}
