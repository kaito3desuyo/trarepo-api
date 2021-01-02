// export enum ERouteType {
//     TRAM = 0,
//     SUBWAY = 1,
//     TRAIN = 2,
//     BUS = 3,
//     FERRY = 4,
//     CABLE_TRAM = 5,
//     CABLEWAY = 6,
//     FUNICULAR_RAILWAY = 7,
//     TROLLEY_BUS = 11,
//     MONORAIL = 12,
//     UNKNOWN = 99,
// }

export const ERouteType = {
    TRAM: 0,
    SUBWAY: 1,
    TRAIN: 2,
    BUS: 3,
    FERRY: 4,
    CABLE_TRAM: 5,
    CABLEWAY: 6,
    FUNICULAR_RAILWAY: 7,
    TROLLEY_BUS: 11,
    MONORAIL: 12,
    UNKNOWN: 99,
} as const;

export type ERouteType = typeof ERouteType[keyof typeof ERouteType];
