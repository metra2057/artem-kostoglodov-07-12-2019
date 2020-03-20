export interface IWeatherData {
  Headline: {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
  };
  DailyForecasts: IDailyForecast [];
}

export interface ITemperature {
  Minimum: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Maximum: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
}

export interface IDay {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  ShortPhrase: string;
  LongPhrase: string;
  PrecipitationProbability: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
}

export interface IDailyForecast {
  Date: string;
  EpochDate: number;
  Sun: {
    Rise: string;
    EpochRise: number;
    Set: string;
    EpochSet: number;
  };
  Moon: {
    Rise: string;
    EpochRise: number;
    Set: string;
    EpochSet: number;
    Phase: string;
    Age: number;
  };
  Temperature: ITemperature;
  RealFeelTemperature: ITemperature;
  RealFeelTemperatureShade: ITemperature;
  DegreeDaySummary: {
    Heating: ITemperature;
    Cooling: ITemperature;
  };
  AirAndPollen: {
    Name: string;
    Value: number;
    Category: string;
    CategoryValue: number;
    Type: string;
  } [];
  Day: IDay;
  Night: IDay;
  Sources: string [];
  MobileLink: string;
  Link: string;
}