import {IDay, ITemperature, IWeatherData} from '../interfaces/weather-data.interface';

export class MWeatherData implements IWeatherData {
  constructor(
    public Headline: {
      EffectiveDate: string,
      EffectiveEpochDate: number,
      Severity: number,
      Text: string,
      Category: string,
      EndDate: string,
      EndEpochDate: number,
      MobileLink: string,
      Link: string,
    },
    public DailyForecasts: {
      Date: string,
      EpochDate: number,
      Sun: {
        Rise: string,
        EpochRise: number,
        Set: string,
        EpochSet: number,
      };
      Moon: {
        Rise: string,
        EpochRise: number,
        Set: string,
        EpochSet: number,
        Phase: string,
        Age: number,
      },
      Temperature: ITemperature,
      RealFeelTemperature: ITemperature,
      RealFeelTemperatureShade: ITemperature,
      DegreeDaySummary: {
        Heating: ITemperature,
        Cooling: ITemperature,
      },
      AirAndPollen: {
        Name: string,
        Value: number,
        Category: string,
        CategoryValue: number,
        Type: string,
      } [],
      Day: IDay,
      Night: IDay,
      Sources: string [],
      MobileLink: string,
      Link: string,
    } []
  ) {
  }
}
