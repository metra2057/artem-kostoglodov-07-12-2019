import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StubDataService {

  constructor() { }

  public getCityData(): Observable<any> {
    return of({
      Version: 1,
      Key: '215854',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv'
      }
    })
  }

  public getWeatherData(): Observable<any> {
    return  of({
      Headline: {
        EffectiveDate: '2020-03-20T19:00:00+02:00',
        EffectiveEpochDate: 1584723600,
        Severity: 3,
        Text: 'Expect rainy weather Friday evening through Saturday morning',
        Category: 'rain',
        EndDate: '2020-03-21T13:00:00+02:00',
        EndEpochDate: 1584788400,
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us'
      },
      DailyForecasts: [
        {
          Date: '2020-03-20T07:00:00+02:00',
          EpochDate: 1584680400,
          Sun: {
            Rise: '2020-03-20T05:44:00+02:00',
            EpochRise: 1584675840,
            Set: '2020-03-20T17:53:00+02:00',
            EpochSet: 1584719580
          },
          Moon: {
            Rise: '2020-03-20T03:46:00+02:00',
            EpochRise: 1584668760,
            Set: '2020-03-20T14:22:00+02:00',
            EpochSet: 1584706920,
            Phase: 'WaningCrescent',
            Age: 26
          },
          Temperature: {
            Minimum: {
              Value: 9.5,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 12.6,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 5.3,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 14.1,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 5.3,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 11.6,
              Unit: 'C',
              UnitType: 17
            }
          },
          HoursOfSun: 5.4,
          DegreeDaySummary: {
            Heating: {
              Value: 7,
              Unit: 'C',
              UnitType: 17
            },
            Cooling: {
              Value: 0,
              Unit: 'C',
              UnitType: 17
            }
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 37,
              Category: 'Good',
              CategoryValue: 1,
              Type: 'Ozone'
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'UVIndex',
              Value: 6,
              Category: 'High',
              CategoryValue: 3
            }
          ],
          Day: {
            Icon: 13,
            IconPhrase: 'Mostly cloudy w/ showers',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Heavy',
            ShortPhrase: 'Heavy showers this afternoon',
            LongPhrase: 'Cool with more clouds than sun; showers, some heavy this afternoon',
            PrecipitationProbability: 74,
            ThunderstormProbability: 20,
            RainProbability: 74,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 14.8,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 234,
                Localized: 'SW',
                English: 'SW'
              }
            },
            WindGust: {
              Speed: {
                Value: 48.2,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 218,
                Localized: 'SW',
                English: 'SW'
              }
            },
            TotalLiquid: {
              Value: 10.4,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 10.4,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 3,
            HoursOfRain: 3,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 65
          },
          Night: {
            Icon: 18,
            IconPhrase: 'Rain',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'Occasional rain',
            LongPhrase: 'Occasional rain',
            PrecipitationProbability: 72,
            ThunderstormProbability: 9,
            RainProbability: 72,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 13,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 299,
                Localized: 'WNW',
                English: 'WNW'
              }
            },
            WindGust: {
              Speed: {
                Value: 20.4,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 346,
                Localized: 'NNW',
                English: 'NNW'
              }
            },
            TotalLiquid: {
              Value: 15,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 15,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 6,
            HoursOfRain: 6,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 84
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us'
        },
        {
          Date: '2020-03-21T07:00:00+02:00',
          EpochDate: 1584766800,
          Sun: {
            Rise: '2020-03-21T05:43:00+02:00',
            EpochRise: 1584762180,
            Set: '2020-03-21T17:54:00+02:00',
            EpochSet: 1584806040
          },
          Moon: {
            Rise: '2020-03-21T04:23:00+02:00',
            EpochRise: 1584757380,
            Set: '2020-03-21T15:19:00+02:00',
            EpochSet: 1584796740,
            Phase: 'WaningCrescent',
            Age: 27
          },
          Temperature: {
            Minimum: {
              Value: 10,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 16.1,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 8.2,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 16.7,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 8.2,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 13.4,
              Unit: 'C',
              UnitType: 17
            }
          },
          HoursOfSun: 4.5,
          DegreeDaySummary: {
            Heating: {
              Value: 5,
              Unit: 'C',
              UnitType: 17
            },
            Cooling: {
              Value: 0,
              Unit: 'C',
              UnitType: 17
            }
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 39,
              Category: 'Good',
              CategoryValue: 1,
              Type: 'Ozone'
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'UVIndex',
              Value: 6,
              Category: 'High',
              CategoryValue: 3
            }
          ],
          Day: {
            Icon: 13,
            IconPhrase: 'Mostly cloudy w/ showers',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'A few morning showers',
            LongPhrase: 'Variable cloudiness; brief morning showers followed by a shower in spots in the afternoon',
            PrecipitationProbability: 70,
            ThunderstormProbability: 20,
            RainProbability: 70,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 323,
                Localized: 'NW',
                English: 'NW'
              }
            },
            WindGust: {
              Speed: {
                Value: 25.9,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 321,
                Localized: 'NW',
                English: 'NW'
              }
            },
            TotalLiquid: {
              Value: 3.7,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 3.7,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 2,
            HoursOfRain: 2,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 71
          },
          Night: {
            Icon: 36,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false,
            ShortPhrase: 'Partly cloudy',
            LongPhrase: 'Partly cloudy',
            PrecipitationProbability: 3,
            ThunderstormProbability: 0,
            RainProbability: 3,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 335,
                Localized: 'NNW',
                English: 'NNW'
              }
            },
            WindGust: {
              Speed: {
                Value: 20.4,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 328,
                Localized: 'NNW',
                English: 'NNW'
              }
            },
            TotalLiquid: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 0,
            HoursOfRain: 0,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 52
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us'
        },
        {
          Date: '2020-03-22T07:00:00+02:00',
          EpochDate: 1584853200,
          Sun: {
            Rise: '2020-03-22T05:42:00+02:00',
            EpochRise: 1584848520,
            Set: '2020-03-22T17:54:00+02:00',
            EpochSet: 1584892440
          },
          Moon: {
            Rise: '2020-03-22T04:57:00+02:00',
            EpochRise: 1584845820,
            Set: '2020-03-22T16:13:00+02:00',
            EpochSet: 1584886380,
            Phase: 'WaningCrescent',
            Age: 28
          },
          Temperature: {
            Minimum: {
              Value: 9.5,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 18.2,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 8.6,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 21.8,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 8.6,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 17.3,
              Unit: 'C',
              UnitType: 17
            }
          },
          HoursOfSun: 7.1,
          DegreeDaySummary: {
            Heating: {
              Value: 4,
              Unit: 'C',
              UnitType: 17
            },
            Cooling: {
              Value: 0,
              Unit: 'C',
              UnitType: 17
            }
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 44,
              Category: 'Good',
              CategoryValue: 1,
              Type: 'Ozone'
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'UVIndex',
              Value: 7,
              Category: 'High',
              CategoryValue: 3
            }
          ],
          Day: {
            Icon: 3,
            IconPhrase: 'Partly sunny',
            HasPrecipitation: false,
            ShortPhrase: 'Partly sunny',
            LongPhrase: 'Partly sunny',
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 302,
                Localized: 'WNW',
                English: 'WNW'
              }
            },
            WindGust: {
              Speed: {
                Value: 18.5,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 300,
                Localized: 'WNW',
                English: 'WNW'
              }
            },
            TotalLiquid: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 0,
            HoursOfRain: 0,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 47
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Partly cloudy',
            HasPrecipitation: false,
            ShortPhrase: 'Partly cloudy',
            LongPhrase: 'Partly cloudy',
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 59,
                Localized: 'ENE',
                English: 'ENE'
              }
            },
            WindGust: {
              Speed: {
                Value: 14.8,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 347,
                Localized: 'NNW',
                English: 'NNW'
              }
            },
            TotalLiquid: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 0,
            HoursOfRain: 0,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 44
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us'
        },
        {
          Date: '2020-03-23T07:00:00+02:00',
          EpochDate: 1584939600,
          Sun: {
            Rise: '2020-03-23T05:40:00+02:00',
            EpochRise: 1584934800,
            Set: '2020-03-23T17:55:00+02:00',
            EpochSet: 1584978900
          },
          Moon: {
            Rise: '2020-03-23T05:28:00+02:00',
            EpochRise: 1584934080,
            Set: '2020-03-23T17:08:00+02:00',
            EpochSet: 1584976080,
            Phase: 'WaningCrescent',
            Age: 29
          },
          Temperature: {
            Minimum: {
              Value: 12.7,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 22.2,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 13.2,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 26,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 13.2,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 21,
              Unit: 'C',
              UnitType: 17
            }
          },
          HoursOfSun: 10.4,
          DegreeDaySummary: {
            Heating: {
              Value: 1,
              Unit: 'C',
              UnitType: 17
            },
            Cooling: {
              Value: 0,
              Unit: 'C',
              UnitType: 17
            }
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 83,
              Category: 'Moderate',
              CategoryValue: 2,
              Type: 'Particle Pollution'
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'UVIndex',
              Value: 7,
              Category: 'High',
              CategoryValue: 3
            }
          ],
          Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false,
            ShortPhrase: 'Mostly sunny and nice',
            LongPhrase: 'Mostly sunny and nice',
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 15,
                Localized: 'NNE',
                English: 'NNE'
              }
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 6,
                Localized: 'N',
                English: 'N'
              }
            },
            TotalLiquid: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 0,
            HoursOfRain: 0,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 14
          },
          Night: {
            Icon: 37,
            IconPhrase: 'Hazy moonlight',
            HasPrecipitation: false,
            ShortPhrase: 'Hazy',
            LongPhrase: 'Hazy; air quality will be unhealthy for sensitive groups',
            PrecipitationProbability: 1,
            ThunderstormProbability: 0,
            RainProbability: 1,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 7.4,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 147,
                Localized: 'SSE',
                English: 'SSE'
              }
            },
            WindGust: {
              Speed: {
                Value: 14.8,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 72,
                Localized: 'ENE',
                English: 'ENE'
              }
            },
            TotalLiquid: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 0,
            HoursOfRain: 0,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 20
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us'
        },
        {
          Date: '2020-03-24T07:00:00+02:00',
          EpochDate: 1585026000,
          Sun: {
            Rise: '2020-03-24T05:39:00+02:00',
            EpochRise: 1585021140,
            Set: '2020-03-24T17:56:00+02:00',
            EpochSet: 1585065360
          },
          Moon: {
            Rise: '2020-03-24T05:57:00+02:00',
            EpochRise: 1585022220,
            Set: '2020-03-24T18:01:00+02:00',
            EpochSet: 1585065660,
            Phase: 'New',
            Age: 0
          },
          Temperature: {
            Minimum: {
              Value: 12.2,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 23,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 12.1,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 26.1,
              Unit: 'C',
              UnitType: 17
            }
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 12.1,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 21.6,
              Unit: 'C',
              UnitType: 17
            }
          },
          HoursOfSun: 8.1,
          DegreeDaySummary: {
            Heating: {
              Value: 0,
              Unit: 'C',
              UnitType: 17
            },
            Cooling: {
              Value: 0,
              Unit: 'C',
              UnitType: 17
            }
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 128,
              Category: 'Unhealthy (Sensitive)',
              CategoryValue: 3,
              Type: 'Particle Pollution'
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1
            },
            {
              Name: 'UVIndex',
              Value: 7,
              Category: 'High',
              CategoryValue: 3
            }
          ],
          Day: {
            Icon: 6,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: false,
            ShortPhrase: 'Mostly cloudy',
            LongPhrase: 'Mostly cloudy; air quality will be unhealthy for sensitive groups',
            PrecipitationProbability: 1,
            ThunderstormProbability: 0,
            RainProbability: 1,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 13,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 213,
                Localized: 'SSW',
                English: 'SSW'
              }
            },
            WindGust: {
              Speed: {
                Value: 18.5,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 221,
                Localized: 'SW',
                English: 'SW'
              }
            },
            TotalLiquid: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 0,
            HoursOfRain: 0,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 48
          },
          Night: {
            Icon: 37,
            IconPhrase: 'Hazy moonlight',
            HasPrecipitation: false,
            ShortPhrase: 'Hazy',
            LongPhrase: 'Hazy; air quality will be unhealthy for sensitive groups',
            PrecipitationProbability: 1,
            ThunderstormProbability: 0,
            RainProbability: 1,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 110,
                Localized: 'ESE',
                English: 'ESE'
              }
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7
              },
              Direction: {
                Degrees: 184,
                Localized: 'S',
                English: 'S'
              }
            },
            TotalLiquid: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Rain: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Snow: {
              Value: 0,
              Unit: 'cm',
              UnitType: 4
            },
            Ice: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            HoursOfPrecipitation: 0,
            HoursOfRain: 0,
            HoursOfSnow: 0,
            HoursOfIce: 0,
            CloudCover: 19
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us'
        }
      ]
    })
  }
}
