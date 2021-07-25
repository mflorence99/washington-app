/* eslint-disable @typescript-eslint/naming-convention */
export const DESC_BY_USAGE = {
  '110': 'Single family residence',
  '120': 'Two family residence',
  '190': 'Current Use',
  '260': 'Commercial/Industrial',
  '300': 'Town Property',
  '400': 'State Property',
  '500': 'Pilsbury State Park',
  '501': 'Washington Town Forest'
};

export const DESC_BY_USE = {
  CUFL: 'Farmland',
  CUMH: 'Managed hardwood',
  CUMW: 'Managed pine',
  CUUH: 'Unmanaged hardwood',
  CUUW: 'Unmanaged pine',
  CUWL: 'Wetland'
};

export const USAGES = ['110', '120', '190', '260', '300', '400', '500', '501'];

export const USES = ['CUMH', 'CUMW', 'CUUH', 'CUUW', 'CUFL', 'CUWL'];

export const LOTS = {
  '8-36': {
    address: '296 MARTIN RD',
    area: 10,
    building$: 0,
    centers: [
      {
        lat: 43.20813884459249,
        lon: -72.06779737056772
      }
    ],
    cu$: 3700,
    land$: 37800,
    owner: 'FITTON, ROBERT A.',
    taxed$: 41500,
    usage: '110',
    use: 'R1'
  },
  '7-56': {
    address: 'NO MAIN ST',
    area: 2.02,
    building$: 0,
    centers: [
      {
        lat: 43.196404575874126,
        lon: -72.10552574025445
      }
    ],
    cu$: 0,
    land$: 22700,
    owner: 'MALLARD, KENNETH ANDREW',
    taxed$: 22700,
    usage: '110',
    use: 'R1'
  },
  '2-4': {
    address: 'BACK MT RD',
    area: 115,
    building$: 0,
    centers: [
      {
        lat: 43.25229119777376,
        lon: -72.05910375731503
      }
    ],
    cu$: 0,
    land$: 3201,
    owner: 'YAGLOU, EDWARD P REVOCABLE TRU',
    taxed$: 3201,
    usage: '190',
    use: 'CUMH'
  },
  '19-30': {
    address: 'KING ST',
    area: 0.57,
    building$: 0,
    centers: [
      {
        lat: 43.1336243349687,
        lon: -72.12557722524616
      }
    ],
    cu$: 0,
    land$: 12100,
    owner: 'MAYHEW, CARROLL B & STEVEN C',
    taxed$: 12100,
    usage: '110',
    use: 'R1'
  },
  '7-19': {
    address: '265 WASHINGTON HGTS RD',
    area: 7.2,
    building$: 92700,
    centers: [
      {
        lat: 43.198331746795674,
        lon: -72.11567644211611
      }
    ],
    cu$: 3000,
    land$: 31800,
    owner: 'KING, BRUCE P',
    taxed$: 127500,
    usage: '110',
    use: 'R1'
  },
  '7-28': {
    address: '10 MARYS LN',
    area: 3,
    building$: 184500,
    centers: [
      {
        lat: 43.192310078191824,
        lon: -72.11748410040857
      }
    ],
    cu$: 0,
    land$: 29600,
    owner: 'PISCOPO DONALD R.',
    taxed$: 214100,
    usage: '110',
    use: 'R1'
  },
  '7-29': {
    address: '66 MARYS LN',
    area: 2.4,
    building$: 151300,
    centers: [
      {
        lat: 43.19151433696332,
        lon: -72.11660405324992
      }
    ],
    cu$: 5000,
    land$: 62400,
    owner: 'BECKER,KATHRYN M',
    taxed$: 218700,
    usage: '110',
    use: 'R1'
  },
  '7-49': {
    address: 'NO MAIN ST',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.19563809478038,
        lon: -72.1077708231868
      }
    ],
    cu$: 0,
    land$: 360,
    owner: 'BARTON, THOMAS',
    taxed$: 360,
    usage: '190',
    use: 'CUUH'
  },
  '7-51': {
    address: '601 NO MAIN ST',
    area: 47,
    building$: 106400,
    centers: [
      {
        lat: 43.19056333225158,
        lon: -72.10849477480559
      }
    ],
    cu$: 18800,
    land$: 39220,
    owner: 'KRONE, CHRISTOPHER A',
    taxed$: 164420,
    usage: '110',
    use: 'R1'
  },
  '7-58': {
    address: '892 LEMPSTER MT RD',
    area: 2.8,
    building$: 0,
    centers: [
      {
        lat: 43.19268681086604,
        lon: -72.1225619637549
      }
    ],
    cu$: 0,
    land$: 25900,
    owner: 'KERRY, ROBERT AND LAUREN',
    taxed$: 25900,
    usage: '110',
    use: 'R1'
  },
  '8-8': {
    address: '1222 HALFMOON PD RD',
    area: 7.55203,
    building$: 25800,
    centers: [
      {
        lat: 43.194366427300814,
        lon: -72.0772012789818
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'BACON, MICHAEL & GERALDINE',
    taxed$: 25800,
    usage: '110',
    use: 'R1'
  },
  '8-3': {
    address: '1289 HALFMOON PD RD',
    area: 2,
    building$: 34400,
    centers: [
      {
        lat: 43.19553126608456,
        lon: -72.08042244875723
      }
    ],
    cu$: 2800,
    land$: 34000,
    owner: 'LIMA, DANIEL R',
    taxed$: 71200,
    usage: '110',
    use: 'R1'
  },
  '8-16': {
    address: 'HALFMOON PD RD',
    area: 6.2,
    building$: 0,
    centers: [
      {
        lat: 43.20636000267478,
        lon: -72.07625439880634
      }
    ],
    cu$: 100,
    land$: 27600,
    owner: 'HOWLETT, JACQUELINE C',
    taxed$: 27700,
    usage: '110',
    use: 'R1'
  },
  '8-15': {
    address: '1662 HALFMOON PD RD',
    area: 7.6,
    building$: 0,
    centers: [
      {
        lat: 43.20565473936421,
        lon: -72.07637657350288
      }
    ],
    cu$: 0,
    land$: 29700,
    owner: 'WOODWARD, JACQUELINE MARY',
    taxed$: 29700,
    usage: '110',
    use: 'R1'
  },
  '8-11': {
    address: '1530 HALFMOON PD RD',
    area: 11,
    building$: 28200,
    centers: [
      {
        lat: 43.202116519559006,
        lon: -72.07653836828663
      }
    ],
    cu$: 2000,
    land$: 35358,
    owner: 'WEST TRUST, KATHLEEN M REV',
    taxed$: 65558,
    usage: '110',
    use: 'R1'
  },
  '8-26': {
    address: '271 MARTIN RD',
    area: 7,
    building$: 0,
    centers: [
      {
        lat: 43.21144907986786,
        lon: -72.06771161479185
      }
    ],
    cu$: 0,
    land$: 26100,
    owner: 'SCHWARTZ, EMILY J',
    taxed$: 26100,
    usage: '110',
    use: 'R1'
  },
  '8-28': {
    address: '371 MARTIN RD',
    area: 7.7,
    building$: 26500,
    centers: [
      {
        lat: 43.211412753816035,
        lon: -72.06524808789246
      }
    ],
    cu$: 1300,
    land$: 27200,
    owner: 'SEEKAMP, MICHAEL',
    taxed$: 55000,
    usage: '110',
    use: 'R1'
  },
  '8-37': {
    address: '256 MARTIN RD',
    area: 8.6,
    building$: 19100,
    centers: [
      {
        lat: 43.20850480716661,
        lon: -72.06932663570525
      }
    ],
    cu$: 1300,
    land$: 30000,
    owner: 'MCCANN, WILLIAM',
    taxed$: 50400,
    usage: '110',
    use: 'R1'
  },
  '9-18': {
    address: '2570 E WASHINGTON RD',
    area: 0.75,
    building$: 39400,
    centers: [
      {
        lat: 43.192449000177774,
        lon: -72.02988146872184
      }
    ],
    cu$: 1200,
    land$: 39000,
    owner: 'WASHINGTON HISTORICAL SOCIETY',
    taxed$: 79600,
    usage: '260',
    use: 'CI'
  },
  '9-26-0C': {
    address: 'AYERS POND RD',
    area: 27.8,
    building$: 0,
    centers: [
      {
        lat: 43.20177602281297,
        lon: -72.0271916187443
      }
    ],
    cu$: 0,
    land$: 2824,
    owner: 'PORTER, WILLIAM G',
    taxed$: 2824,
    usage: '190',
    use: 'CUUH'
  },
  '10-15': {
    address: '983 ASHUELOT DR',
    area: 0.96,
    building$: 150700,
    centers: [
      {
        lat: 43.17583045061529,
        lon: -72.15042215833927
      }
    ],
    cu$: 4400,
    land$: 86200,
    owner: 'NOLAN, HEIDI W',
    taxed$: 241300,
    usage: '110',
    use: 'R1'
  },
  '10-31': {
    address: '849 ASHUELOT DR',
    area: 1.52,
    building$: 108000,
    centers: [
      {
        lat: 43.17112664536271,
        lon: -72.15236880196254
      }
    ],
    cu$: 18100,
    land$: 192200,
    owner: 'TRAILSMITH, PAMELA',
    taxed$: 318300,
    usage: '110',
    use: 'R1W'
  },
  '11-24': {
    address: '547 LEMPSTER MT RD',
    area: 24.9,
    building$: 199000,
    centers: [
      {
        lat: 43.186455682034634,
        lon: -72.11241405266789
      }
    ],
    cu$: 3000,
    land$: 54963,
    owner: 'STEFANIAK, JOSEPH',
    taxed$: 256963,
    usage: '110',
    use: 'R1'
  },
  '11-25': {
    address: '673 LEMPSTER MT RD',
    area: 4,
    building$: 22100,
    centers: [
      {
        lat: 43.19028031363487,
        lon: -72.11722128065585
      }
    ],
    cu$: 2100,
    land$: 33003,
    owner: 'JOYAL, RICHARD M',
    taxed$: 57203,
    usage: '110',
    use: 'R1'
  },
  '11-47': {
    address: '646 MILLEN POND RD',
    area: 0.43,
    building$: 39300,
    centers: [
      {
        lat: 43.17069995205635,
        lon: -72.1228317917064
      },
      {
        lat: 43.170246837208396,
        lon: -72.12229724076968
      }
    ],
    cu$: 900,
    land$: 151400,
    owner: 'TURNBULL, NANCY C',
    taxed$: 191600,
    usage: '110',
    use: 'R1W'
  },
  '11-48': {
    address: '648 MILLEN POND RD',
    area: 0.31,
    building$: 150400,
    centers: [
      {
        lat: 43.17056682532481,
        lon: -72.12298764713174
      },
      {
        lat: 43.17015652495196,
        lon: -72.1223693301026
      }
    ],
    cu$: 0,
    land$: 150200,
    owner: 'FEENEY, KEVIN J',
    taxed$: 300600,
    usage: '110',
    use: 'R1A'
  },
  '11-70': {
    address: '320 FAXON HILL RD',
    area: 4.43,
    building$: 70500,
    centers: [
      {
        lat: 43.17169063337993,
        lon: -72.10605998967526
      }
    ],
    cu$: 7800,
    land$: 45600,
    owner: 'BOUTIN, MARK D',
    taxed$: 123900,
    usage: '110',
    use: 'R1'
  },
  '11-75': {
    address: '152 VALLEY RD',
    area: 2,
    building$: 0,
    centers: [
      {
        lat: 43.17015337665945,
        lon: -72.09623073161453
      }
    ],
    cu$: 0,
    land$: 25200,
    owner: 'SULLIVAN, FRANCIS X',
    taxed$: 25200,
    usage: '110',
    use: 'R1'
  },
  '11-77': {
    address: '78 VALLEY RD',
    area: 2.25,
    building$: 47900,
    centers: [
      {
        lat: 43.171970634821164,
        lon: -72.0955547732261
      }
    ],
    cu$: 13300,
    land$: 42400,
    owner: 'SEVENTY-EIGHT VALLEY RD N R TR',
    taxed$: 103600,
    usage: '110',
    use: 'R1'
  },
  '12-3': {
    address: '141 HALFMOON PD RD',
    area: 0.3,
    building$: 37300,
    centers: [
      {
        lat: 43.17491498745324,
        lon: -72.09168892078434
      }
    ],
    cu$: 0,
    land$: 39900,
    owner: 'WASHINGTON, TOWN OF - DPWH',
    taxed$: 77200,
    usage: '300',
    use: 'EX-M'
  },
  '12-34': {
    address: '1024 HALFMOON PD RD',
    area: 0.5,
    building$: 0,
    centers: [
      {
        lat: 43.189253003804204,
        lon: -72.07888243839628
      }
    ],
    cu$: 0,
    land$: 18800,
    owner: 'BATES III, JOHN',
    taxed$: 18800,
    usage: '110',
    use: 'R1'
  },
  '12-35': {
    address: '1406 LOVELL MT RD',
    area: 8.34,
    building$: 0,
    centers: [
      {
        lat: 43.190067579092336,
        lon: -72.07747590372047
      }
    ],
    cu$: 10800,
    land$: 51500,
    owner: 'BELLEMORE, TIMOTHY A.',
    taxed$: 62300,
    usage: '110',
    use: 'R1'
  },
  '12-78': {
    address: '707 WASHINGTON DR',
    area: 0.55,
    building$: 85600,
    centers: [
      {
        lat: 43.179445239603375,
        lon: -72.06178701396004
      }
    ],
    cu$: 10500,
    land$: 220400,
    owner: 'CHEUVRONT, DAVID L',
    taxed$: 316500,
    usage: '110',
    use: 'R1W'
  },
  '12-79': {
    address: '699 WASHINGTON DR',
    area: 0.44,
    building$: 109900,
    centers: [
      {
        lat: 43.17921289032155,
        lon: -72.06182094601442
      }
    ],
    cu$: 0,
    land$: 219900,
    owner: 'GROSSO, IRREV TRUST',
    taxed$: 329800,
    usage: '110',
    use: 'R1W'
  },
  '12-76': {
    address: 'WASHINGTON DR',
    area: 0.38,
    building$: 0,
    centers: [
      {
        lat: 43.17983754740601,
        lon: -72.06150982443745
      }
    ],
    cu$: 0,
    land$: 146800,
    owner: 'LARSON FAMILY REVOC TRUST',
    taxed$: 146800,
    usage: '110',
    use: 'R1W'
  },
  '12-85': {
    address: '23 WALNUT CIR',
    area: 1.5,
    building$: 97100,
    centers: [
      {
        lat: 43.17758804713499,
        lon: -72.06108626120422
      }
    ],
    cu$: 39700,
    land$: 299600,
    owner: 'FERLINS FAMILY COMPOUND TRUST',
    taxed$: 436400,
    usage: '110',
    use: 'R1W'
  },
  '12-94': {
    address: '549 WASHINGTON DR',
    area: 0.45,
    building$: 65400,
    centers: [
      {
        lat: 43.17604722249195,
        lon: -72.0604742567597
      }
    ],
    cu$: 900,
    land$: 215000,
    owner: 'BUDNE, PHILIP L',
    taxed$: 281300,
    usage: '110',
    use: 'R1W'
  },
  '12-92': {
    address: 'WASHINGTON DR',
    area: 0.1,
    building$: 0,
    centers: [
      {
        lat: 43.176247793773754,
        lon: -72.06028488134973
      }
    ],
    cu$: 0,
    land$: 54800,
    owner: 'BODNAR, BERTRAM J',
    taxed$: 54800,
    usage: '110',
    use: 'R1W'
  },
  '12-149': {
    address: 'WASHINGTON DR',
    area: 4.4,
    building$: 0,
    centers: [
      {
        lat: 43.181877001472174,
        lon: -72.05818470521675
      }
    ],
    cu$: 0,
    land$: 185,
    owner: 'KITTREDGE, KAREN J.',
    taxed$: 185,
    usage: '190',
    use: 'CUUO'
  },
  '12-99': {
    address: '491 WASHINGTON DR',
    area: 0.59,
    building$: 99900,
    centers: [
      {
        lat: 43.17426679316265,
        lon: -72.06090428164116
      }
    ],
    cu$: 19800,
    land$: 226100,
    owner: 'SHEEHY, JOHN',
    taxed$: 345800,
    usage: '110',
    use: 'R1W'
  },
  '12-101': {
    address: '469 WASHINGTON DR',
    area: 0.62,
    building$: 63900,
    centers: [
      {
        lat: 43.1739297253489,
        lon: -72.0602144272123
      }
    ],
    cu$: 0,
    land$: 226300,
    owner: 'REYNHOLDS, JEFFREY; REYNHOLDS,',
    taxed$: 290200,
    usage: '110',
    use: 'R1W'
  },
  '12-97-01': {
    address: 'WASHINGTON DR',
    area: 1.46,
    building$: 0,
    centers: [
      {
        lat: 43.174835666576044,
        lon: -72.06134145849263
      }
    ],
    cu$: 8800,
    land$: 189500,
    owner: 'VAN PRAAGH, RICHARD REV TRUST',
    taxed$: 198300,
    usage: '110',
    use: 'R1W'
  },
  '12-106': {
    address: '415 WASHINGTON DR',
    area: 1.45,
    building$: 108500,
    centers: [
      {
        lat: 43.17346386036729,
        lon: -72.05827634693432
      }
    ],
    cu$: 1100,
    land$: 224500,
    owner: 'MORSS JR, WATSON',
    taxed$: 334100,
    usage: '110',
    use: 'R1W'
  },
  '12-110': {
    address: '289 WASHINGTON DR',
    area: 0.68,
    building$: 138700,
    centers: [
      {
        lat: 43.17178797313801,
        lon: -72.05916888516496
      }
    ],
    cu$: 5800,
    land$: 196700,
    owner: 'YUNIS, BORGHILD',
    taxed$: 341200,
    usage: '110',
    use: 'R1W'
  },
  '12-114': {
    address: '243 WASHINGTON DR',
    area: 0.29,
    building$: 101000,
    centers: [
      {
        lat: 43.1716213456794,
        lon: -72.06078153143895
      }
    ],
    cu$: 0,
    land$: 209000,
    owner: 'REILLY FAMILY REALTY TRUST',
    taxed$: 310000,
    usage: '110',
    use: 'R1W'
  },
  '12-115': {
    address: '235 WASHINGTON DR',
    area: 0.47,
    building$: 48400,
    centers: [
      {
        lat: 43.17163375628276,
        lon: -72.06106885747616
      }
    ],
    cu$: 3000,
    land$: 215200,
    owner: 'NISSEN, WILLIAM',
    taxed$: 266600,
    usage: '110',
    use: 'R1W'
  },
  '12-123': {
    address: '330 WASHINGTON DR',
    area: 7.22,
    building$: 0,
    centers: [
      {
        lat: 43.17097284397924,
        lon: -72.05761132631127
      }
    ],
    cu$: 43100,
    land$: 46700,
    owner: 'GEBO LIVING TRUST',
    taxed$: 89800,
    usage: '110',
    use: 'R1A'
  },
  '12-133': {
    address: '448 WASHINGTON DR',
    area: 4.5,
    building$: 0,
    centers: [
      {
        lat: 43.174954478243215,
        lon: -72.05789396905277
      }
    ],
    cu$: 0,
    land$: 33300,
    owner: 'BUTCHER FAMILY REVOCABLE TRUST',
    taxed$: 33300,
    usage: '110',
    use: 'R1A'
  },
  '12-135': {
    address: '500 WASHINGTON DR',
    area: 2.87,
    building$: 0,
    centers: [
      {
        lat: 43.175359603599816,
        lon: -72.05905736555901
      }
    ],
    cu$: 0,
    land$: 28900,
    owner: 'JACOBSON, THOMAS C. REVOCABLE ',
    taxed$: 28900,
    usage: '110',
    use: 'R1A'
  },
  '12-142': {
    address: '650 WASHINGTON DR',
    area: 3,
    building$: 72500,
    centers: [
      {
        lat: 43.17851032340387,
        lon: -72.05862864816625
      }
    ],
    cu$: 23500,
    land$: 72000,
    owner: 'ALVES, LOUIS A',
    taxed$: 168000,
    usage: '110',
    use: 'R1'
  },
  '12-143': {
    address: 'WASHINGTON DR',
    area: 3.7,
    building$: 0,
    centers: [
      {
        lat: 43.178900823622584,
        lon: -72.0590844690321
      }
    ],
    cu$: 0,
    land$: 33000,
    owner: 'BODNAR, MICHAEL D',
    taxed$: 33000,
    usage: '110',
    use: 'R1'
  },
  '12-157': {
    address: '180 ISLAND POND RD',
    area: 0.34,
    building$: 45100,
    centers: [
      {
        lat: 43.171005968974285,
        lon: -72.06935168248788
      }
    ],
    cu$: 5900,
    land$: 185500,
    owner: 'GRAHAM FAM REAL ESTATE TRUST',
    taxed$: 236500,
    usage: '110',
    use: 'R1W'
  },
  '12-158': {
    address: '160 ISLAND POND RD',
    area: 10.33539,
    building$: 39300,
    centers: [
      {
        lat: 43.16927369507547,
        lon: -72.07082323037628
      }
    ],
    cu$: 3000,
    land$: 0,
    owner: 'LYNCH REVOCABLE TRUST',
    taxed$: 42300,
    usage: '110',
    use: 'R1'
  },
  '12-170': {
    address: '104 ISLAND POND RD',
    area: 0.06,
    building$: 0,
    centers: [
      {
        lat: 43.17052566992678,
        lon: -72.07165730472006
      }
    ],
    cu$: 9400,
    land$: 25300,
    owner: 'COOK, R E & L T REV TRUST',
    taxed$: 34700,
    usage: '110',
    use: 'R1W'
  },
  '12-181-03': {
    address: '143 VALLEY RD',
    area: 3.41,
    building$: 84200,
    centers: [
      {
        lat: 43.17027537312466,
        lon: -72.0943496267209
      }
    ],
    cu$: 0,
    land$: 42300,
    owner: 'DAVIS, ADAM',
    taxed$: 126500,
    usage: '110',
    use: 'R1'
  },
  '12-180': {
    address: '248 SO MAIN ST',
    area: 18.4,
    building$: 0,
    centers: [
      {
        lat: 43.16974081974433,
        lon: -72.09248107669012
      }
    ],
    cu$: 0,
    land$: 46900,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 46900,
    usage: '300',
    use: 'EX-M'
  },
  '13-19': {
    address: 'E WASHINGTON RD',
    area: 48.5,
    building$: 0,
    centers: [
      {
        lat: 43.17407210720947,
        lon: -72.04137851453785
      }
    ],
    cu$: 0,
    land$: 1769,
    owner: 'FRANCE, DAVID',
    taxed$: 1769,
    usage: '190',
    use: 'CUMH'
  },
  '13-20': {
    address: 'E WASHINGTON RD',
    area: 9.5,
    building$: 0,
    centers: [
      {
        lat: 43.17521754844416,
        lon: -72.04357409867332
      }
    ],
    cu$: 0,
    land$: 363,
    owner: 'FRANCE, DAVID',
    taxed$: 363,
    usage: '190',
    use: 'CUMW'
  },
  '13-21': {
    address: 'E WASHINGTON RD',
    area: 13.1,
    building$: 0,
    centers: [
      {
        lat: 43.17761551759557,
        lon: -72.03980728285869
      }
    ],
    cu$: 0,
    land$: 638,
    owner: 'KRAUS, DAVID B',
    taxed$: 638,
    usage: '190',
    use: 'CUFL'
  },
  '13-26': {
    address: 'E WASHINGTON RD',
    area: 50,
    building$: 0,
    centers: [
      {
        lat: 43.18685367345341,
        lon: -72.02770126960957
      }
    ],
    cu$: 0,
    land$: 1870,
    owner: 'BEAR HILL PROPERTY, LLC',
    taxed$: 1870,
    usage: '190',
    use: 'CUUH'
  },
  '13-27': {
    address: 'E WASHINGTON RD',
    area: 7,
    building$: 0,
    centers: [
      {
        lat: 43.18952425658377,
        lon: -72.03213223622039
      }
    ],
    cu$: 0,
    land$: 457,
    owner: 'ECCARDT FARMS INC',
    taxed$: 457,
    usage: '190',
    use: 'CUUW'
  },
  '13-29': {
    address: 'E WASHINGTON RD',
    area: 3.1,
    building$: 0,
    centers: [
      {
        lat: 43.19067235256326,
        lon: -72.03217924387556
      }
    ],
    cu$: 0,
    land$: 38400,
    owner: 'WASHINGTON, TOWN OF - FIRE',
    taxed$: 38400,
    usage: '300',
    use: 'EX-M'
  },
  '14-6': {
    address: '663 ASHUELOT DR',
    area: 1.64,
    building$: 148500,
    centers: [
      {
        lat: 43.16650619702617,
        lon: -72.15263018881829
      }
    ],
    cu$: 28300,
    land$: 197300,
    owner: 'CARNEY, GARY R',
    taxed$: 374100,
    usage: '110',
    use: 'R1'
  },
  '14-20': {
    address: '138 HARRISON RD',
    area: 1.18,
    building$: 72000,
    centers: [
      {
        lat: 43.16201154927587,
        lon: -72.15401553035494
      }
    ],
    cu$: 3000,
    land$: 206700,
    owner: 'BRAVER, WILLIAM',
    taxed$: 281700,
    usage: '110',
    use: 'R1'
  },
  '14-21': {
    address: '150 HARRISON RD',
    area: 1.12,
    building$: 185500,
    centers: [
      {
        lat: 43.16163826127091,
        lon: -72.15361960175908
      }
    ],
    cu$: 6700,
    land$: 211600,
    owner: 'VORE, ESTELLE PAPAGIOTAS REV T',
    taxed$: 403800,
    usage: '110',
    use: 'R1'
  },
  '14-28': {
    address: '93 HARRISON RD',
    area: 1.11,
    building$: 93400,
    centers: [
      {
        lat: 43.16330860587137,
        lon: -72.15223607647795
      }
    ],
    cu$: 1100,
    land$: 41600,
    owner: 'BLEAKNEY, SCOTT',
    taxed$: 136100,
    usage: '110',
    use: 'R1A'
  },
  '14-38': {
    address: '536 ASHUELOT DR',
    area: 1.39,
    building$: 0,
    centers: [
      {
        lat: 43.16317846149493,
        lon: -72.15004431969362
      }
    ],
    cu$: 0,
    land$: 14400,
    owner: 'DEGENNARO, ROBERT M',
    taxed$: 14400,
    usage: '110',
    use: 'R1'
  },
  '14-34': {
    address: 'ASHUELOT DR',
    area: 1.12,
    building$: 0,
    centers: [
      {
        lat: 43.162712340734714,
        lon: -72.1514953971576
      }
    ],
    cu$: 0,
    land$: 11400,
    owner: 'DOYLE, MARY CLAIRE',
    taxed$: 11400,
    usage: '110',
    use: 'R1'
  },
  '14-35': {
    address: '497 ASHUELOT DR',
    area: 1.18,
    building$: 137700,
    centers: [
      {
        lat: 43.16208173153949,
        lon: -72.15156280858554
      }
    ],
    cu$: 5000,
    land$: 40800,
    owner: 'DOYLE, MARY CLAIRE',
    taxed$: 183500,
    usage: '110',
    use: 'R1'
  },
  '14-47': {
    address: '101 TAYLOR CIR',
    area: 2.29,
    building$: 117900,
    centers: [
      {
        lat: 43.1680249154562,
        lon: -72.14942083459141
      }
    ],
    cu$: 2900,
    land$: 42400,
    owner: 'KEMP, CLIFFORD + MELINDA',
    taxed$: 163200,
    usage: '110',
    use: 'R1'
  },
  '14-61': {
    address: '263 STOWELL RD',
    area: 5.99,
    building$: 127100,
    centers: [
      {
        lat: 43.16504908567692,
        lon: -72.15052321542429
      }
    ],
    cu$: 0,
    land$: 48000,
    owner: 'CARRON, DON L',
    taxed$: 175100,
    usage: '110',
    use: 'R1'
  },
  '14-77': {
    address: 'STOWELL RD',
    area: 1.28,
    building$: 0,
    centers: [
      {
        lat: 43.16316546646056,
        lon: -72.1468362684292
      }
    ],
    cu$: 0,
    land$: 11500,
    owner: 'BAUMAN, ANDY',
    taxed$: 11500,
    usage: '110',
    use: 'R1'
  },
  '14-95': {
    address: '159 JEFFERSON DR',
    area: 0.75,
    building$: 170600,
    centers: [
      {
        lat: 43.16000988310515,
        lon: -72.14967772785326
      }
    ],
    cu$: 40700,
    land$: 10900,
    owner: 'RHINOCEROS PARTNERSHIP',
    taxed$: 222200,
    usage: '110',
    use: 'R1A'
  },
  '14-109': {
    address: '40 MADISON DR',
    area: 0.81,
    building$: 98500,
    centers: [
      {
        lat: 43.16039609887594,
        lon: -72.14433047719461
      }
    ],
    cu$: 16000,
    land$: 35400,
    owner: 'CAYER, SHAWN',
    taxed$: 149900,
    usage: '110',
    use: 'R1'
  },
  '14-103': {
    address: 'JEFFERSON DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.16085870175303,
        lon: -72.14496331849978
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'MOORE, DARWIN',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-113': {
    address: '108 MADISON DR',
    area: 0.71,
    building$: 160700,
    centers: [
      {
        lat: 43.15995592681797,
        lon: -72.1468508013279
      }
    ],
    cu$: 0,
    land$: 38800,
    owner: 'HAGUE, JEFFREY',
    taxed$: 199500,
    usage: '110',
    use: 'R1'
  },
  '14-118': {
    address: '178 MADISON DR',
    area: 0.71,
    building$: 103800,
    centers: [
      {
        lat: 43.15945961841713,
        lon: -72.14962892034676
      }
    ],
    cu$: 0,
    land$: 38800,
    owner: 'CLARK, RAYMOND J',
    taxed$: 142600,
    usage: '110',
    use: 'R1'
  },
  '14-120': {
    address: '374 ASHUELOT DR',
    area: 0.72,
    building$: 78400,
    centers: [
      {
        lat: 43.15871678116064,
        lon: -72.15012111543915
      }
    ],
    cu$: 900,
    land$: 38800,
    owner: 'CREED, DARLENE B',
    taxed$: 118100,
    usage: '110',
    use: 'R1'
  },
  '14-127': {
    address: '77 MADISON DR',
    area: 1.6,
    building$: 86700,
    centers: [
      {
        lat: 43.15946089034125,
        lon: -72.14579958825843
      }
    ],
    cu$: 19000,
    land$: 41400,
    owner: 'NELSON, MARY',
    taxed$: 147100,
    usage: '110',
    use: 'R1'
  },
  '14-143': {
    address: '330 ASHUELOT DR',
    area: 0.82,
    building$: 80500,
    centers: [
      {
        lat: 43.157518374553035,
        lon: -72.14993025900975
      }
    ],
    cu$: 10700,
    land$: 39400,
    owner: 'LINTNER, JAMES',
    taxed$: 130600,
    usage: '110',
    use: 'R1'
  },
  '14-141': {
    address: 'PRESIDENTIAL DR',
    area: 0.72,
    building$: 0,
    centers: [
      {
        lat: 43.158267333519404,
        lon: -72.14945719638573
      }
    ],
    cu$: 0,
    land$: 13000,
    owner: 'SWEENEY, SHAWN P',
    taxed$: 13000,
    usage: '110',
    use: 'R1'
  },
  '14-153': {
    address: '397 ASHUELOT DR',
    area: 0.69,
    building$: 142100,
    centers: [
      {
        lat: 43.15916859579395,
        lon: -72.15103829629933
      }
    ],
    cu$: 18000,
    land$: 203600,
    owner: 'FORD FAMILY LIVING TRUST',
    taxed$: 363700,
    usage: '110',
    use: 'R1W'
  },
  '14-161': {
    address: '307 ASHUELOT DR',
    area: 0.67,
    building$: 284200,
    centers: [
      {
        lat: 43.156546608550855,
        lon: -72.15073386624692
      }
    ],
    cu$: 0,
    land$: 228500,
    owner: 'NOLAN, STEVEN J',
    taxed$: 512700,
    usage: '110',
    use: 'R1W'
  },
  '14-167': {
    address: '249 ASHUELOT DR',
    area: 0.69,
    building$: 127200,
    centers: [
      {
        lat: 43.1548652787599,
        lon: -72.14923165019047
      }
    ],
    cu$: 5000,
    land$: 213600,
    owner: 'WICKENS, DARRYL A',
    taxed$: 345800,
    usage: '110',
    use: 'R1W'
  },
  '14-172': {
    address: '177 ASHUELOT DR',
    area: 0.69,
    building$: 130900,
    centers: [
      {
        lat: 43.155495551445625,
        lon: -72.14711602836026
      }
    ],
    cu$: 3000,
    land$: 223600,
    owner: 'MASTON FAM REV TRUST',
    taxed$: 357500,
    usage: '110',
    use: 'R1W'
  },
  '14-173': {
    address: '165 ASHUELOT DR',
    area: 0.69,
    building$: 210000,
    centers: [
      {
        lat: 43.15560385470887,
        lon: -72.14664420807675
      }
    ],
    cu$: 23300,
    land$: 213600,
    owner: 'TALPEY, ELIZABETH A FAMILY TRU',
    taxed$: 446900,
    usage: '110',
    use: 'R1W'
  },
  '14-176': {
    address: '121 ASHUELOT DR',
    area: 0.69,
    building$: 59700,
    centers: [
      {
        lat: 43.156175105709735,
        lon: -72.14542356506382
      }
    ],
    cu$: 0,
    land$: 213600,
    owner: 'FLANDERS, TIM A',
    taxed$: 273300,
    usage: '110',
    use: 'R1W'
  },
  '14-177': {
    address: '113 ASHUELOT DR',
    area: 0.89,
    building$: 68600,
    centers: [
      {
        lat: 43.15607385978309,
        lon: -72.1449088985429
      }
    ],
    cu$: 8500,
    land$: 181900,
    owner: 'SANGIOVANNI, ANTHONY REV TRUST',
    taxed$: 259000,
    usage: '110',
    use: 'R1W'
  },
  '14-181': {
    address: '35 ASHUELOT DR',
    area: 0.92,
    building$: 210200,
    centers: [
      {
        lat: 43.154946957500215,
        lon: -72.14412287125354
      }
    ],
    cu$: 8000,
    land$: 225000,
    owner: 'GRAYSON, HEATH',
    taxed$: 443200,
    usage: '110',
    use: 'R1W'
  },
  '14-182': {
    address: '25 ASHUELOT DR',
    area: 0.94,
    building$: 185400,
    centers: [
      {
        lat: 43.15463107580608,
        lon: -72.14451614773711
      }
    ],
    cu$: 0,
    land$: 215100,
    owner: 'SZYMANSKI, GINA L',
    taxed$: 400500,
    usage: '110',
    use: 'R1'
  },
  '14-185': {
    address: '14 VAN BUREN CIR',
    area: 0.8,
    building$: 203500,
    centers: [
      {
        lat: 43.15380095631369,
        lon: -72.14433066998947
      }
    ],
    cu$: 33200,
    land$: 219300,
    owner: 'MODZELESKI FAMILY REV TRUST',
    taxed$: 456000,
    usage: '110',
    use: 'R1W'
  },
  '14-189': {
    address: '30 VAN BUREN CIR',
    area: 0.91,
    building$: 204200,
    centers: [
      {
        lat: 43.152977630447914,
        lon: -72.14508672596244
      }
    ],
    cu$: 4400,
    land$: 260000,
    owner: 'DKBS LAND HOLDINGS, LLC',
    taxed$: 468600,
    usage: '110',
    use: 'R1W'
  },
  '14-191': {
    address: '25 VAN BUREN CIR',
    area: 0.99,
    building$: 98700,
    centers: [
      {
        lat: 43.1531702246475,
        lon: -72.14407789914043
      }
    ],
    cu$: 10200,
    land$: 225400,
    owner: 'CHIN, PETER',
    taxed$: 334300,
    usage: '110',
    use: 'R1W'
  },
  '14-192': {
    address: '183 MCKINLEY DR',
    area: 1.18,
    building$: 114600,
    centers: [
      {
        lat: 43.153404667622866,
        lon: -72.14359131960833
      }
    ],
    cu$: 4700,
    land$: 236700,
    owner: 'BARLOW, DAVID AND KATHY',
    taxed$: 356000,
    usage: '110',
    use: 'R1W'
  },
  '14-199': {
    address: '30 GARFIELD DR',
    area: 1.43,
    building$: 110200,
    centers: [
      {
        lat: 43.153680365943195,
        lon: -72.14041383882802
      }
    ],
    cu$: 3000,
    land$: 206100,
    owner: 'RAND, EDITH',
    taxed$: 319300,
    usage: '110',
    use: 'R1W'
  },
  '14-200': {
    address: '38 GARFIELD DR',
    area: 1.14,
    building$: 131700,
    centers: [
      {
        lat: 43.15334432487219,
        lon: -72.14022488229247
      }
    ],
    cu$: 9100,
    land$: 220700,
    owner: 'DELOREY, NANCY & VENTO, JANIS',
    taxed$: 361500,
    usage: '110',
    use: 'R1W'
  },
  '14-203': {
    address: '76 GARFIELD DR',
    area: 0.94,
    building$: 90000,
    centers: [
      {
        lat: 43.15256197928986,
        lon: -72.1395426713458
      }
    ],
    cu$: 8500,
    land$: 215100,
    owner: 'HAUG, INGEBORG E 2020 TRUST',
    taxed$: 313600,
    usage: '110',
    use: 'R1W'
  },
  '14-217': {
    address: '170 ASHUELOT DR',
    area: 0.75,
    building$: 79200,
    centers: [
      {
        lat: 43.15619666403987,
        lon: -72.14716020912844
      }
    ],
    cu$: 5000,
    land$: 39000,
    owner: 'PERCOSKI, KATHLEEN',
    taxed$: 123200,
    usage: '110',
    use: 'R1'
  },
  '14-212': {
    address: 'TAFT RD',
    area: 0.69,
    building$: 0,
    centers: [
      {
        lat: 43.15745284054347,
        lon: -72.14824105218034
      }
    ],
    cu$: 0,
    land$: 10800,
    owner: 'GERSHMAN, JEROLD M',
    taxed$: 10800,
    usage: '110',
    use: 'R1'
  },
  '14-213': {
    address: 'TAFT RD',
    area: 0.66,
    building$: 0,
    centers: [
      {
        lat: 43.15707581736185,
        lon: -72.14811349441335
      }
    ],
    cu$: 0,
    land$: 10800,
    owner: 'GERSHMAN, JEROLD M',
    taxed$: 10800,
    usage: '110',
    use: 'R1'
  },
  '14-218': {
    address: '54 HAYES RD',
    area: 0.69,
    building$: 88100,
    centers: [
      {
        lat: 43.156671070645984,
        lon: -72.14720494059044
      }
    ],
    cu$: 0,
    land$: 38600,
    owner: 'STEPINSKI, JOSEPH',
    taxed$: 126700,
    usage: '110',
    use: 'R1'
  },
  '14-219': {
    address: '42 HAYES RD',
    area: 0.69,
    building$: 69900,
    centers: [
      {
        lat: 43.15709722549999,
        lon: -72.14735132270175
      }
    ],
    cu$: 0,
    land$: 38600,
    owner: 'FRESCHLIN, HARRY',
    taxed$: 108500,
    usage: '110',
    use: 'R1'
  },
  '14-230': {
    address: '9 HARDING RD',
    area: 0.81,
    building$: 79500,
    centers: [
      {
        lat: 43.15836705291509,
        lon: -72.145181300109
      }
    ],
    cu$: 3000,
    land$: 39400,
    owner: 'MCSHEFFERY, JOSEPH C',
    taxed$: 121900,
    usage: '110',
    use: 'R1'
  },
  '14-231': {
    address: '31 HARDING RD',
    area: 0.8,
    building$: 79400,
    centers: [
      {
        lat: 43.15788913274382,
        lon: -72.14504257340182
      }
    ],
    cu$: 3000,
    land$: 39300,
    owner: 'ROCHFORD, TERRENCE',
    taxed$: 121700,
    usage: '110',
    use: 'R1'
  },
  '14-240': {
    address: '30 ASHUELOT DR',
    area: 0.9,
    building$: 52800,
    centers: [
      {
        lat: 43.15460851212765,
        lon: -72.1429411069398
      }
    ],
    cu$: 3000,
    land$: 43900,
    owner: 'PANISSIDI, MAUREEN T.',
    taxed$: 99700,
    usage: '110',
    use: 'R1'
  },
  '14-242': {
    address: '136 MCKINLEY DR',
    area: 1.69,
    building$: 155200,
    centers: [
      {
        lat: 43.15420506690387,
        lon: -72.14237033795665
      }
    ],
    cu$: 25100,
    land$: 45700,
    owner: 'KILDAY JR, GORDON',
    taxed$: 226000,
    usage: '110',
    use: 'R1'
  },
  '14-245': {
    address: '110 MCKINLEY DR',
    area: 1.2,
    building$: 195000,
    centers: [
      {
        lat: 43.1546617381329,
        lon: -72.14122354335868
      }
    ],
    cu$: 12400,
    land$: 44900,
    owner: "L'HOMMEDIEU, LAWRENCE & AMALIA",
    taxed$: 252300,
    usage: '110',
    use: 'R1'
  },
  '14-256': {
    address: '69 MCKINLEY DR',
    area: 1.64,
    building$: 129600,
    centers: [
      {
        lat: 43.15446419794171,
        lon: -72.13973853088358
      }
    ],
    cu$: 13100,
    land$: 41500,
    owner: 'COYNE, JOSEPH C',
    taxed$: 184200,
    usage: '110',
    use: 'R1'
  },
  '14-263': {
    address: '43 MONROE CIR',
    area: 2.34,
    building$: 140100,
    centers: [
      {
        lat: 43.15318529722537,
        lon: -72.13861017310651
      }
    ],
    cu$: 2200,
    land$: 46800,
    owner: 'GREEN, PETER G',
    taxed$: 189100,
    usage: '110',
    use: 'R1'
  },
  '14-274': {
    address: '81 LINCOLN DR',
    area: 0.84,
    building$: 116800,
    centers: [
      {
        lat: 43.15567079364893,
        lon: -72.14017641500531
      }
    ],
    cu$: 0,
    land$: 39500,
    owner: 'BOUCHARD, DAVID M',
    taxed$: 156300,
    usage: '110',
    use: 'R1'
  },
  '14-275': {
    address: '99 LINCOLN DR',
    area: 1.01,
    building$: 75300,
    centers: [
      {
        lat: 43.1554855859488,
        lon: -72.14077526411192
      }
    ],
    cu$: 11000,
    land$: 40500,
    owner: 'WOODWARD, SUSAN',
    taxed$: 126800,
    usage: '110',
    use: 'R1'
  },
  '14-285': {
    address: '229 LINCOLN DR',
    area: 0.8,
    building$: 82200,
    centers: [
      {
        lat: 43.15849429520625,
        lon: -72.14447800923742
      }
    ],
    cu$: 3000,
    land$: 39300,
    owner: 'BEZDELOVS, DANIEL G',
    taxed$: 124500,
    usage: '110',
    use: 'R1'
  },
  '14-293': {
    address: '102 LINCOLN DR',
    area: 0.85,
    building$: 83600,
    centers: [
      {
        lat: 43.156377021188,
        lon: -72.14068453635262
      }
    ],
    cu$: 3000,
    land$: 39600,
    owner: 'DEROECK, RICHARD S LIVING TRUS',
    taxed$: 126200,
    usage: '110',
    use: 'R1'
  },
  '14-288': {
    address: 'LINCOLN DR',
    area: 1.56,
    building$: 0,
    centers: [
      {
        lat: 43.1575036018037,
        lon: -72.14280687430674
      }
    ],
    cu$: 0,
    land$: 11600,
    owner: 'LAPRADE, MARK S',
    taxed$: 11600,
    usage: '110',
    use: 'R1'
  },
  '14-299': {
    address: '84 JACKSON DR',
    area: 0.78,
    building$: 91800,
    centers: [
      {
        lat: 43.1571337580263,
        lon: -72.14028416286808
      }
    ],
    cu$: 5000,
    land$: 43100,
    owner: 'BURGESS, WILLIAM E. JR',
    taxed$: 139900,
    usage: '110',
    use: 'R1'
  },
  '14-322': {
    address: '20 LINCOLN DR',
    area: 1.61,
    building$: 71300,
    centers: [
      {
        lat: 43.15684776723131,
        lon: -72.13764718112832
      }
    ],
    cu$: 12600,
    land$: 39300,
    owner: 'ALLEANO, MICHAEL J & CHRISTIE',
    taxed$: 123200,
    usage: '110',
    use: 'R1'
  },
  '14-332': {
    address: '322 PRESIDENTIAL DR',
    area: 1.09,
    building$: 67100,
    centers: [
      {
        lat: 43.15909324477774,
        lon: -72.13833592128076
      }
    ],
    cu$: 0,
    land$: 41600,
    owner: 'VANACORE, RAYMOND J',
    taxed$: 108700,
    usage: '110',
    use: 'R1A'
  },
  '14-339': {
    address: '94 COOLIDGE DR',
    area: 1.15,
    building$: 0,
    centers: [
      {
        lat: 43.15994514847256,
        lon: -72.13893125984904
      }
    ],
    cu$: 0,
    land$: 9100,
    owner: 'DUNPHY, SHAWN',
    taxed$: 9100,
    usage: '110',
    use: 'R1'
  },
  '14-349': {
    address: '269 COOLIDGE DR',
    area: 1.84,
    building$: 104100,
    centers: [
      {
        lat: 43.164106555204036,
        lon: -72.1383292591165
      }
    ],
    cu$: 0,
    land$: 41800,
    owner: 'MANCINI, FRANK J',
    taxed$: 145900,
    usage: '110',
    use: 'R1'
  },
  '14-341': {
    address: 'COOLIDGE DR',
    area: 2.33,
    building$: 0,
    centers: [
      {
        lat: 43.15974550559154,
        lon: -72.13726433220361
      }
    ],
    cu$: 0,
    land$: 11900,
    owner: 'DUNPHY, JAMES',
    taxed$: 11900,
    usage: '110',
    use: 'R1'
  },
  '14-378': {
    address: '59 BUCHANAN CIR',
    area: 1.45,
    building$: 81100,
    centers: [
      {
        lat: 43.162391863764604,
        lon: -72.13886662372103
      }
    ],
    cu$: 1900,
    land$: 41200,
    owner: 'WHITE, ANDREW',
    taxed$: 124200,
    usage: '110',
    use: 'R1'
  },
  '14-372': {
    address: '81 COOLIDGE DR',
    area: 2.32,
    building$: 144300,
    centers: [
      {
        lat: 43.16102673457097,
        lon: -72.13931478995632
      }
    ],
    cu$: 1900,
    land$: 42500,
    owner: 'CALE, ROBERT L',
    taxed$: 188700,
    usage: '110',
    use: 'R1'
  },
  '15-9': {
    address: 'VALLEY RD',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.15531377676533,
        lon: -72.09862973929043
      }
    ],
    cu$: 800,
    land$: 30200,
    owner: 'THONIS, KATHERINE',
    taxed$: 31000,
    usage: '110',
    use: 'R1'
  },
  '15-13': {
    address: 'VALLEY RD',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.15289039410295,
        lon: -72.0990702110773
      }
    ],
    cu$: 0,
    land$: 23400,
    owner: 'BARKIE, DAVID',
    taxed$: 23400,
    usage: '110',
    use: 'R1'
  },
  '15-18': {
    address: '959 VALLEY RD',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.150099926265845,
        lon: -72.09858955435196
      }
    ],
    cu$: 0,
    land$: 23400,
    owner: 'CROUSS, TIMOTHY K',
    taxed$: 23400,
    usage: '110',
    use: 'R1'
  },
  '15-25': {
    address: '1022 VALLEY RD',
    area: 11.28,
    building$: 85900,
    centers: [
      {
        lat: 43.148053699942686,
        lon: -72.10370629357743
      }
    ],
    cu$: 17800,
    land$: 52700,
    owner: 'SNELL, KAREN A REVOCABLE TRUST',
    taxed$: 156400,
    usage: '110',
    use: 'R1'
  },
  '15-34': {
    address: '576 VALLEY RD',
    area: 7,
    building$: 15900,
    centers: [
      {
        lat: 43.16110165162079,
        lon: -72.10352900210071
      }
    ],
    cu$: 3400,
    land$: 43900,
    owner: 'KIBBE, JEFFREY J',
    taxed$: 63200,
    usage: '110',
    use: 'R1'
  },
  '15-59': {
    address: '1012 FAXON HILL RD',
    area: 6.38,
    building$: 53200,
    centers: [
      {
        lat: 43.15989145816341,
        lon: -72.12421450621936
      }
    ],
    cu$: 0,
    land$: 180600,
    owner: 'MALONEY, R. A. LIVING TRUST',
    taxed$: 233800,
    usage: '110',
    use: 'R1W'
  },
  '15-78': {
    address: '825 MILLEN POND RD',
    area: 0.11786,
    building$: 15500,
    centers: [
      {
        lat: 43.166315266578266,
        lon: -72.12635197887194
      }
    ],
    cu$: 2400,
    land$: 0,
    owner: 'LIBBY, TYLER J',
    taxed$: 17900,
    usage: '110',
    use: 'R1W'
  },
  '15-89': {
    address: '1021 MILLEN POND RD',
    area: 0.47,
    building$: 38400,
    centers: [
      {
        lat: 43.16161810090129,
        lon: -72.12717868550124
      }
    ],
    cu$: 4100,
    land$: 145900,
    owner: 'BLACK, JAMES L',
    taxed$: 188400,
    usage: '110',
    use: 'R1W'
  },
  '15-107': {
    address: '882 MILLEN POND RD',
    area: 0.9,
    building$: 67700,
    centers: [
      {
        lat: 43.16510648971744,
        lon: -72.1273304741174
      }
    ],
    cu$: 0,
    land$: 49900,
    owner: 'CARTER, STEPHEN C',
    taxed$: 117600,
    usage: '110',
    use: 'R1'
  },
  '15-112-01': {
    address: '808 MILLEN POND RD',
    area: 0.26,
    building$: 13100,
    centers: [
      {
        lat: 43.16695048711112,
        lon: -72.12650105832633
      },
      {
        lat: 43.166793422562215,
        lon: -72.12604907506827
      }
    ],
    cu$: 0,
    land$: 33700,
    owner: 'MACDONALD, LEANDRA ANN',
    taxed$: 46800,
    usage: '110',
    use: 'R1'
  },
  '15-114': {
    address: '756 MILLEN POND RD',
    area: 0.76,
    building$: 84200,
    centers: [
      {
        lat: 43.16806973975226,
        lon: -72.12502090747276
      }
    ],
    cu$: 1800,
    land$: 58600,
    owner: 'KAVANAGH, JUDITH ANN BROCKWAY',
    taxed$: 144600,
    usage: '110',
    use: 'R1'
  },
  '15-126': {
    address: '273 PRESIDENTIAL DR',
    area: 0.75,
    building$: 132300,
    centers: [
      {
        lat: 43.157966454061224,
        lon: -72.13664729881657
      }
    ],
    cu$: 14100,
    land$: 39000,
    owner: 'GUNDECK, KATHLEEN A',
    taxed$: 185400,
    usage: '110',
    use: 'R1'
  },
  '15-127': {
    address: 'ADAMS DR',
    area: 0.75,
    building$: 0,
    centers: [
      {
        lat: 43.15767859181597,
        lon: -72.13590250802052
      }
    ],
    cu$: 300,
    land$: 10900,
    owner: 'WASHINGTON, TOWN OF - TC DEED',
    taxed$: 11200,
    usage: '300',
    use: 'EX-M'
  },
  '15-131': {
    address: 'ADAMS DR',
    area: 0.75,
    building$: 0,
    centers: [
      {
        lat: 43.15622035920491,
        lon: -72.13662818558491
      }
    ],
    cu$: 0,
    land$: 10900,
    owner: 'CONANT III, CHARLES L',
    taxed$: 10900,
    usage: '110',
    use: 'R1'
  },
  '15-144': {
    address: 'ADAMS DR',
    area: 0.75,
    building$: 0,
    centers: [
      {
        lat: 43.15159216661989,
        lon: -72.13637272346783
      }
    ],
    cu$: 0,
    land$: 26100,
    owner: 'BERDECIA, JORGE L',
    taxed$: 26100,
    usage: '110',
    use: 'R1A'
  },
  '16-7-03': {
    address: '46 POINT RD',
    area: 80.16,
    building$: 100,
    centers: [
      {
        lat: 43.15245449322861,
        lon: -72.08854789508054
      }
    ],
    cu$: 500,
    land$: 36352,
    owner: 'GRAY, ROBIN M',
    taxed$: 36952,
    usage: '110',
    use: 'R1A'
  },
  '16-15': {
    address: '596 HIGHLAND HAVEN RD',
    area: 0.25,
    building$: 50200,
    centers: [
      {
        lat: 43.14724624369184,
        lon: -72.08888869266028
      }
    ],
    cu$: 0,
    land$: 165000,
    owner: 'KOLINSKY, GAIL',
    taxed$: 215200,
    usage: '110',
    use: 'R1W'
  },
  '16-13': {
    address: '580 HIGHLAND HAVEN RD',
    area: 0.21,
    building$: 159700,
    centers: [
      {
        lat: 43.14760651381212,
        lon: -72.08917057359668
      }
    ],
    cu$: 3000,
    land$: 144800,
    owner: 'LUCAS, JOSEPH A',
    taxed$: 307500,
    usage: '110',
    use: 'R1W'
  },
  '16-8': {
    address: 'COVE RD',
    area: 31.2,
    building$: 0,
    centers: [
      {
        lat: 43.15074065485061,
        lon: -72.0943414702654
      }
    ],
    cu$: 0,
    land$: 77200,
    owner: 'LANIGAN, MICHELLE C',
    taxed$: 77200,
    usage: '110',
    use: 'R1A'
  },
  '16-33': {
    address: '463 HIGHLAND HAVEN RD',
    area: 0.77,
    building$: 0,
    centers: [
      {
        lat: 43.14866472077377,
        lon: -72.08620891459651
      }
    ],
    cu$: 0,
    land$: 21100,
    owner: 'RUSSELL, CAROLYN BAKER',
    taxed$: 21100,
    usage: '110',
    use: 'R1A'
  },
  '16-25': {
    address: '39 MAPLE WAY',
    area: 0.64,
    building$: 115300,
    centers: [
      {
        lat: 43.14815237496521,
        lon: -72.08753966299531
      }
    ],
    cu$: 0,
    land$: 36400,
    owner: 'BARDEN, RALF I & INGER A REV F',
    taxed$: 151700,
    usage: '110',
    use: 'R1A'
  },
  '16-39': {
    address: '386 HIGHLAND HAVEN RD',
    area: 2,
    building$: 94800,
    centers: [
      {
        lat: 43.14910161145942,
        lon: -72.0841967681111
      }
    ],
    cu$: 0,
    land$: 37800,
    owner: 'PERLA, ORLANDO J II',
    taxed$: 132600,
    usage: '110',
    use: 'R1A'
  },
  '16-40': {
    address: 'HIGHLAND HAVEN RD',
    area: 0.47,
    building$: 0,
    centers: [
      {
        lat: 43.148969099493286,
        lon: -72.08501111150599
      }
    ],
    cu$: 0,
    land$: 14900,
    owner: 'HARRIINGTON, DENNIS',
    taxed$: 14900,
    usage: '110',
    use: 'R1A'
  },
  '16-45': {
    address: '522 HIGHLAND HAVEN RD',
    area: 2.43,
    building$: 0,
    centers: [
      {
        lat: 43.14976818883942,
        lon: -72.0883503607839
      }
    ],
    cu$: 0,
    land$: 17100,
    owner: 'STYGLES, STUART W',
    taxed$: 17100,
    usage: '110',
    use: 'R1A'
  },
  '16-72': {
    address: '1191 SO MAIN ST',
    area: 1.44,
    building$: 11000,
    centers: [
      {
        lat: 43.151629786149094,
        lon: -72.06918158817358
      }
    ],
    cu$: 1000,
    land$: 32900,
    owner: 'SCRUTON, CHRISTOPHER B',
    taxed$: 44900,
    usage: '110',
    use: 'R1'
  },
  '16-77-03': {
    address: '58 MILL ST',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.168939186089844,
        lon: -72.08456987693708
      }
    ],
    cu$: 0,
    land$: 5746,
    owner: 'LAWRENCE, KEVIN A',
    taxed$: 5746,
    usage: '110',
    use: 'R1'
  },
  '16-91': {
    address: '36 WASHINGTON DR',
    area: 2.3,
    building$: 82300,
    centers: [
      {
        lat: 43.16656079309519,
        lon: -72.06213332328359
      }
    ],
    cu$: 0,
    land$: 42500,
    owner: 'MOULDER, VIVIAN',
    taxed$: 124800,
    usage: '110',
    use: 'R1'
  },
  '16-98': {
    address: '4100 E WASHINGTON RD',
    area: 3.3,
    building$: 0,
    centers: [
      {
        lat: 43.16496628816559,
        lon: -72.05918251412214
      }
    ],
    cu$: 0,
    land$: 13200,
    owner: 'SACCO, JOHN JR',
    taxed$: 13200,
    usage: '110',
    use: 'R1'
  },
  '16-111': {
    address: '',
    area: 3.38,
    building$: 0,
    centers: [
      {
        lat: 43.16748139671781,
        lon: -72.05366611219773
      }
    ],
    cu$: 0,
    land$: 13200,
    owner: 'STILLO, CARMELLO',
    taxed$: 13200,
    usage: '110',
    use: 'R1'
  },
  '16-130': {
    address: '576 HIGHLAND HAVEN RD',
    area: 0.5,
    building$: 0,
    centers: [
      {
        lat: 43.14793845494778,
        lon: -72.08937317473969
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'HIGHLAND HAVEN VILLAGE DIST',
    taxed$: 0,
    usage: '110',
    use: 'R1'
  },
  '17-25': {
    address: '186 WILD ACRE DR',
    area: 0.93,
    building$: 83800,
    centers: [
      {
        lat: 43.15219759638114,
        lon: -72.03024868183874
      },
      {
        lat: 43.15280454349772,
        lon: -72.03005723199335
      }
    ],
    cu$: 2100,
    land$: 103900,
    owner: 'KLEIN, PATRICIA L',
    taxed$: 189800,
    usage: '110',
    use: 'R1A'
  },
  '17-26': {
    address: '214 WILD ACRE DR',
    area: 2.673,
    building$: 69400,
    centers: [
      {
        lat: 43.1520834920875,
        lon: -72.0283594255669
      }
    ],
    cu$: 2000,
    land$: 72100,
    owner: 'CARUSO, JESSIE',
    taxed$: 143500,
    usage: '110',
    use: 'R1A'
  },
  '17-28': {
    address: 'WILD ACRE DR',
    area: 8,
    building$: 0,
    centers: [
      {
        lat: 43.15377548307137,
        lon: -72.0273038364081
      }
    ],
    cu$: 1100,
    land$: 52132,
    owner: 'NORTH STAR TRUST',
    taxed$: 53232,
    usage: '110',
    use: 'R1W'
  },
  '17-44': {
    address: '219 SMITH POND RD',
    area: 2.08,
    building$: 0,
    centers: [
      {
        lat: 43.152466072009815,
        lon: -72.03683419943503
      }
    ],
    cu$: 4900,
    land$: 19000,
    owner: 'VANDERWENDE, SARAH B',
    taxed$: 23900,
    usage: '110',
    use: 'R1'
  },
  '20-141': {
    address: '678 HIGHLAND HAVEN RD',
    area: 0.6,
    building$: 68900,
    centers: [
      {
        lat: 43.145459182581085,
        lon: -72.0867291225105
      }
    ],
    cu$: 0,
    land$: 188100,
    owner: 'MAZUR, PAMELA J',
    taxed$: 257000,
    usage: '110',
    use: 'R1W'
  },
  '20-143': {
    address: '669 HIGHLAND HAVEN RD',
    area: 0.9,
    building$: 78000,
    centers: [
      {
        lat: 43.14641818961216,
        lon: -72.08648520169078
      }
    ],
    cu$: 2400,
    land$: 49900,
    owner: 'GULLAGE, JOSEPH B',
    taxed$: 130300,
    usage: '110',
    use: 'R1A'
  },
  '20-170': {
    address: '704 HIGHLAND HAVEN RD',
    area: 0.76,
    building$: 0,
    centers: [
      {
        lat: 43.14539408147214,
        lon: -72.08491801184935
      }
    ],
    cu$: 0,
    land$: 139100,
    owner: 'GULLAGE, JOSEPH B',
    taxed$: 139100,
    usage: '110',
    use: 'R1'
  },
  '21-12': {
    address: '407 DOLE SCHOOL HOUSE RD',
    area: 0.58,
    building$: 28900,
    centers: [
      {
        lat: 43.13947974509321,
        lon: -72.04553626935295
      }
    ],
    cu$: 5000,
    land$: 30400,
    owner: 'ELLIS, JENNIFER M',
    taxed$: 64300,
    usage: '110',
    use: 'R1'
  },
  '22-2': {
    address: '262 NO MAIN ST',
    area: 1,
    building$: 18200,
    centers: [
      {
        lat: 43.182772181944955,
        lon: -72.10147096213667
      }
    ],
    cu$: 4100,
    land$: 32400,
    owner: 'HARDY, JOHN J & SHARON T REVOC',
    taxed$: 54700,
    usage: '110',
    use: 'R1'
  },
  '21-16': {
    address: '371 DOLE SCHOOL HOUSE RD',
    area: 11.5,
    building$: 34400,
    centers: [
      {
        lat: 43.141055779887346,
        lon: -72.0467873359781
      }
    ],
    cu$: 7000,
    land$: 33279,
    owner: 'BELL, CRAIG BARROW REVOC TRUST',
    taxed$: 74679,
    usage: '110',
    use: 'R1'
  },
  '22-9': {
    address: '46 NO MAIN ST',
    area: 0.18,
    building$: 197800,
    centers: [
      {
        lat: 43.17731893882596,
        lon: -72.0981658238154
      }
    ],
    cu$: 0,
    land$: 37800,
    owner: 'WASHINGTON, TOWN OF - LIBRARY',
    taxed$: 235600,
    usage: '300',
    use: 'EX-M'
  },
  '22-30': {
    address: '36 HALFMOON PD RD',
    area: 0.39,
    building$: 153500,
    centers: [
      {
        lat: 43.17576661620262,
        lon: -72.09572298720707
      }
    ],
    cu$: 9900,
    land$: 29500,
    owner: 'ANWAR, JEFFRI',
    taxed$: 192900,
    usage: '110',
    use: 'R1'
  },
  '22-6': {
    address: '112 NO MAIN ST',
    area: 0.62,
    building$: 0,
    centers: [
      {
        lat: 43.1789081257305,
        lon: -72.09919586953366
      }
    ],
    cu$: 0,
    land$: 17200,
    owner: 'CILLEY, DONNA J',
    taxed$: 17200,
    usage: '110',
    use: 'R1'
  },
  '22-13': {
    address: '37 HALFMOON PD RD',
    area: 3.9,
    building$: 210800,
    centers: [
      {
        lat: 43.17688287834415,
        lon: -72.09527727654137
      }
    ],
    cu$: 25400,
    land$: 40400,
    owner: 'ROUSE, BARBARA J',
    taxed$: 276600,
    usage: '110',
    use: 'R1'
  },
  '22-14': {
    address: '59 HALFMOON PD RD',
    area: 0.74,
    building$: 123800,
    centers: [
      {
        lat: 43.17586375104962,
        lon: -72.0946751190578
      }
    ],
    cu$: 0,
    land$: 35000,
    owner: 'OTTERSON FAM REV TRUST,G R&S',
    taxed$: 158800,
    usage: '110',
    use: 'R1'
  },
  '22-17': {
    address: 'HALFMOON PD RD',
    area: 0.09,
    building$: 0,
    centers: [
      {
        lat: 43.17554245017631,
        lon: -72.09418161939472
      }
    ],
    cu$: 7100,
    land$: 8300,
    owner: 'OTTERSON FAM REV TRUST,G R&S',
    taxed$: 15400,
    usage: '110',
    use: 'R1'
  },
  '22-24': {
    address: '100 HALFMOON PD RD',
    area: 0.26,
    building$: 51600,
    centers: [
      {
        lat: 43.17509049689984,
        lon: -72.09337269173986
      }
    ],
    cu$: 0,
    land$: 39500,
    owner: 'WASHINGTON HISTORICAL SOCIETY',
    taxed$: 91100,
    usage: '260',
    use: 'CI'
  },
  '22-34': {
    address: '90 SO MAIN ST',
    area: 3.4,
    building$: 86400,
    centers: [
      {
        lat: 43.174326638144485,
        lon: -72.09577489116076
      }
    ],
    cu$: 473400,
    land$: 72800,
    owner: 'GRANITE STATE TELEPHONE',
    taxed$: 632600,
    usage: '260',
    use: 'CI'
  },
  '22-35': {
    address: '34 SO MAIN ST',
    area: 1.6,
    building$: 161500,
    centers: [
      {
        lat: 43.17525840342953,
        lon: -72.09626484864751
      }
    ],
    cu$: 27700,
    land$: 35400,
    owner: 'BLACKWELL, ROBERT A',
    taxed$: 224600,
    usage: '110',
    use: 'R1'
  },
  '22-37-01': {
    address: 'FAXON HILL RD',
    area: 8,
    building$: 0,
    centers: [
      {
        lat: 43.17457051175271,
        lon: -72.09729459172259
      }
    ],
    cu$: 0,
    land$: 6000,
    owner: 'TANNER, KENNETH E',
    taxed$: 6000,
    usage: '110',
    use: 'R1'
  },
  '22-42': {
    address: '71 FAXON HILL RD',
    area: 0.25,
    building$: 61000,
    centers: [
      {
        lat: 43.17578586304107,
        lon: -72.09958825681333
      }
    ],
    cu$: 7200,
    land$: 31500,
    owner: 'CORNELL, KENNETH S',
    taxed$: 99700,
    usage: '110',
    use: 'R1'
  },
  '22-37-02': {
    address: 'VALLEY RD',
    area: 4,
    building$: 0,
    centers: [
      {
        lat: 43.17282645149726,
        lon: -72.09493561672204
      }
    ],
    cu$: 1100,
    land$: 24300,
    owner: 'TANNER, KENNETH E',
    taxed$: 25400,
    usage: '110',
    use: 'R1'
  },
  '22-43': {
    address: 'FAXON HILL RD',
    area: 1.11,
    building$: 0,
    centers: [
      {
        lat: 43.175765677198704,
        lon: -72.10044853643346
      }
    ],
    cu$: 0,
    land$: 9100,
    owner: 'WASHINGTON, TOWN OF - CEMETERY',
    taxed$: 9100,
    usage: '300',
    use: 'EX-M'
  },
  '22-53': {
    address: '21 NO MAIN ST',
    area: 0.21,
    building$: 112600,
    centers: [
      {
        lat: 43.1765856537655,
        lon: -72.09771839645438
      }
    ],
    cu$: 0,
    land$: 25100,
    owner: 'DOZOIS, NORRIS J',
    taxed$: 137700,
    usage: '110',
    use: 'R1'
  },
  '22-56': {
    address: '11 LEMPSTER MT RD',
    area: 2.341,
    building$: 39100,
    centers: [
      {
        lat: 43.176944458597035,
        lon: -72.09962607446435
      }
    ],
    cu$: 0,
    land$: 34000,
    owner: 'WISNIEWSKI, DAVID',
    taxed$: 73100,
    usage: '110',
    use: 'R1'
  },
  '22-64': {
    address: '64 LEMPSTER MT RD',
    area: 1.7,
    building$: 213400,
    centers: [
      {
        lat: 43.178809486652874,
        lon: -72.10029157498681
      }
    ],
    cu$: 10700,
    land$: 41600,
    owner: 'MUGAR, CAROLYN J',
    taxed$: 265700,
    usage: '110',
    use: 'R1'
  },
  '22-71': {
    address: '143 NO MAIN ST',
    area: 0.5,
    building$: 101800,
    centers: [
      {
        lat: 43.17934953851902,
        lon: -72.10031120502673
      }
    ],
    cu$: 6400,
    land$: 37500,
    owner: 'MOSER, BRIAN P',
    taxed$: 145700,
    usage: '110',
    use: 'R1'
  },
  '23-5': {
    address: '2310 E WASHINGTON RD',
    area: 1,
    building$: 76300,
    centers: [
      {
        lat: 43.19174223281341,
        lon: -72.01980265790466
      }
    ],
    cu$: 10500,
    land$: 44600,
    owner: 'SCOTT FAMILY INVESTMENT TRUST',
    taxed$: 131400,
    usage: '110',
    use: 'R1'
  },
  '23-6': {
    address: '2278 E WASHINGTON RD',
    area: 0.25,
    building$: 68200,
    centers: [
      {
        lat: 43.19155758895495,
        lon: -72.01939730071481
      }
    ],
    cu$: 0,
    land$: 38500,
    owner: 'EAST WASHINGTON BAPTIST CHURCH',
    taxed$: 106700,
    usage: '260',
    use: 'CI'
  },
  '22-72': {
    address: 'SO MAIN ST',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.17395227946996,
        lon: -72.0948387514955
      }
    ],
    cu$: 0,
    land$: 18200,
    owner: 'TANNER, KENNETH E',
    taxed$: 18200,
    usage: '110',
    use: 'R1'
  },
  '23-11': {
    address: '180 BRADFORD SPRINGS RD',
    area: 15.68,
    building$: 0,
    centers: [
      {
        lat: 43.195279623062866,
        lon: -72.01688723199193
      }
    ],
    cu$: 6900,
    land$: 27668,
    owner: 'MACDONALD, ADAM T',
    taxed$: 34568,
    usage: '110',
    use: 'R1'
  },
  '23-12': {
    address: 'OLD HILLSBORO RD',
    area: 23.44,
    building$: 0,
    centers: [
      {
        lat: 43.192123954962085,
        lon: -72.01473724489009
      }
    ],
    cu$: 0,
    land$: 49800,
    owner: 'HARVEY, GREIG',
    taxed$: 49800,
    usage: '110',
    use: 'R1'
  },
  '23-13': {
    address: 'OLD HILLSBORO RD',
    area: 2.7,
    building$: 0,
    centers: [
      {
        lat: 43.19126519207593,
        lon: -72.01620156385201
      }
    ],
    cu$: 0,
    land$: 25800,
    owner: 'FACCHINA, BAZIL T',
    taxed$: 25800,
    usage: '110',
    use: 'R1'
  },
  '23-19': {
    address: 'E WASHINGTON RD',
    area: 9.73,
    building$: 0,
    centers: [
      {
        lat: 43.1917208513462,
        lon: -72.01717691056554
      }
    ],
    cu$: 0,
    land$: 21000,
    owner: 'WASHINGTON, TOWN OF - CEMETERY',
    taxed$: 21000,
    usage: '300',
    use: 'EX-M'
  },
  '23-47': {
    address: 'PURLING BECK RD',
    area: 0.23,
    building$: 0,
    centers: [
      {
        lat: 43.190082893941344,
        lon: -72.0195017722492
      }
    ],
    cu$: 0,
    land$: 31800,
    owner: 'WASHINGTON, TOWN OF-EW SALLY J',
    taxed$: 31800,
    usage: '300',
    use: 'EX-M'
  },
  '23-49': {
    address: 'E WASHINGTON RD',
    area: 0.17,
    building$: 0,
    centers: [
      {
        lat: 43.1915860167957,
        lon: -72.02047603539947
      }
    ],
    cu$: 0,
    land$: 11900,
    owner: 'SCOTT FAMILY INVESTMENT TRUST',
    taxed$: 11900,
    usage: '110',
    use: 'R1'
  },
  '24-11': {
    address: 'VALLEY RD',
    area: 0.54,
    building$: 0,
    centers: [
      {
        lat: 43.14501527343569,
        lon: -72.09808317919038
      }
    ],
    cu$: 0,
    land$: 26400,
    owner: 'GIROUARD, BRUCE M',
    taxed$: 26400,
    usage: '110',
    use: 'R1A'
  },
  '23-51': {
    address: '2399 E WASHINGTON RD',
    area: 7,
    building$: 0,
    centers: [
      {
        lat: 43.19167526379976,
        lon: -72.02408948052519
      }
    ],
    cu$: 0,
    land$: 26963,
    owner: 'COOK, R E & L T REV TRUST',
    taxed$: 26963,
    usage: '110',
    use: 'R1'
  },
  '24-12': {
    address: '1173 VALLEY RD',
    area: 0.69,
    building$: 0,
    centers: [
      {
        lat: 43.14489500676166,
        lon: -72.09740817188717
      }
    ],
    cu$: 5600,
    land$: 38600,
    owner: 'GAHN, ROBERT C',
    taxed$: 44200,
    usage: '110',
    use: 'R1'
  },
  '23-56': {
    address: 'E WASHINGTON RD',
    area: 8.9,
    building$: 0,
    centers: [
      {
        lat: 43.19155351708612,
        lon: -72.02591839980958
      }
    ],
    cu$: 0,
    land$: 556,
    owner: 'ROBINSON, SANDRA J',
    taxed$: 556,
    usage: '110',
    use: 'R1'
  },
  '24-4': {
    address: '1178 VALLEY RD',
    area: 1.31,
    building$: 40800,
    centers: [
      {
        lat: 43.14425227359848,
        lon: -72.09726081259113
      }
    ],
    cu$: 4200,
    land$: 41000,
    owner: 'WRIGHT, SHAUN',
    taxed$: 86000,
    usage: '110',
    use: 'R1A'
  },
  '24-5': {
    address: '1200 VALLEY RD',
    area: 0.73,
    building$: 11900,
    centers: [
      {
        lat: 43.1443142749378,
        lon: -72.09667327937464
      }
    ],
    cu$: 800,
    land$: 38900,
    owner: 'PILLSBURY, DENIS R',
    taxed$: 51600,
    usage: '110',
    use: 'R1A'
  },
  '24-10': {
    address: '1262 VALLEY RD',
    area: 0.68,
    building$: 0,
    centers: [
      {
        lat: 43.14333627689979,
        lon: -72.0950350328294
      }
    ],
    cu$: 3700,
    land$: 30900,
    owner: 'BOULEY, JASON',
    taxed$: 34600,
    usage: '110',
    use: 'R1A'
  },
  '24-9': {
    address: 'VALLEY RD',
    area: 0.68,
    building$: 0,
    centers: [
      {
        lat: 43.14344884427083,
        lon: -72.09528088879544
      }
    ],
    cu$: 0,
    land$: 30900,
    owner: 'IVES, AARON',
    taxed$: 30900,
    usage: '110',
    use: 'R1A'
  },
  '24-17': {
    address: '1253 VALLEY RD',
    area: 1.08,
    building$: 80400,
    centers: [
      {
        lat: 43.14418757953907,
        lon: -72.09479395361836
      }
    ],
    cu$: 1300,
    land$: 40600,
    owner: 'BERTRAND, KERRY',
    taxed$: 122300,
    usage: '110',
    use: 'R1A'
  },
  '24-16-01': {
    address: 'VALLEY RD',
    area: 0.27,
    building$: 0,
    centers: [
      {
        lat: 43.1444317659202,
        lon: -72.09556942335281
      }
    ],
    cu$: 0,
    land$: 14100,
    owner: 'HESELTON, HAROLD E & LAURA',
    taxed$: 14100,
    usage: '110',
    use: 'R1A'
  },
  '24-21': {
    address: '1318 VALLEY RD',
    area: 0.27,
    building$: 0,
    centers: [
      {
        lat: 43.14372006332558,
        lon: -72.09305861421666
      }
    ],
    cu$: 5700,
    land$: 14100,
    owner: 'REYNOLDS FAMILY TRUST OF 2021',
    taxed$: 19800,
    usage: '110',
    use: 'R1A'
  },
  '24-34': {
    address: '1476 VALLEY RD',
    area: 0.27,
    building$: 0,
    centers: [
      {
        lat: 43.140247395618744,
        lon: -72.09219866049057
      }
    ],
    cu$: 600,
    land$: 14100,
    owner: 'KENDRICK LIVING TRUST',
    taxed$: 14700,
    usage: '110',
    use: 'R1A'
  },
  '24-42': {
    address: '1597 VALLEY RD',
    area: 2.39,
    building$: 0,
    centers: [
      {
        lat: 43.13907414678328,
        lon: -72.08879543223019
      }
    ],
    cu$: 0,
    land$: 21300,
    owner: 'DRISCOLL FAMILY REVOCABLE TRUS',
    taxed$: 21300,
    usage: '110',
    use: 'R1A'
  },
  '24-60': {
    address: '34 LOOKOUT POINT RD',
    area: 0.23,
    building$: 61000,
    centers: [
      {
        lat: 43.140418461207815,
        lon: -72.08759204133446
      }
    ],
    cu$: 9700,
    land$: 179700,
    owner: 'WELKES, MORRIS',
    taxed$: 250400,
    usage: '110',
    use: 'R1W'
  },
  '24-62': {
    address: '24 LOOKOUT POINT RD',
    area: 0.53,
    building$: 47600,
    centers: [
      {
        lat: 43.14031630007312,
        lon: -72.08726819646799
      },
      {
        lat: 43.13998796319149,
        lon: -72.0877377727911
      }
    ],
    cu$: 15200,
    land$: 198900,
    owner: 'TURGEON, ARTHUR',
    taxed$: 261700,
    usage: '110',
    use: 'R1W'
  },
  '24-69': {
    address: '38 LAKEVIEW TERR',
    area: 0.64,
    building$: 48300,
    centers: [
      {
        lat: 43.14196528866556,
        lon: -72.08989605585134
      }
    ],
    cu$: 5000,
    land$: 180700,
    owner: 'MALINCONICO, PATRICIA A',
    taxed$: 234000,
    usage: '110',
    use: 'R1W'
  },
  '24-79': {
    address: '2 BEECH WAY',
    area: 0.3,
    building$: 27000,
    centers: [
      {
        lat: 43.14401953866317,
        lon: -72.09221551642516
      }
    ],
    cu$: 3300,
    land$: 22700,
    owner: 'HUBBARD, GEOFFREY',
    taxed$: 53000,
    usage: '110',
    use: 'R1A'
  },
  '24-82': {
    address: '38 BEECH WAY',
    area: 1.02,
    building$: 14700,
    centers: [
      {
        lat: 43.14407472434536,
        lon: -72.0912857387516
      }
    ],
    cu$: 200,
    land$: 85900,
    owner: 'KARACIUS, DELIA M',
    taxed$: 100800,
    usage: '110',
    use: 'R1W'
  },
  '24-89': {
    address: '44 BIRCH POINT WAY',
    area: 0.34,
    building$: 83100,
    centers: [
      {
        lat: 43.1452653872664,
        lon: -72.08998786334936
      }
    ],
    cu$: 0,
    land$: 160800,
    owner: 'BARNES, DEBORAH',
    taxed$: 243900,
    usage: '110',
    use: 'R1W'
  },
  '24-90': {
    address: '52 BIRCH POINT WAY',
    area: 0.25,
    building$: 39300,
    centers: [
      {
        lat: 43.14543440371975,
        lon: -72.09002699528651
      }
    ],
    cu$: 0,
    land$: 170000,
    owner: 'MILLS, FRED W',
    taxed$: 209300,
    usage: '110',
    use: 'R1W'
  },
  '24-108-01': {
    address: '126 COVE RD',
    area: 0.33,
    building$: 84500,
    centers: [
      {
        lat: 43.14670041081784,
        lon: -72.09317523612846
      }
    ],
    cu$: 17800,
    land$: 155000,
    owner: 'VOISINE, SHAWN',
    taxed$: 257300,
    usage: '110',
    use: 'R1W'
  },
  '25-10': {
    address: '1666 VALLEY RD',
    area: 0.1,
    building$: 42300,
    centers: [
      {
        lat: 43.13931867429052,
        lon: -72.08758520948308
      }
    ],
    cu$: 1100,
    land$: 20000,
    owner: 'FUDGE, KEITH E',
    taxed$: 63400,
    usage: '110',
    use: 'R1A'
  },
  '25-25': {
    address: '1764 VALLEY RD',
    area: 0.17,
    building$: 34400,
    centers: [
      {
        lat: 43.13692254212136,
        lon: -72.08669812404266
      }
    ],
    cu$: 0,
    land$: 27000,
    owner: 'GAHN REALTY TRUST',
    taxed$: 61400,
    usage: '110',
    use: 'R1A'
  },
  '25-27': {
    address: '1814 VALLEY RD',
    area: 1.37,
    building$: 78700,
    centers: [
      {
        lat: 43.13575788467888,
        lon: -72.08746205720098
      }
    ],
    cu$: 11100,
    land$: 41100,
    owner: 'BOULEY, MICHAEL',
    taxed$: 130900,
    usage: '110',
    use: 'R1A'
  },
  '25-43': {
    address: '2194 VALLEY RD',
    area: 0.28,
    building$: 82800,
    centers: [
      {
        lat: 43.12973086612308,
        lon: -72.08522133412679
      }
    ],
    cu$: 1300,
    land$: 35300,
    owner: 'AMARI FAMILY TRUST',
    taxed$: 119400,
    usage: '110',
    use: 'R1A'
  },
  '25-44': {
    address: '2193 VALLEY RD',
    area: 0.23,
    building$: 69900,
    centers: [
      {
        lat: 43.129776394178855,
        lon: -72.0843426811824
      }
    ],
    cu$: 3800,
    land$: 163100,
    owner: 'JUBERT, MICHAEL J',
    taxed$: 236800,
    usage: '110',
    use: 'R1W'
  },
  '25-45': {
    address: '2191 VALLEY RD',
    area: 0.25,
    building$: 0,
    centers: [
      {
        lat: 43.13002142084161,
        lon: -72.08422355250346
      }
    ],
    cu$: 0,
    land$: 114500,
    owner: 'PELLEGRINO, SIRI K. 2014 REV T',
    taxed$: 114500,
    usage: '110',
    use: 'R1'
  },
  '25-53': {
    address: '2153 VALLEY RD',
    area: 0.18,
    building$: 30400,
    centers: [
      {
        lat: 43.13101594377086,
        lon: -72.0838835154106
      }
    ],
    cu$: 2400,
    land$: 175200,
    owner: 'MCGOVERN, THOMAS E. & TERIE',
    taxed$: 208000,
    usage: '110',
    use: 'R1W'
  },
  '25-59': {
    address: '2117 VALLEY RD',
    area: 0.23,
    building$: 77300,
    centers: [
      {
        lat: 43.13181465792632,
        lon: -72.08537588185314
      }
    ],
    cu$: 4100,
    land$: 148000,
    owner: 'ROY, LUDGER O',
    taxed$: 229400,
    usage: '110',
    use: 'R1W'
  },
  '25-61': {
    address: '2113 VALLEY RD',
    area: 0.17,
    building$: 23800,
    centers: [
      {
        lat: 43.13168847215738,
        lon: -72.08583684084755
      }
    ],
    cu$: 0,
    land$: 131600,
    owner: 'STRICKLAND,  BARBARA A. REVOCA',
    taxed$: 155400,
    usage: '110',
    use: 'R1W'
  },
  '25-62': {
    address: '2109 VALLEY RD',
    area: 0.17,
    building$: 43500,
    centers: [
      {
        lat: 43.13161169107653,
        lon: -72.08592229809244
      }
    ],
    cu$: 1500,
    land$: 142000,
    owner: 'FICO REV TRUST, NANCY A',
    taxed$: 187000,
    usage: '110',
    use: 'R1W'
  },
  '25-67': {
    address: '2090 VALLEY RD',
    area: 0.56,
    building$: 59600,
    centers: [
      {
        lat: 43.13070914179009,
        lon: -72.08580718350191
      }
    ],
    cu$: 2900,
    land$: 37900,
    owner: 'EBERLY, CHRISTOPHER DONALD',
    taxed$: 100400,
    usage: '110',
    use: 'R1A'
  },
  '25-68': {
    address: '2096 VALLEY RD',
    area: 0.15,
    building$: 19800,
    centers: [
      {
        lat: 43.13094078279501,
        lon: -72.08579375598069
      }
    ],
    cu$: 0,
    land$: 25000,
    owner: 'MEADE, MICHAEL',
    taxed$: 44800,
    usage: '110',
    use: 'R1A'
  },
  '25-79': {
    address: '2168 VALLEY RD',
    area: 0.32,
    building$: 54300,
    centers: [
      {
        lat: 43.130616135231435,
        lon: -72.0846669226014
      }
    ],
    cu$: 0,
    land$: 35700,
    owner: 'STANTON, JOHN F',
    taxed$: 90000,
    usage: '110',
    use: 'R1A'
  },
  '25-80': {
    address: '2180 VALLEY RD',
    area: 0.19,
    building$: 0,
    centers: [
      {
        lat: 43.13035868354605,
        lon: -72.0849467404602
      }
    ],
    cu$: 20800,
    land$: 20300,
    owner: 'JUBERT, MICHAEL & KAREN',
    taxed$: 41100,
    usage: '110',
    use: 'R1A'
  },
  '25-81': {
    address: '2188 VALLEY RD',
    area: 0.29,
    building$: 45500,
    centers: [
      {
        lat: 43.13004891768624,
        lon: -72.08506847949688
      }
    ],
    cu$: 1100,
    land$: 35400,
    owner: 'BERRY REALTY TRUST',
    taxed$: 82000,
    usage: '110',
    use: 'R1A'
  },
  '25-92': {
    address: '1903 VALLEY RD',
    area: 0.83,
    building$: 157000,
    centers: [
      {
        lat: 43.13328252234067,
        lon: -72.08814150766277
      }
    ],
    cu$: 0,
    land$: 199500,
    owner: 'KASPAR, STEVEN J',
    taxed$: 356500,
    usage: '110',
    use: 'R1W'
  },
  '25-89': {
    address: 'VALLEY RD',
    area: 0.41,
    building$: 0,
    centers: [
      {
        lat: 43.13207001279187,
        lon: -72.08896447830386
      }
    ],
    cu$: 0,
    land$: 33700,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 33700,
    usage: '300',
    use: 'EX-M'
  },
  '25-99': {
    address: '1827 VALLEY RD',
    area: 0.41,
    building$: 74800,
    centers: [
      {
        lat: 43.135089558572915,
        lon: -72.0871204508644
      }
    ],
    cu$: 9300,
    land$: 166600,
    owner: 'CALCIANO, PHILIP JOHN',
    taxed$: 250700,
    usage: '110',
    use: 'R1W'
  },
  '25-106': {
    address: '1769 VALLEY RD',
    area: 0.23,
    building$: 34300,
    centers: [
      {
        lat: 43.1368028169456,
        lon: -72.08585120813095
      }
    ],
    cu$: 0,
    land$: 173100,
    owner: 'BARNES, EDWARD W',
    taxed$: 207400,
    usage: '110',
    use: 'R1W'
  },
  '25-107': {
    address: '1763 VALLEY RD',
    area: 0.46,
    building$: 85300,
    centers: [
      {
        lat: 43.1370821572672,
        lon: -72.08613819407923
      }
    ],
    cu$: 1700,
    land$: 197100,
    owner: 'INGEMI, JOHN J.',
    taxed$: 284100,
    usage: '110',
    use: 'R1W'
  },
  '25-109': {
    address: '1733 VALLEY RD',
    area: 0.7,
    building$: 65300,
    centers: [
      {
        lat: 43.13783220065322,
        lon: -72.08623279561861
      }
    ],
    cu$: 5000,
    land$: 208700,
    owner: 'URSINI, ANATOLIJ',
    taxed$: 279000,
    usage: '110',
    use: 'R1'
  },
  '25-114': {
    address: '1701 VALLEY RD',
    area: 0.52,
    building$: 0,
    centers: [
      {
        lat: 43.138745131212175,
        lon: -72.08624015220283
      }
    ],
    cu$: 3000,
    land$: 118800,
    owner: 'CHICOINE, GEORGE F',
    taxed$: 121800,
    usage: '110',
    use: 'R1W'
  },
  '25-115': {
    address: '1693 VALLEY RD',
    area: 0.73,
    building$: 65100,
    centers: [
      {
        lat: 43.1389354076302,
        lon: -72.08623988123887
      }
    ],
    cu$: 300,
    land$: 188900,
    owner: 'BENKOSKI, RONALD R',
    taxed$: 254300,
    usage: '110',
    use: 'R1W'
  },
  '6-2': {
    address: 'AYERS POND RD',
    area: 75,
    building$: 0,
    centers: [
      {
        lat: 43.22409639029513,
        lon: -72.0437793413444
      }
    ],
    cu$: 0,
    land$: 5996,
    owner: 'BIBBO, G EDWARD',
    taxed$: 5996,
    usage: '190',
    use: 'CUUW'
  },
  '20-96': {
    address: '372 BAILEY RD',
    area: 1,
    building$: 15200,
    centers: [
      {
        lat: 43.141441591217735,
        lon: -72.06718841928674
      }
    ],
    cu$: 0,
    land$: 28400,
    owner: 'SIMKO, GEORGE',
    taxed$: 43600,
    usage: '110',
    use: 'R1'
  },
  '11-45': {
    address: '553 MILLEN POND RD',
    area: 4.5,
    building$: 39300,
    centers: [
      {
        lat: 43.17139491895116,
        lon: -72.11969331790674
      }
    ],
    cu$: 2600,
    land$: 230800,
    owner: 'BLUES BOY FAMILY TRUST OF 2019',
    taxed$: 272700,
    usage: '110',
    use: 'R1W'
  },
  '11-44': {
    address: '523 MILLEN POND RD',
    area: 3.8,
    building$: 41600,
    centers: [
      {
        lat: 43.17298539363091,
        lon: -72.11994873029575
      }
    ],
    cu$: 2400,
    land$: 209300,
    owner: 'HAHN, INGRID',
    taxed$: 253300,
    usage: '110',
    use: 'R1W'
  },
  '12-129': {
    address: '378 WASHINGTON DR',
    area: 6.15,
    building$: 182900,
    centers: [
      {
        lat: 43.172942594158414,
        lon: -72.05585599533352
      }
    ],
    cu$: 5000,
    land$: 73950,
    owner: 'KAPTEYN, PAUL C',
    taxed$: 261850,
    usage: '110',
    use: 'R1A'
  },
  '14-121': {
    address: '179 MADISON DR',
    area: 0.72,
    building$: 180100,
    centers: [
      {
        lat: 43.15881817291503,
        lon: -72.14952700813792
      }
    ],
    cu$: 2700,
    land$: 38800,
    owner: 'JEFFERY, ROBERT F',
    taxed$: 221600,
    usage: '110',
    use: 'R1'
  },
  '15-14': {
    address: '875 VALLEY RD',
    area: 5.3,
    building$: 167300,
    centers: [
      {
        lat: 43.15231866059932,
        lon: -72.09902863221502
      }
    ],
    cu$: 0,
    land$: 97000,
    owner: 'SMITH, TIMOTHY LENOX',
    taxed$: 264300,
    usage: '110',
    use: 'R1'
  },
  '7-15': {
    address: '949 N MAIN ST',
    area: 5.6,
    building$: 124700,
    centers: [
      {
        lat: 43.199817295605385,
        lon: -72.1117418406615
      }
    ],
    cu$: 13200,
    land$: 47400,
    owner: 'ROSELLEN, BERND',
    taxed$: 185300,
    usage: '110',
    use: 'R1'
  },
  '14-220': {
    address: '28 HAYES RD',
    area: 0.69,
    building$: 119600,
    centers: [
      {
        lat: 43.15752335565746,
        lon: -72.14748819826397
      }
    ],
    cu$: 13500,
    land$: 38600,
    owner: 'LAROCHE, CHARLES WILFRED',
    taxed$: 171700,
    usage: '110',
    use: 'R1'
  },
  '7-47': {
    address: '819 N MAIN ST',
    area: 5.3,
    building$: 110100,
    centers: [
      {
        lat: 43.19677879648971,
        lon: -72.1084047853624
      }
    ],
    cu$: 0,
    land$: 42500,
    owner: 'MAKO, ALEX',
    taxed$: 152600,
    usage: '110',
    use: 'R1'
  },
  '7-26': {
    address: '93 WASHINGTON HEIGHTS RD',
    area: 2.9,
    building$: 85200,
    centers: [
      {
        lat: 43.193272944664656,
        lon: -72.11844710296019
      }
    ],
    cu$: 16700,
    land$: 26000,
    owner: 'WHITE, CASSANDRA A',
    taxed$: 127900,
    usage: '110',
    use: 'R1'
  },
  '7-36': {
    address: '192 WASHINGTON HEIGHTS RD',
    area: 5.1,
    building$: 138300,
    centers: [
      {
        lat: 43.195098648415744,
        lon: -72.11472960028294
      }
    ],
    cu$: 26900,
    land$: 27400,
    owner: 'GRANT, CHRISTOPHER PAUL',
    taxed$: 192600,
    usage: '110',
    use: 'R1'
  },
  '14-266': {
    address: '56 PIERCE RD',
    area: 0.77,
    building$: 232800,
    centers: [
      {
        lat: 43.15292759515606,
        lon: -72.13779258791709
      }
    ],
    cu$: 15700,
    land$: 43000,
    owner: 'BROCK, ASHLEY S.',
    taxed$: 291500,
    usage: '110',
    use: 'R1'
  },
  '7-5': {
    address: '989 LEMPSTER MOUNTAIN RD',
    area: 11.6,
    building$: 105100,
    centers: [
      {
        lat: 43.193550754324754,
        lon: -72.12665768909665
      }
    ],
    cu$: 20700,
    land$: 35137,
    owner: 'RICCIO, ERIN',
    taxed$: 160937,
    usage: '110',
    use: 'R1'
  },
  '7-3': {
    address: '980 LEMPSTER MOUNTAIN RD',
    area: 45.1,
    building$: 101300,
    centers: [
      {
        lat: 43.197395973362255,
        lon: -72.1251431282852
      }
    ],
    cu$: 22700,
    land$: 46149,
    owner: 'GASKELL, LAWRENCE J',
    taxed$: 170149,
    usage: '110',
    use: 'R1'
  },
  '7-4': {
    address: '926 LEMPSTER MOUNTAIN RD',
    area: 16.7,
    building$: 124600,
    centers: [
      {
        lat: 43.194797415599055,
        lon: -72.12312275443166
      }
    ],
    cu$: 19100,
    land$: 34176,
    owner: 'KERRY, ROBERT J',
    taxed$: 177876,
    usage: '110',
    use: 'R1'
  },
  '7-6': {
    address: '427 OLD BURBANK RD',
    area: 54,
    building$: 312100,
    centers: [
      {
        lat: 43.1899734096321,
        lon: -72.12587991324709
      }
    ],
    cu$: 3000,
    land$: 44401,
    owner: 'GUERIN, ROBERT L',
    taxed$: 359501,
    usage: '110',
    use: 'R1'
  },
  '7-7-01': {
    address: '781 LEMPSTER MOUNTAIN RD',
    area: 2.08,
    building$: 141400,
    centers: [
      {
        lat: 43.190697365247935,
        lon: -72.11991321571819
      }
    ],
    cu$: 5700,
    land$: 32000,
    owner: 'EATON, GUY L',
    taxed$: 179100,
    usage: '110',
    use: 'R1'
  },
  '7-16': {
    address: '93 TWIN BRIDGE RD',
    area: 16.2,
    building$: 96700,
    centers: [
      {
        lat: 43.19948244400758,
        lon: -72.11347976040216
      }
    ],
    cu$: 2500,
    land$: 29476,
    owner: 'TREADWELL, ALLAN E',
    taxed$: 128676,
    usage: '110',
    use: 'R1'
  },
  '7-21': {
    address: '215 WASHINGTON HEIGHTS RD',
    area: 7.2,
    building$: 133100,
    centers: [
      {
        lat: 43.197537976195996,
        lon: -72.11809371175416
      }
    ],
    cu$: 12100,
    land$: 31800,
    owner: 'ROE, THOMAS J.',
    taxed$: 177000,
    usage: '110',
    use: 'R1'
  },
  '7-27': {
    address: '29 WASHINGTON HEIGHTS RD',
    area: 2.4,
    building$: 22500,
    centers: [
      {
        lat: 43.19178863890276,
        lon: -72.11820039410378
      }
    ],
    cu$: 800,
    land$: 24300,
    owner: 'BROADLEY, STEVEN A.',
    taxed$: 47600,
    usage: '110',
    use: 'R1'
  },
  '7-31': {
    address: '121 MARYS LN',
    area: 3,
    building$: 134900,
    centers: [
      {
        lat: 43.190935169356734,
        lon: -72.11483865678906
      }
    ],
    cu$: 2400,
    land$: 65600,
    owner: 'SHAMALY, JANE ELLEN',
    taxed$: 202900,
    usage: '110',
    use: 'R1'
  },
  '7-34': {
    address: '134 WASHINGTON HEIGHTS RD',
    area: 5.1,
    building$: 142600,
    centers: [
      {
        lat: 43.193583011225144,
        lon: -72.11479032269355
      }
    ],
    cu$: 10400,
    land$: 28700,
    owner: 'TANNER, THOMAS A',
    taxed$: 181700,
    usage: '110',
    use: 'R1'
  },
  '7-37': {
    address: '220 WASHINGTON HEIGHTS RD',
    area: 5,
    building$: 89300,
    centers: [
      {
        lat: 43.195703579167485,
        lon: -72.11455014661135
      }
    ],
    cu$: 1300,
    land$: 28500,
    owner: 'BOREY III, LOUIS J',
    taxed$: 119100,
    usage: '110',
    use: 'R1'
  },
  '7-48': {
    address: '783 N MAIN ST',
    area: 5,
    building$: 133400,
    centers: [
      {
        lat: 43.19623874259877,
        lon: -72.10798260864189
      }
    ],
    cu$: 20600,
    land$: 38000,
    owner: 'KULBACKI, CRAIG A',
    taxed$: 192000,
    usage: '110',
    use: 'R1'
  },
  '7-50': {
    address: '749 N MAIN ST',
    area: 23,
    building$: 110400,
    centers: [
      {
        lat: 43.19391309577256,
        lon: -72.10741103110882
      }
    ],
    cu$: 57900,
    land$: 33671,
    owner: 'BARTON, THOMAS',
    taxed$: 201971,
    usage: '110',
    use: 'R1'
  },
  '7-52': {
    address: '576 N MAIN ST',
    area: 33.8,
    building$: 178300,
    centers: [
      {
        lat: 43.19150370348519,
        lon: -72.10259946318557
      }
    ],
    cu$: 5700,
    land$: 34157,
    owner: 'LEICHT, ELIZABETH',
    taxed$: 218157,
    usage: '110',
    use: 'R1'
  },
  '7-53': {
    address: '658 N MAIN ST',
    area: 1,
    building$: 57100,
    centers: [
      {
        lat: 43.19335559706649,
        lon: -72.10489832510751
      }
    ],
    cu$: 2400,
    land$: 34600,
    owner: 'NICHOLS, RODERICK A',
    taxed$: 94100,
    usage: '110',
    use: 'R1'
  },
  '7-55': {
    address: '736 N MAIN ST',
    area: 2.02,
    building$: 35000,
    centers: [
      {
        lat: 43.19563781904111,
        lon: -72.10526987052175
      }
    ],
    cu$: 0,
    land$: 35300,
    owner: 'VINCENT, DAN',
    taxed$: 70300,
    usage: '110',
    use: 'R1'
  },
  '7-57': {
    address: '1052 LEMPSTER MOUNTAIN RD',
    area: 5.1,
    building$: 16800,
    centers: [
      {
        lat: 43.19517099501917,
        lon: -72.1265990220644
      }
    ],
    cu$: 2900,
    land$: 34100,
    owner: 'GASKELL, DONALD P',
    taxed$: 53800,
    usage: '110',
    use: 'R1'
  },
  '7-59': {
    address: '828 LEMPSTER MOUNTAIN RD',
    area: 3.2,
    building$: 152300,
    centers: [
      {
        lat: 43.19262603225961,
        lon: -72.12107941254001
      }
    ],
    cu$: 18400,
    land$: 35000,
    owner: 'LABORE, ANDRE',
    taxed$: 205700,
    usage: '110',
    use: 'R1'
  },
  '7-61': {
    address: '786 LEMPSTER MOUNTAIN RD',
    area: 3.2,
    building$: 164800,
    centers: [
      {
        lat: 43.19245645751846,
        lon: -72.11974293729624
      }
    ],
    cu$: 4300,
    land$: 35000,
    owner: 'ZUBRZYCKI, DEREK',
    taxed$: 204100,
    usage: '110',
    use: 'R1'
  },
  '8-7': {
    address: '1180 HALFMOON POND RD',
    area: 6.97,
    building$: 102500,
    centers: [
      {
        lat: 43.19326255805219,
        lon: -72.07685039955535
      }
    ],
    cu$: 3800,
    land$: 45000,
    owner: 'HALL, JENNIFER A',
    taxed$: 151300,
    usage: '110',
    use: 'R1'
  },
  '8-4': {
    address: '1227 HALFMOON POND RD',
    area: 32,
    building$: 127900,
    centers: [
      {
        lat: 43.19372684125604,
        lon: -72.0815747113336
      }
    ],
    cu$: 7000,
    land$: 38829,
    owner: 'IADONISI, KATHLEEN',
    taxed$: 173729,
    usage: '110',
    use: 'R1'
  },
  '8-5': {
    address: '1132 HALFMOON POND RD',
    area: 5.01,
    building$: 92400,
    centers: [
      {
        lat: 43.19131473068347,
        lon: -72.07747730445767
      }
    ],
    cu$: 4900,
    land$: 42000,
    owner: 'DUBUQUE IV, WILLIAM D',
    taxed$: 139300,
    usage: '110',
    use: 'R1'
  },
  '8-6': {
    address: '1166 HALFMOON POND RD',
    area: 18.89,
    building$: 227000,
    centers: [
      {
        lat: 43.19143781080269,
        lon: -72.075381534532
      }
    ],
    cu$: 20400,
    land$: 37223,
    owner: 'ROBICHEAU, NICHOLAS T.',
    taxed$: 284623,
    usage: '110',
    use: 'R1'
  },
  '8-9': {
    address: '1262 HALFMOON POND RD',
    area: 8.89,
    building$: 134400,
    centers: [
      {
        lat: 43.19552870177573,
        lon: -72.07736233955802
      }
    ],
    cu$: 18800,
    land$: 47800,
    owner: 'CRAFT, STEPHEN DOUGLAS',
    taxed$: 201000,
    usage: '110',
    use: 'R1'
  },
  '8-10': {
    address: '1412 HALFMOON POND RD',
    area: 122,
    building$: 133700,
    centers: [
      {
        lat: 43.19901877679912,
        lon: -72.07607462459296
      },
      {
        lat: 43.198831990771374,
        lon: -72.08255181804722
      }
    ],
    cu$: 20700,
    land$: 53923,
    owner: 'JAGER, COLIN LOVELL',
    taxed$: 208323,
    usage: '110',
    use: 'R1'
  },
  '8-14': {
    address: '1632 HALFMOON POND RD',
    area: 9.3,
    building$: 74700,
    centers: [
      {
        lat: 43.204886779262054,
        lon: -72.07635652927559
      }
    ],
    cu$: 5500,
    land$: 34195,
    owner: 'BRIDSCHGE, MARK A',
    taxed$: 114395,
    usage: '110',
    use: 'R1'
  },
  '8-18': {
    address: '22 MARTIN RD',
    area: 5,
    building$: 14500,
    centers: [
      {
        lat: 43.20767249200634,
        lon: -72.07602790838237
      }
    ],
    cu$: 1000,
    land$: 33900,
    owner: 'SEEKAMP, MARY BETH',
    taxed$: 49400,
    usage: '110',
    use: 'R1'
  },
  '8-22': {
    address: '127 MARTIN RD',
    area: 12.5,
    building$: 82400,
    centers: [
      {
        lat: 43.2104182072366,
        lon: -72.07261456236985
      }
    ],
    cu$: 1700,
    land$: 48000,
    owner: 'COLAMARTINO, JOSEPH L',
    taxed$: 132100,
    usage: '110',
    use: 'R1'
  },
  '8-23': {
    address: '179 MARTIN RD',
    area: 6.8,
    building$: 62500,
    centers: [
      {
        lat: 43.211404181253215,
        lon: -72.07137180853442
      }
    ],
    cu$: 2200,
    land$: 40200,
    owner: 'GATHERCOLE, KEVIN E',
    taxed$: 104900,
    usage: '110',
    use: 'R1'
  },
  '8-24': {
    address: '211 MARTIN RD',
    area: 6.6,
    building$: 172700,
    centers: [
      {
        lat: 43.21128060866295,
        lon: -72.07013309216688
      }
    ],
    cu$: 9000,
    land$: 36300,
    owner: 'MILLER, DANIEL P',
    taxed$: 218000,
    usage: '110',
    use: 'R1'
  },
  '8-27': {
    address: '317 MARTIN RD',
    area: 7.2,
    building$: 113700,
    centers: [
      {
        lat: 43.21141471801661,
        lon: -72.06646845184926
      }
    ],
    cu$: 3500,
    land$: 35400,
    owner: "O'DONOGHUE, PATRICK",
    taxed$: 152600,
    usage: '110',
    use: 'R1'
  },
  '8-35': {
    address: '312 MARTIN RD',
    area: 12.90172,
    building$: 35800,
    centers: [
      {
        lat: 43.207957931962284,
        lon: -72.06631860516441
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'BULLOCK, CHRISTOPHER',
    taxed$: 35800,
    usage: '110',
    use: 'R1'
  },
  '8-38': {
    address: '202 MARTIN RD',
    area: 9.5,
    building$: 131200,
    centers: [
      {
        lat: 43.208030832895666,
        lon: -72.07064665933605
      }
    ],
    cu$: 5000,
    land$: 38200,
    owner: 'LONG, STEPHEN',
    taxed$: 174400,
    usage: '110',
    use: 'R1'
  },
  '8-46': {
    address: '1618 HALFMOON POND RD',
    area: 0.3,
    building$: 73200,
    centers: [
      {
        lat: 43.2045588227721,
        lon: -72.07872055037585
      }
    ],
    cu$: 3600,
    land$: 32000,
    owner: 'DSV SPV1, LLC',
    taxed$: 108800,
    usage: '110',
    use: 'R1'
  },
  '8-47': {
    address: '1307 HALFMOON POND RD',
    area: 8,
    building$: 157700,
    centers: [
      {
        lat: 43.196368537686354,
        lon: -72.0816173598204
      }
    ],
    cu$: 16100,
    land$: 42400,
    owner: 'JAGER NANCY BELLE',
    taxed$: 216200,
    usage: '110',
    use: 'R1'
  },
  '8-48': {
    address: '1129 HALFMOON POND RD',
    area: 2,
    building$: 123900,
    centers: [
      {
        lat: 43.19210604989816,
        lon: -72.07899499547537
      }
    ],
    cu$: 1800,
    land$: 34000,
    owner: 'WHITNEY, COLLEEN R',
    taxed$: 159700,
    usage: '110',
    use: 'R1'
  },
  '9-6': {
    address: '484 AYERS POND RD',
    area: 29.8,
    building$: 166200,
    centers: [
      {
        lat: 43.20682277956592,
        lon: -72.03137847600381
      }
    ],
    cu$: 17300,
    land$: 88118,
    owner: 'MARSHALL, THOMAS & LINDA  REVO',
    taxed$: 271618,
    usage: '110',
    use: 'R1'
  },
  '9-7': {
    address: '410 AYERS POND RD',
    area: 57.4,
    building$: 262800,
    centers: [
      {
        lat: 43.20521918553431,
        lon: -72.02752918474414
      }
    ],
    cu$: 41200,
    land$: 49242,
    owner: 'FLORENCE, MARK E',
    taxed$: 353242,
    usage: '110',
    use: 'R1'
  },
  '9-9': {
    address: '269 DEER VALLEY RD',
    area: 23,
    building$: 148100,
    centers: [
      {
        lat: 43.201290254343306,
        lon: -72.02396010277384
      }
    ],
    cu$: 3600,
    land$: 33611,
    owner: 'CROWLEY, MARY E',
    taxed$: 185311,
    usage: '110',
    use: 'R1'
  },
  '9-12': {
    address: '161 BRADFORD SPRINGS RD',
    area: 4.48,
    building$: 72100,
    centers: [
      {
        lat: 43.19569439711511,
        lon: -72.01957629247919
      }
    ],
    cu$: 8500,
    land$: 45700,
    owner: 'PEREIRA, NEILETTE',
    taxed$: 126300,
    usage: '110',
    use: 'R1'
  },
  '9-13': {
    address: '2402 E WASHINGTON RD',
    area: 50,
    building$: 301500,
    centers: [
      {
        lat: 43.195585036446886,
        lon: -72.02356602036701
      },
      {
        lat: 43.19889906328802,
        lon: -72.02079411736034
      }
    ],
    cu$: 36000,
    land$: 56777,
    owner: 'COOK, R E & L T REV TRUST',
    taxed$: 394277,
    usage: '110',
    use: 'R1'
  },
  '9-14': {
    address: '2494 E WASHINGTON RD',
    area: 22.5,
    building$: 115000,
    centers: [
      {
        lat: 43.19439483982159,
        lon: -72.0265544201111
      }
    ],
    cu$: 16900,
    land$: 44204,
    owner: 'ROBINSON, SANDRA J',
    taxed$: 176104,
    usage: '110',
    use: 'R1'
  },
  '9-16': {
    address: '182 AYERS POND RD',
    area: 0.25,
    building$: 84700,
    centers: [
      {
        lat: 43.1967093134221,
        lon: -72.0306634635836
      }
    ],
    cu$: 1900,
    land$: 53400,
    owner: 'GIGLIO, JODI-LYNN',
    taxed$: 140000,
    usage: '110',
    use: 'R1'
  },
  '9-19': {
    address: '2528 E WASHINGTON RD',
    area: 10.2,
    building$: 168400,
    centers: [
      {
        lat: 43.19375325704148,
        lon: -72.02821034611166
      }
    ],
    cu$: 19600,
    land$: 42594,
    owner: 'THAYER, EDWARD G',
    taxed$: 230594,
    usage: '110',
    use: 'R1'
  },
  '9-20': {
    address: '2581 E WASHINGTON RD',
    area: 5.3,
    building$: 137200,
    centers: [
      {
        lat: 43.19113725122387,
        lon: -72.02961783582879
      }
    ],
    cu$: 3000,
    land$: 42500,
    owner: 'MCFADDEN, MICHAEL',
    taxed$: 182700,
    usage: '110',
    use: 'R1'
  },
  '9-21': {
    address: '2616 E WASHINGTON RD',
    area: 2.48,
    building$: 152000,
    centers: [
      {
        lat: 43.1916174002319,
        lon: -72.03145292448427
      }
    ],
    cu$: 33000,
    land$: 47700,
    owner: 'GARVIN, MARIANNE L',
    taxed$: 232700,
    usage: '110',
    use: 'R1'
  },
  '9-51': {
    address: '100 SUGAR HOUSE RD',
    area: 2.2,
    building$: 110800,
    centers: [
      {
        lat: 43.195967424718106,
        lon: -72.0444580871759
      }
    ],
    cu$: 0,
    land$: 47300,
    owner: 'GILLETT, JOSEPH M',
    taxed$: 158100,
    usage: '110',
    use: 'R1'
  },
  '9-26-0B': {
    address: '325 AYERS POND RD',
    area: 4.26,
    building$: 110400,
    centers: [
      {
        lat: 43.20053286705259,
        lon: -72.02963512608781
      },
      {
        lat: 43.20051104643258,
        lon: -72.03097116570159
      }
    ],
    cu$: 11300,
    land$: 36900,
    owner: 'WASHINGTON, ROBERT',
    taxed$: 158600,
    usage: '110',
    use: 'R1'
  },
  '9-38': {
    address: '77 BERGWEG RD',
    area: 5.7,
    building$: 172400,
    centers: [
      {
        lat: 43.19454587526422,
        lon: -72.03861695628315
      }
    ],
    cu$: 3800,
    land$: 43100,
    owner: 'GALLAGHER, BETH',
    taxed$: 219300,
    usage: '110',
    use: 'R1'
  },
  '9-29': {
    address: '693 AYERS POND RD',
    area: 45.8,
    building$: 151500,
    centers: [
      {
        lat: 43.207364431792215,
        lon: -72.04003761192519
      }
    ],
    cu$: 3000,
    land$: 38898,
    owner: 'JANEWAY, ELEANOR A',
    taxed$: 193398,
    usage: '110',
    use: 'R1'
  },
  '9-29-01': {
    address: '663 AYERS POND RD',
    area: 15.2,
    building$: 171500,
    centers: [
      {
        lat: 43.20540770825246,
        lon: -72.03616805631906
      }
    ],
    cu$: 1500,
    land$: 34166,
    owner: 'TUOHY, JOHN',
    taxed$: 207166,
    usage: '110',
    use: 'R1'
  },
  '9-30': {
    address: '177 ULRICH RD',
    area: 143.3,
    building$: 120700,
    centers: [
      {
        lat: 43.20266959090344,
        lon: -72.04308410771048
      }
    ],
    cu$: 13300,
    land$: 47716,
    owner: 'MCGRANAHAN, DONALD REV TRUST',
    taxed$: 181716,
    usage: '110',
    use: 'R1'
  },
  '9-36': {
    address: '81 SANDY KNOLLS RD',
    area: 58,
    building$: 122500,
    centers: [
      {
        lat: 43.197432489186276,
        lon: -72.04251945315882
      }
    ],
    cu$: 35800,
    land$: 55336,
    owner: 'CIRIELLO, MARGARET M',
    taxed$: 213636,
    usage: '110',
    use: 'R1'
  },
  '9-37': {
    address: '51 SANDY KNOLLS RD',
    area: 2.86,
    building$: 81500,
    centers: [
      {
        lat: 43.194780700887996,
        lon: -72.04151525792443
      }
    ],
    cu$: 2600,
    land$: 43300,
    owner: 'PAQUIN, ROBERT',
    taxed$: 127400,
    usage: '110',
    use: 'R1'
  },
  '9-39': {
    address: '118 LOVELL MOUNTAIN RD',
    area: 10.1,
    building$: 135500,
    centers: [
      {
        lat: 43.19287073744471,
        lon: -72.04104613651482
      }
    ],
    cu$: 17700,
    land$: 54400,
    owner: 'DUBE, LAURIE A',
    taxed$: 207600,
    usage: '110',
    use: 'R1'
  },
  '9-40': {
    address: '76 BERGWEG RD',
    area: 7.85,
    building$: 94900,
    centers: [
      {
        lat: 43.192706802571884,
        lon: -72.03812136443723
      }
    ],
    cu$: 21900,
    land$: 68400,
    owner: 'LEISCHNER, PAUL GORDON',
    taxed$: 185200,
    usage: '110',
    use: 'R1'
  },
  '9-41': {
    address: '2734 E WASHINGTON RD',
    area: 0.41,
    building$: 131400,
    centers: [
      {
        lat: 43.19082899441655,
        lon: -72.03555096692327
      }
    ],
    cu$: 3000,
    land$: 41600,
    owner: 'RIZZI, LAURA J',
    taxed$: 176000,
    usage: '110',
    use: 'R1'
  },
  '9-42': {
    address: '57 LOVELL MOUNTAIN RD',
    area: 7.6,
    building$: 35900,
    centers: [
      {
        lat: 43.191029292630276,
        lon: -72.04079362713446
      }
    ],
    cu$: 1800,
    land$: 43200,
    owner: 'ECCARD, KRISTI A',
    taxed$: 80900,
    usage: '110',
    use: 'R1'
  },
  '9-53': {
    address: '30 SUGAR HOUSE RD',
    area: 6.2,
    building$: 18500,
    centers: [
      {
        lat: 43.19487635900263,
        lon: -72.042507661135
      }
    ],
    cu$: 1700,
    land$: 30300,
    owner: 'BLAKNEY, BENJAMIN',
    taxed$: 50500,
    usage: '110',
    use: 'R1'
  },
  '9-43': {
    address: '95 LOVELL MOUNTAIN RD',
    area: 3.5,
    building$: 108000,
    centers: [
      {
        lat: 43.19166362877689,
        lon: -72.04215771050156
      }
    ],
    cu$: 9700,
    land$: 44300,
    owner: 'LISCHKE, ANNE S',
    taxed$: 162000,
    usage: '110',
    use: 'R1'
  },
  '9-44': {
    address: '123 LOVELL MOUNTAIN RD',
    area: 4.4,
    building$: 0,
    centers: [
      {
        lat: 43.19240778371825,
        lon: -72.0432674626299
      }
    ],
    cu$: 0,
    land$: 24900,
    owner: 'BUCCINO, MATTHEW',
    taxed$: 24900,
    usage: '110',
    use: 'R1'
  },
  '9-50': {
    address: '126 SUGAR HOUSE RD',
    area: 3.2,
    building$: 132700,
    centers: [
      {
        lat: 43.19658201283986,
        lon: -72.04569016999699
      }
    ],
    cu$: 9700,
    land$: 39400,
    owner: 'COLBY, THOMAS SEARS, SR',
    taxed$: 181800,
    usage: '110',
    use: 'R1'
  },
  '9-59': {
    address: '2700 E WASHINGTON RD',
    area: 3.7,
    building$: 132300,
    centers: [
      {
        lat: 43.19126985095103,
        lon: -72.03450737713437
      }
    ],
    cu$: 23800,
    land$: 49600,
    owner: 'ORDWAY, ZACHARY S.',
    taxed$: 205700,
    usage: '110',
    use: 'R1'
  },
  '10-3': {
    address: '1025 ASHUELOT DR',
    area: 15,
    building$: 22900,
    centers: [
      {
        lat: 43.177781451208205,
        lon: -72.14836951025515
      }
    ],
    cu$: 1100,
    land$: 45913,
    owner: 'ARBOREAL OASIS, LLC',
    taxed$: 69913,
    usage: '110',
    use: 'R1'
  },
  '10-11': {
    address: '1037 ASHUELOT DR',
    area: 1.86,
    building$: 143700,
    centers: [
      {
        lat: 43.17612614241521,
        lon: -72.14776741283374
      }
    ],
    cu$: 0,
    land$: 60500,
    owner: 'KELLERMAN, CHARLINE, TRUSTEE',
    taxed$: 204200,
    usage: '110',
    use: 'R1W'
  },
  '10-13': {
    address: '995 ASHUELOT DR',
    area: 0.97,
    building$: 151700,
    centers: [
      {
        lat: 43.17593350834275,
        lon: -72.14921610879503
      }
    ],
    cu$: 33200,
    land$: 65300,
    owner: 'THOMPSON, EDWARD',
    taxed$: 250200,
    usage: '110',
    use: 'R1'
  },
  '10-16': {
    address: '973 ASHUELOT DR',
    area: 3.4,
    building$: 155800,
    centers: [
      {
        lat: 43.175985732546884,
        lon: -72.15116007354304
      }
    ],
    cu$: 13000,
    land$: 109100,
    owner: 'DREW, KAREN ANN',
    taxed$: 277900,
    usage: '110',
    use: 'R1'
  },
  '10-18': {
    address: '959 ASHUELOT DR',
    area: 6,
    building$: 152300,
    centers: [
      {
        lat: 43.175228292418446,
        lon: -72.15236982521279
      }
    ],
    cu$: 21500,
    land$: 123000,
    owner: 'ANDERSON REVOCABLE TRUST',
    taxed$: 296800,
    usage: '110',
    use: 'R1'
  },
  '10-22': {
    address: '917 ASHUELOT DR',
    area: 1.14,
    building$: 114200,
    centers: [
      {
        lat: 43.1731765399432,
        lon: -72.15175766656867
      }
    ],
    cu$: 1200,
    land$: 190700,
    owner: 'BERRY, JAY GRIFFIN',
    taxed$: 306100,
    usage: '110',
    use: 'R1'
  },
  '10-53': {
    address: '884 ASHUELOT DR',
    area: 2.94,
    building$: 126800,
    centers: [
      {
        lat: 43.17260409304468,
        lon: -72.14984913998212
      }
    ],
    cu$: 3000,
    land$: 42100,
    owner: 'DEPEAU, EDWARD A III',
    taxed$: 171900,
    usage: '110',
    use: 'R1A'
  },
  '10-23': {
    address: '16 MCKINNON RD',
    area: 2.01,
    building$: 150300,
    centers: [
      {
        lat: 43.17246092106209,
        lon: -72.15294136619026
      }
    ],
    cu$: 0,
    land$: 187800,
    owner: 'CRAINICH FAMILY 2015 REV TRUST',
    taxed$: 338100,
    usage: '110',
    use: 'R1'
  },
  '10-35': {
    address: '795 ASHUELOT DR',
    area: 1.28,
    building$: 148100,
    centers: [
      {
        lat: 43.169892429196,
        lon: -72.15186342487704
      }
    ],
    cu$: 0,
    land$: 198100,
    owner: 'DAILEY, M JOYCE 2013 TRUST',
    taxed$: 346200,
    usage: '110',
    use: 'R1W'
  },
  '10-36': {
    address: '785 ASHUELOT DR',
    area: 1.14,
    building$: 639100,
    centers: [
      {
        lat: 43.16952415597716,
        lon: -72.15178313073902
      }
    ],
    cu$: 11000,
    land$: 201600,
    owner: 'SCHNEIDER FAMILY REVOCABLE TRU',
    taxed$: 851700,
    usage: '110',
    use: 'R1W'
  },
  '10-29': {
    address: '861 ASHUELOT DR',
    area: 2,
    building$: 125400,
    centers: [
      {
        lat: 43.17164225233817,
        lon: -72.15260099184472
      }
    ],
    cu$: 1500,
    land$: 192800,
    owner: 'COLLETTE, ROBERT E',
    taxed$: 319700,
    usage: '110',
    use: 'R1W'
  },
  '10-30': {
    address: '851 ASHUELOT DR',
    area: 1.84,
    building$: 116500,
    centers: [
      {
        lat: 43.171368863745435,
        lon: -72.15254025235255
      }
    ],
    cu$: 16100,
    land$: 192600,
    owner: 'HALEY, KAREN J',
    taxed$: 325200,
    usage: '110',
    use: 'R1W'
  },
  '10-32': {
    address: '827 ASHUELOT DR',
    area: 1.3,
    building$: 84200,
    centers: [
      {
        lat: 43.17091251709337,
        lon: -72.15179830690644
      }
    ],
    cu$: 36100,
    land$: 191900,
    owner: 'MANNERS, THOMAS E.',
    taxed$: 312200,
    usage: '110',
    use: 'R1W'
  },
  '10-33': {
    address: '821 ASHUELOT DR',
    area: 1.4,
    building$: 413600,
    centers: [
      {
        lat: 43.17054318038126,
        lon: -72.15200878211536
      }
    ],
    cu$: 1700,
    land$: 214300,
    owner: 'RHAN, FAMILY REV TRUST',
    taxed$: 629600,
    usage: '110',
    use: 'R1W'
  },
  '11-3': {
    address: '90 OLD BURBANK RD',
    area: 5.01,
    building$: 134200,
    centers: [
      {
        lat: 43.18371285626241,
        lon: -72.1191408100085
      }
    ],
    cu$: 5500,
    land$: 42000,
    owner: 'OLIVEIRA, GILBERT L',
    taxed$: 181700,
    usage: '110',
    use: 'R1'
  },
  '11-8': {
    address: '141 OLD BURBANK RD',
    area: 46,
    building$: 227100,
    centers: [
      {
        lat: 43.18486387808446,
        lon: -72.12246490287696
      }
    ],
    cu$: 29300,
    land$: 113696,
    owner: 'GRAHAM, R L',
    taxed$: 370096,
    usage: '110',
    use: 'R1'
  },
  '11-11': {
    address: '790 MILLEN POND RD',
    area: 29.46,
    building$: 103800,
    centers: [
      {
        lat: 43.16938250699816,
        lon: -72.12733178595738
      },
      {
        lat: 43.16716553816795,
        lon: -72.12573277127461
      }
    ],
    cu$: 11900,
    land$: 47265,
    owner: 'CALLENDER, TIMOTHY W',
    taxed$: 162965,
    usage: '110',
    use: 'R1'
  },
  '11-19': {
    address: '304 OLD MARLOW RD',
    area: 13.2,
    building$: 151600,
    centers: [
      {
        lat: 43.18182846404684,
        lon: -72.10994680030163
      }
    ],
    cu$: 24600,
    land$: 62397,
    owner: 'DRESSEL, CYNTHIA D.',
    taxed$: 238597,
    usage: '110',
    use: 'R1'
  },
  '11-27-01': {
    address: '391 LEMPSTER MOUNTAIN RD',
    area: 20.906,
    building$: 25800,
    centers: [
      {
        lat: 43.184360135727744,
        lon: -72.11256623751136
      }
    ],
    cu$: 1700,
    land$: 53218,
    owner: 'HARVEY, JEREMY A.',
    taxed$: 80718,
    usage: '110',
    use: 'R1'
  },
  '11-30': {
    address: '232 LEMPSTER MOUNTAIN RD',
    area: 13.59168,
    building$: 0,
    centers: [
      {
        lat: 43.182548677674035,
        lon: -72.10385931627411
      }
    ],
    cu$: 31300,
    land$: 0,
    owner: 'RHOADES, WILLIAM',
    taxed$: 31300,
    usage: '110',
    use: 'R1'
  },
  '11-31': {
    address: '563 N MAIN ST',
    area: 0.6,
    building$: 49900,
    centers: [
      {
        lat: 43.19017172370695,
        lon: -72.1048329771429
      }
    ],
    cu$: 9700,
    land$: 38100,
    owner: 'HARVEY, CYNTHIA A',
    taxed$: 97700,
    usage: '110',
    use: 'R1'
  },
  '11-33': {
    address: '276 N MAIN ST',
    area: 18,
    building$: 72700,
    centers: [
      {
        lat: 43.185730455662025,
        lon: -72.09981977604077
      }
    ],
    cu$: 8400,
    land$: 37897,
    owner: 'GAITY, DANIEL J',
    taxed$: 118997,
    usage: '110',
    use: 'R1'
  },
  '11-34': {
    address: '38 AMES RD',
    area: 1.5,
    building$: 10600,
    centers: [
      {
        lat: 43.18881695561554,
        lon: -72.10251045535934
      }
    ],
    cu$: 600,
    land$: 30900,
    owner: 'GRAHAM, CODY',
    taxed$: 42100,
    usage: '110',
    use: 'R1'
  },
  '11-35': {
    address: '7 AMES RD',
    area: 3,
    building$: 49800,
    centers: [
      {
        lat: 43.18931099876721,
        lon: -72.10370831786885
      }
    ],
    cu$: 700,
    land$: 32600,
    owner: 'ISAAC, JOSEPH A.',
    taxed$: 83100,
    usage: '110',
    use: 'R1'
  },
  '11-39': {
    address: '313 OLD MARLOW RD',
    area: 13.61,
    building$: 212800,
    centers: [
      {
        lat: 43.17845002117443,
        lon: -72.11190206239982
      }
    ],
    cu$: 1500,
    land$: 43333,
    owner: 'CHIDESTER, ALAN J',
    taxed$: 257633,
    usage: '110',
    use: 'R1'
  },
  '11-40': {
    address: '284 MILLEN POND RD',
    area: 7.75,
    building$: 188400,
    centers: [
      {
        lat: 43.17821645241696,
        lon: -72.11366868945848
      }
    ],
    cu$: 4800,
    land$: 50600,
    owner: 'MAMBRINO, JOANNE M',
    taxed$: 243800,
    usage: '110',
    use: 'R1'
  },
  '11-52': {
    address: '724 MILLEN POND RD',
    area: 0.6,
    building$: 241200,
    centers: [
      {
        lat: 43.16876443447901,
        lon: -72.12444962004366
      }
    ],
    cu$: 1000,
    land$: 52400,
    owner: 'BLACKWOOD,ROBERT K JR&SUSAN M',
    taxed$: 294600,
    usage: '110',
    use: 'R1'
  },
  '11-69': {
    address: '207 MILLEN POND RD',
    area: 5.07,
    building$: 60300,
    centers: [
      {
        lat: 43.176058103751345,
        lon: -72.1108446438325
      }
    ],
    cu$: 17000,
    land$: 45500,
    owner: 'IADONISI, ROSEMARY',
    taxed$: 122800,
    usage: '110',
    use: 'R1'
  },
  '11-69-03': {
    address: '400 FAXON HILL RD',
    area: 51.16,
    building$: 147300,
    centers: [
      {
        lat: 43.1737190614152,
        lon: -72.10798675832092
      }
    ],
    cu$: 0,
    land$: 47386,
    owner: 'BACHAND, YVONNE',
    taxed$: 194686,
    usage: '110',
    use: 'R1'
  },
  '11-71': {
    address: '394 FAXON HILL RD',
    area: 1.75,
    building$: 145300,
    centers: [
      {
        lat: 43.17070522859794,
        lon: -72.10706106751603
      }
    ],
    cu$: 1500,
    land$: 41600,
    owner: 'GREGG, APRIL',
    taxed$: 188400,
    usage: '110',
    use: 'R1'
  },
  '11-72': {
    address: '453 FAXON HILL RD',
    area: 21,
    building$: 57600,
    centers: [
      {
        lat: 43.167995603925,
        lon: -72.10569035175399
      }
    ],
    cu$: 17300,
    land$: 42884,
    owner: 'HALVERSON, INGRID M',
    taxed$: 117784,
    usage: '110',
    use: 'R1'
  },
  '11-73': {
    address: '393 FAXON HILL RD',
    area: 13.9,
    building$: 117900,
    centers: [
      {
        lat: 43.17021634687836,
        lon: -72.10529649452856
      }
    ],
    cu$: 19700,
    land$: 41351,
    owner: 'MULLINER, CAMEO M',
    taxed$: 178951,
    usage: '110',
    use: 'R1'
  },
  '11-76': {
    address: '96 VALLEY RD',
    area: 1.6,
    building$: 18100,
    centers: [
      {
        lat: 43.171046760170576,
        lon: -72.09580993181409
      }
    ],
    cu$: 1000,
    land$: 37300,
    owner: 'MUNN, RICHARD',
    taxed$: 56400,
    usage: '110',
    use: 'R1'
  },
  '11-81': {
    address: '59 OLD MARLOW RD',
    area: 1.8,
    building$: 119600,
    centers: [
      {
        lat: 43.17804868842802,
        lon: -72.10281018954545
      }
    ],
    cu$: 29700,
    land$: 52100,
    owner: 'JEAN, LUC R.',
    taxed$: 201400,
    usage: '110',
    use: 'R1'
  },
  '11-82': {
    address: '83 OLD MARLOW RD',
    area: 0.511,
    building$: 88400,
    centers: [
      {
        lat: 43.178462896530036,
        lon: -72.10329708402996
      }
    ],
    cu$: 1500,
    land$: 37600,
    owner: 'PIATT, ROBERT L',
    taxed$: 127500,
    usage: '110',
    use: 'R1'
  },
  '11-85': {
    address: '690 MILLEN POND RD',
    area: 2,
    building$: 143900,
    centers: [
      {
        lat: 43.17010054863459,
        lon: -72.12390990777786
      }
    ],
    cu$: 82100,
    land$: 57800,
    owner: 'WINDSOR CIRCUIT, LTD',
    taxed$: 283800,
    usage: '110',
    use: 'R1'
  },
  '12-2': {
    address: '217 HALFMOON POND RD',
    area: 6.66,
    building$: 210600,
    centers: [
      {
        lat: 43.174743300207915,
        lon: -72.0887504520394
      }
    ],
    cu$: 40800,
    land$: 62486,
    owner: 'SHIFFLETT, AMBER J.',
    taxed$: 313886,
    usage: '110',
    use: 'R1'
  },
  '12-4': {
    address: '181 HALFMOON POND RD',
    area: 2.71,
    building$: 152100,
    centers: [
      {
        lat: 43.174860029818014,
        lon: -72.09055688267718
      }
    ],
    cu$: 20600,
    land$: 43800,
    owner: 'CAVENDER, ROCKLIN M',
    taxed$: 216500,
    usage: '110',
    use: 'R1'
  },
  '12-6': {
    address: '291 HALFMOON POND RD',
    area: 8,
    building$: 134800,
    centers: [
      {
        lat: 43.17345516221114,
        lon: -72.0869976106072
      }
    ],
    cu$: 12600,
    land$: 47900,
    owner: 'CARTER, NINA',
    taxed$: 195300,
    usage: '110',
    use: 'R1'
  },
  '12-8': {
    address: '415 HALFMOON POND RD',
    area: 0.3,
    building$: 141500,
    centers: [
      {
        lat: 43.17371259613654,
        lon: -72.08592535626235
      }
    ],
    cu$: 0,
    land$: 35500,
    owner: 'WADE, STEPHEN S',
    taxed$: 177000,
    usage: '110',
    use: 'R1'
  },
  '12-9': {
    address: '437 HALFMOON POND RD',
    area: 0.78,
    building$: 113800,
    centers: [
      {
        lat: 43.17416155519713,
        lon: -72.0858759722412
      }
    ],
    cu$: 16100,
    land$: 39200,
    owner: 'BINCKES, JEFFREY B',
    taxed$: 169100,
    usage: '110',
    use: 'R1'
  },
  '12-29': {
    address: '807 HALFMOON POND RD',
    area: 2,
    building$: 151300,
    centers: [
      {
        lat: 43.183035352514516,
        lon: -72.08065190029947
      },
      {
        lat: 43.18245008418176,
        lon: -72.0805043055928
      },
      {
        lat: 43.1837193625025,
        lon: -72.07982777151832
      }
    ],
    cu$: 10300,
    land$: 200400,
    owner: 'ARMSTRONG, L H & J K REV TRUST',
    taxed$: 362000,
    usage: '110',
    use: 'R1W'
  },
  '12-31': {
    address: '855 HALFMOON POND RD',
    area: 0.57,
    building$: 96700,
    centers: [
      {
        lat: 43.18413571847673,
        lon: -72.08083818237596
      }
    ],
    cu$: 0,
    land$: 158700,
    owner: 'PANARELLO, JOSEPH R',
    taxed$: 255400,
    usage: '110',
    use: 'R1W'
  },
  '12-32': {
    address: '863 HALFMOON POND RD',
    area: 40,
    building$: 88200,
    centers: [
      {
        lat: 43.1866364360409,
        lon: -72.08114064689889
      }
    ],
    cu$: 700,
    land$: 159983,
    owner: 'ALLEN, PAMELA K',
    taxed$: 248883,
    usage: '110',
    use: 'R1W'
  },
  '12-33': {
    address: '1045 HALFMOON POND RD',
    area: 2.01,
    building$: 43700,
    centers: [
      {
        lat: 43.18911455918051,
        lon: -72.08022199074922
      }
    ],
    cu$: 19800,
    land$: 42000,
    owner: 'BATES III, JOHN',
    taxed$: 105500,
    usage: '110',
    use: 'R1'
  },
  '12-38': {
    address: '770 HALFMOON POND RD',
    area: 89.48239,
    building$: 194500,
    centers: [
      {
        lat: 43.18283927572012,
        lon: -72.07347104134308
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'NOACK, JOHN',
    taxed$: 194500,
    usage: '110',
    use: 'R1W'
  },
  '14-84': {
    address: '56 JEFFERSON DR',
    area: 0.7,
    building$: 80000,
    centers: [
      {
        lat: 43.16135237053532,
        lon: -72.14594802456593
      }
    ],
    cu$: 7000,
    land$: 38700,
    owner: 'TERWILLIGER, CELESTE R',
    taxed$: 125700,
    usage: '110',
    use: 'R1'
  },
  '12-75': {
    address: '729 WASHINGTON DR',
    area: 0.51,
    building$: 51400,
    centers: [
      {
        lat: 43.18007871214284,
        lon: -72.06153405756072
      }
    ],
    cu$: 5600,
    land$: 215600,
    owner: 'VANGEL, SAMUEL',
    taxed$: 272600,
    usage: '110',
    use: 'R1W'
  },
  '12-44': {
    address: '512 HALFMOON POND RD',
    area: 2,
    building$: 132700,
    centers: [
      {
        lat: 43.17580826305981,
        lon: -72.08463287607691
      }
    ],
    cu$: 2300,
    land$: 42000,
    owner: 'MARCOUX, MOLLY S',
    taxed$: 177000,
    usage: '110',
    use: 'R1'
  },
  '12-48': {
    address: '114 MILL ST',
    area: 5.647,
    building$: 0,
    centers: [
      {
        lat: 43.17085817190211,
        lon: -72.08416831030625
      }
    ],
    cu$: 0,
    land$: 26200,
    owner: 'BUSH, AMANDA',
    taxed$: 26200,
    usage: '110',
    use: 'R1'
  },
  '12-66': {
    address: '835 WASHINGTON DR',
    area: 1.15,
    building$: 117600,
    centers: [
      {
        lat: 43.182555073356646,
        lon: -72.06076339782416
      }
    ],
    cu$: 2400,
    land$: 248900,
    owner: 'SARDINSKAS, CLAIRE FLETCHER',
    taxed$: 368900,
    usage: '110',
    use: 'R1'
  },
  '12-69': {
    address: '783 WASHINGTON DR',
    area: 0.78,
    building$: 258400,
    centers: [
      {
        lat: 43.18143434692561,
        lon: -72.0605735819677
      }
    ],
    cu$: 0,
    land$: 203400,
    owner: 'COLLETTE, THOMAS',
    taxed$: 461800,
    usage: '110',
    use: 'R1W'
  },
  '12-70': {
    address: '771 WASHINGTON DR',
    area: 0.75,
    building$: 186200,
    centers: [
      {
        lat: 43.181218724420525,
        lon: -72.06100850216626
      }
    ],
    cu$: 4900,
    land$: 217100,
    owner: 'KLUK, MICHAEL',
    taxed$: 408200,
    usage: '110',
    use: 'R1W'
  },
  '12-71': {
    address: '763 WASHINGTON DR',
    area: 0.76,
    building$: 230800,
    centers: [
      {
        lat: 43.18099367930925,
        lon: -72.06117976397562
      }
    ],
    cu$: 12800,
    land$: 311700,
    owner: 'HARNER, JEFF',
    taxed$: 555300,
    usage: '110',
    use: 'R1W'
  },
  '12-73': {
    address: '743 WASHINGTON DR',
    area: 1.5,
    building$: 154700,
    centers: [
      {
        lat: 43.18065337889356,
        lon: -72.06139729790837
      }
    ],
    cu$: 24100,
    land$: 239600,
    owner: 'NELSON, HOWARD',
    taxed$: 418400,
    usage: '110',
    use: 'R1W'
  },
  '12-74': {
    address: '735 WASHINGTON DR',
    area: 0.6,
    building$: 182200,
    centers: [
      {
        lat: 43.18031796287211,
        lon: -72.06153606393525
      }
    ],
    cu$: 23200,
    land$: 220700,
    owner: 'JOHNSON, CHARLES D',
    taxed$: 426100,
    usage: '110',
    use: 'R1W'
  },
  '12-77': {
    address: '715 WASHINGTON DR',
    area: 0.39,
    building$: 109100,
    centers: [
      {
        lat: 43.179648712463965,
        lon: -72.06162479977888
      }
    ],
    cu$: 5400,
    land$: 228700,
    owner: 'BUXBAUM, JEFFREY N.',
    taxed$: 343200,
    usage: '110',
    use: 'R1W'
  },
  '12-80': {
    address: '693 WASHINGTON DR',
    area: 0.42,
    building$: 114800,
    centers: [
      {
        lat: 43.17897420541243,
        lon: -72.06212367573333
      }
    ],
    cu$: 7400,
    land$: 214600,
    owner: 'BROOK LIVING TRUST',
    taxed$: 336800,
    usage: '110',
    use: 'R1W'
  },
  '12-81': {
    address: '685 WASHINGTON DR',
    area: 0.9,
    building$: 189000,
    centers: [
      {
        lat: 43.17866608669709,
        lon: -72.06185328097627
      }
    ],
    cu$: 36300,
    land$: 238300,
    owner: 'JOHNSON, JEFFREY',
    taxed$: 463600,
    usage: '110',
    use: 'R1W'
  },
  '12-82': {
    address: '677 WASHINGTON DR',
    area: 0.51,
    building$: 107900,
    centers: [
      {
        lat: 43.17842605536238,
        lon: -72.06147067242469
      }
    ],
    cu$: 4700,
    land$: 215600,
    owner: 'HANSSEN, DONALD M',
    taxed$: 328200,
    usage: '110',
    use: 'R1W'
  },
  '12-83': {
    address: '20 WALNUT CIR',
    area: 0.65,
    building$: 113100,
    centers: [
      {
        lat: 43.178235412359044,
        lon: -72.06125965228952
      }
    ],
    cu$: 4700,
    land$: 231100,
    owner: 'FERLINS FAMILY COMPOUND TRUST',
    taxed$: 348900,
    usage: '110',
    use: 'R1W'
  },
  '12-84': {
    address: '22 WALNUT CIR',
    area: 0.8,
    building$: 120100,
    centers: [
      {
        lat: 43.17772173853579,
        lon: -72.06185425837239
      }
    ],
    cu$: 7600,
    land$: 262700,
    owner: 'POLLACK, ALAN S TRUST',
    taxed$: 390400,
    usage: '110',
    use: 'R1W'
  },
  '12-86': {
    address: '653 WASHINGTON DR',
    area: 0.66,
    building$: 79700,
    centers: [
      {
        lat: 43.17782710198131,
        lon: -72.06041857449688
      }
    ],
    cu$: 14600,
    land$: 201500,
    owner: 'KAPUR, TINA',
    taxed$: 295800,
    usage: '110',
    use: 'R1W'
  },
  '12-87': {
    address: '633 WASHINGTON DR',
    area: 0.67,
    building$: 119500,
    centers: [
      {
        lat: 43.17765444308032,
        lon: -72.06004833987168
      }
    ],
    cu$: 3000,
    land$: 197000,
    owner: 'ALLEN, EDWARD & MARY',
    taxed$: 319500,
    usage: '110',
    use: 'R1W'
  },
  '12-88': {
    address: '625 WASHINGTON DR',
    area: 0.38,
    building$: 118000,
    centers: [
      {
        lat: 43.1775532533198,
        lon: -72.05982100189523
      }
    ],
    cu$: 12400,
    land$: 194800,
    owner: 'SCHULDT III, ROBERT R LIV TR',
    taxed$: 325200,
    usage: '110',
    use: 'R1W'
  },
  '12-89': {
    address: '611 WASHINGTON DR',
    area: 0.99,
    building$: 230000,
    centers: [
      {
        lat: 43.17714211181652,
        lon: -72.059667221366
      }
    ],
    cu$: 9300,
    land$: 218800,
    owner: 'MARTIN, PETER W LIVING TRUST',
    taxed$: 458100,
    usage: '110',
    use: 'R1W'
  },
  '12-90': {
    address: '581 WASHINGTON DR',
    area: 0.51,
    building$: 99600,
    centers: [
      {
        lat: 43.176750781903365,
        lon: -72.05982190081903
      }
    ],
    cu$: 3000,
    land$: 200600,
    owner: 'STALEY, JEFFREY L',
    taxed$: 303200,
    usage: '110',
    use: 'R1W'
  },
  '12-91': {
    address: '561 WASHINGTON DR',
    area: 0.69,
    building$: 185600,
    centers: [
      {
        lat: 43.17642911387351,
        lon: -72.05995625448863
      }
    ],
    cu$: 27500,
    land$: 221700,
    owner: 'MAX, RONALD & JOAN IRREV TRUST',
    taxed$: 434800,
    usage: '110',
    use: 'R1W'
  },
  '12-95': {
    address: '541 WASHINGTON DR',
    area: 0.4,
    building$: 136100,
    centers: [
      {
        lat: 43.17584155142928,
        lon: -72.06069265080023
      }
    ],
    cu$: 27200,
    land$: 214400,
    owner: 'PERRAS, WAYNE I',
    taxed$: 377700,
    usage: '110',
    use: 'R1W'
  },
  '12-96': {
    address: '533 WASHINGTON DR',
    area: 0.45,
    building$: 98000,
    centers: [
      {
        lat: 43.17575701278724,
        lon: -72.06101735972253
      }
    ],
    cu$: 17700,
    land$: 212700,
    owner: 'BISSONNETTE, JAMES P. REVOCABL',
    taxed$: 328400,
    usage: '110',
    use: 'R1W'
  },
  '12-97': {
    address: '515 WASHINGTON DR',
    area: 1.6,
    building$: 120500,
    centers: [
      {
        lat: 43.17544408581596,
        lon: -72.06142610897935
      }
    ],
    cu$: 3000,
    land$: 254700,
    owner: 'VAN PRAAGH, RICHARD REV TRUST',
    taxed$: 378200,
    usage: '110',
    use: 'R1W'
  },
  '12-98': {
    address: '499 WASHINGTON DR',
    area: 0.54,
    building$: 167300,
    centers: [
      {
        lat: 43.174459944738594,
        lon: -72.06107031516828
      }
    ],
    cu$: 4900,
    land$: 220300,
    owner: 'JACOBSON, THOMAS C.',
    taxed$: 392500,
    usage: '110',
    use: 'R1W'
  },
  '12-100': {
    address: '378 WASHINGTON DR',
    area: 0.49,
    building$: 0,
    centers: [
      {
        lat: 43.174128850026214,
        lon: -72.06058405949724
      }
    ],
    cu$: 0,
    land$: 61200,
    owner: 'KAPTEYN, PAUL C',
    taxed$: 61200,
    usage: '110',
    use: 'R1W'
  },
  '12-103': {
    address: '455 WASHINGTON DR',
    area: 0.59,
    building$: 213900,
    centers: [
      {
        lat: 43.17364614570701,
        lon: -72.05975885724142
      }
    ],
    cu$: 1100,
    land$: 226500,
    owner: 'BUTCHER FAMILY REVOCABLE TRUST',
    taxed$: 441500,
    usage: '110',
    use: 'R1W'
  },
  '12-104': {
    address: '453 WASHINGTON DR',
    area: 0.53,
    building$: 134900,
    centers: [
      {
        lat: 43.17342390971026,
        lon: -72.05946122039205
      }
    ],
    cu$: 2000,
    land$: 206700,
    owner: 'JAFFE, JACOB D',
    taxed$: 343600,
    usage: '110',
    use: 'R1W'
  },
  '12-105': {
    address: '439 WASHINGTON DR',
    area: 1.05,
    building$: 140700,
    centers: [
      {
        lat: 43.17333843133866,
        lon: -72.05906135006336
      }
    ],
    cu$: 22000,
    land$: 224000,
    owner: 'GALDONIK, RUTH C REVOCABLE TRU',
    taxed$: 386700,
    usage: '110',
    use: 'R1W'
  },
  '12-108': {
    address: '355 WASHINGTON DR',
    area: 1.09,
    building$: 105900,
    centers: [
      {
        lat: 43.17259964353079,
        lon: -72.05790178384329
      }
    ],
    cu$: 1700,
    land$: 224000,
    owner: 'EPPLER, M P & R E TRUST',
    taxed$: 331600,
    usage: '110',
    use: 'R1W'
  },
  '12-109': {
    address: '305 WASHINGTON DR',
    area: 0.58,
    building$: 181400,
    centers: [
      {
        lat: 43.17203725128441,
        lon: -72.05882408794385
      }
    ],
    cu$: 4900,
    land$: 220600,
    owner: 'PERNICE, ROBIN',
    taxed$: 406900,
    usage: '110',
    use: 'R1W'
  },
  '12-113': {
    address: '249 WASHINGTON DR',
    area: 0.41,
    building$: 68300,
    centers: [
      {
        lat: 43.17170998815904,
        lon: -72.06051717452405
      }
    ],
    cu$: 3000,
    land$: 210100,
    owner: 'KONYHA REAL ESTATE TRUST, M&J',
    taxed$: 281400,
    usage: '110',
    use: 'R1W'
  },
  '12-116': {
    address: '231 WASHINGTON DR',
    area: 3.82,
    building$: 86700,
    centers: [
      {
        lat: 43.171170877766826,
        lon: -72.06197191448278
      }
    ],
    cu$: 0,
    land$: 217900,
    owner: 'HYLAND JR, JOHN J',
    taxed$: 304600,
    usage: '110',
    use: 'R1W'
  },
  '12-130': {
    address: '394 WASHINGTON DR',
    area: 5.08,
    building$: 136900,
    centers: [
      {
        lat: 43.173895198892026,
        lon: -72.05585646190231
      }
    ],
    cu$: 900,
    land$: 80600,
    owner: 'BULMAN, RICHARD B',
    taxed$: 218400,
    usage: '110',
    use: 'R1A'
  },
  '12-131': {
    address: '416 WASHINGTON DR',
    area: 3.8,
    building$: 304000,
    centers: [
      {
        lat: 43.1745592613208,
        lon: -72.05646507295138
      }
    ],
    cu$: 10700,
    land$: 139400,
    owner: 'KOWALSKI, ROY E.',
    taxed$: 454100,
    usage: '110',
    use: 'R1A'
  },
  '12-134': {
    address: '488 WASHINGTON DR',
    area: 3.86,
    building$: 91500,
    centers: [
      {
        lat: 43.17515460239584,
        lon: -72.05850703916646
      }
    ],
    cu$: 6700,
    land$: 78700,
    owner: 'MORRISETTE, MARK A',
    taxed$: 176900,
    usage: '110',
    use: 'R1A'
  },
  '12-138': {
    address: '574 WASHINGTON DR',
    area: 2.57,
    building$: 80100,
    centers: [
      {
        lat: 43.176674958148546,
        lon: -72.05797532393326
      }
    ],
    cu$: 6800,
    land$: 76400,
    owner: 'BODNAR, BERTRAM J',
    taxed$: 163300,
    usage: '110',
    use: 'R1A'
  },
  '12-140': {
    address: '608 WASHINGTON DR',
    area: 2.76,
    building$: 165000,
    centers: [
      {
        lat: 43.17758429675759,
        lon: -72.0580391618805
      }
    ],
    cu$: 0,
    land$: 66400,
    owner: 'MURPHY, GARDNER',
    taxed$: 231400,
    usage: '110',
    use: 'R1'
  },
  '12-141': {
    address: '632 WASHINGTON DR',
    area: 2.89,
    building$: 93400,
    centers: [
      {
        lat: 43.17807938123748,
        lon: -72.05820791215581
      }
    ],
    cu$: 3000,
    land$: 71800,
    owner: 'BISSONNETTE, JAMES P. REVOCABL',
    taxed$: 168200,
    usage: '110',
    use: 'R1'
  },
  '12-145': {
    address: '716 WASHINGTON DR',
    area: 3.3,
    building$: 79300,
    centers: [
      {
        lat: 43.17980705042743,
        lon: -72.05945357354452
      }
    ],
    cu$: 6000,
    land$: 72500,
    owner: 'KOWALSKI, LINDA',
    taxed$: 157800,
    usage: '110',
    use: 'R1'
  },
  '12-147': {
    address: '756 WASHINGTON DR',
    area: 3.24,
    building$: 43500,
    centers: [
      {
        lat: 43.18080623159483,
        lon: -72.05892060816325
      }
    ],
    cu$: 18100,
    land$: 72400,
    owner: 'KNIGHT,  ROBIN',
    taxed$: 134000,
    usage: '110',
    use: 'R1'
  },
  '12-148': {
    address: '780 WASHINGTON DR',
    area: 3.3,
    building$: 177700,
    centers: [
      {
        lat: 43.181311975953335,
        lon: -72.05856152466016
      }
    ],
    cu$: 15800,
    land$: 69800,
    owner: 'VINCIGUERRA, STEPHEN',
    taxed$: 263300,
    usage: '110',
    use: 'R1A'
  },
  '12-153': {
    address: '139 WASHINGTON DR',
    area: 14.5,
    building$: 189800,
    centers: [
      {
        lat: 43.16850625509009,
        lon: -72.0645125440895
      }
    ],
    cu$: 12000,
    land$: 225291,
    owner: 'CARNEY, JEAN-PIERRE',
    taxed$: 427091,
    usage: '110',
    use: 'R1W'
  },
  '12-155-01': {
    address: '158 WINDING WAY',
    area: 8.3,
    building$: 191800,
    centers: [
      {
        lat: 43.16822802599807,
        lon: -72.06792801994972
      }
    ],
    cu$: 6800,
    land$: 222800,
    owner: 'HANSSEN, STEPHEN',
    taxed$: 421400,
    usage: '110',
    use: 'R1W'
  },
  '12-155-02': {
    address: '156 WINDING WAY',
    area: 6.5,
    building$: 152900,
    centers: [
      {
        lat: 43.16935939080156,
        lon: -72.06705925818994
      }
    ],
    cu$: 27400,
    land$: 223400,
    owner: 'REIS, RANDOLPH J',
    taxed$: 403700,
    usage: '110',
    use: 'R1W'
  },
  '12-159': {
    address: '108 ISLAND POND RD',
    area: 4.2,
    building$: 65500,
    centers: [
      {
        lat: 43.169270467533146,
        lon: -72.07195450069109
      }
    ],
    cu$: 4300,
    land$: 65800,
    owner: 'BOND, EMERY ALLEN',
    taxed$: 135600,
    usage: '110',
    use: 'R1'
  },
  '12-164': {
    address: '77 ISLAND POND RD',
    area: 0.3,
    building$: 67500,
    centers: [
      {
        lat: 43.169768959110215,
        lon: -72.07212094378836
      }
    ],
    cu$: 12700,
    land$: 157000,
    owner: 'THAYER,  MARIANNE',
    taxed$: 237200,
    usage: '110',
    use: 'R1W'
  },
  '12-203': {
    address: '339 WASHINGTON DR',
    area: 0.78215,
    building$: 67600,
    centers: [
      {
        lat: 43.17218951365944,
        lon: -72.0582978796496
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'GEBO LIVING TRUST',
    taxed$: 67600,
    usage: '110',
    use: 'R1W'
  },
  '13-4': {
    address: '3068 E WASHINGTON RD',
    area: 5,
    building$: 143900,
    centers: [
      {
        lat: 43.18345431405751,
        lon: -72.03920353209682
      }
    ],
    cu$: 19500,
    land$: 46500,
    owner: 'TERANI, STEPHEN J & GAYLE  REV',
    taxed$: 209900,
    usage: '110',
    use: 'R1'
  },
  '12-175': {
    address: '151 MILL ST',
    area: 9,
    building$: 72500,
    centers: [
      {
        lat: 43.17116629281787,
        lon: -72.08721510627487
      }
    ],
    cu$: 23100,
    land$: 51500,
    owner: 'YEATON, H & E REV TRUST',
    taxed$: 147100,
    usage: '110',
    use: 'R1'
  },
  '12-178': {
    address: '148 HALFMOON POND RD',
    area: 5,
    building$: 64400,
    centers: [
      {
        lat: 43.17364838030398,
        lon: -72.09094067051979
      }
    ],
    cu$: 0,
    land$: 33900,
    owner: 'MORROW, ANDREA',
    taxed$: 98300,
    usage: '110',
    use: 'R1'
  },
  '12-179': {
    address: '242 S MAIN ST',
    area: 1.03,
    building$: 78200,
    centers: [
      {
        lat: 43.17114353190994,
        lon: -72.0911695778694
      }
    ],
    cu$: 7400,
    land$: 36500,
    owner: 'CILLEY, ROBERT',
    taxed$: 122100,
    usage: '110',
    use: 'R1'
  },
  '12-181-01': {
    address: '83 VALLEY RD',
    area: 3.49,
    building$: 147500,
    centers: [
      {
        lat: 43.17121169023954,
        lon: -72.0942554049092
      }
    ],
    cu$: 0,
    land$: 35800,
    owner: 'GOLTSOV, GREGORY V',
    taxed$: 183300,
    usage: '110',
    use: 'R1'
  },
  '12-181-02': {
    address: '117 VALLEY RD',
    area: 3.16,
    building$: 84200,
    centers: [
      {
        lat: 43.17079120538226,
        lon: -72.0941398314945
      }
    ],
    cu$: 0,
    land$: 42100,
    owner: 'JETTE, JUSTIN C',
    taxed$: 126300,
    usage: '110',
    use: 'R1'
  },
  '12-185': {
    address: '430 HALFMOON POND RD',
    area: 1.4,
    building$: 137300,
    centers: [
      {
        lat: 43.17359419555718,
        lon: -72.08540000767492
      }
    ],
    cu$: 8200,
    land$: 31400,
    owner: 'COLE, CLIFFORD G',
    taxed$: 176900,
    usage: '110',
    use: 'R1'
  },
  '14-36': {
    address: '108 GRANT RD',
    area: 1.41,
    building$: 161900,
    centers: [
      {
        lat: 43.16208359414773,
        lon: -72.15040570703243
      }
    ],
    cu$: 700,
    land$: 41100,
    owner: 'FLESSAS, HENRY',
    taxed$: 203700,
    usage: '110',
    use: 'R1'
  },
  '13-5': {
    address: '3170 E WASHINGTON RD',
    area: 5,
    building$: 172500,
    centers: [
      {
        lat: 43.180874403841074,
        lon: -72.03915423517476
      }
    ],
    cu$: 1800,
    land$: 43900,
    owner: 'CARD, RICHARD',
    taxed$: 218200,
    usage: '110',
    use: 'R1'
  },
  '13-6': {
    address: '3272 E WASHINGTON RD',
    area: 100.1,
    building$: 72700,
    centers: [
      {
        lat: 43.18050450061406,
        lon: -72.04773408251381
      }
    ],
    cu$: 4300,
    land$: 56482,
    owner: 'KRAUS, WILLIAM B',
    taxed$: 133482,
    usage: '110',
    use: 'R1'
  },
  '13-8': {
    address: '3430 E WASHINGTON RD',
    area: 9.5,
    building$: 156600,
    centers: [
      {
        lat: 43.17622181253574,
        lon: -72.04478450386064
      }
    ],
    cu$: 21900,
    land$: 43248,
    owner: 'FRANCE, DAVID',
    taxed$: 221748,
    usage: '110',
    use: 'R1'
  },
  '13-16': {
    address: '3554 E WASHINGTON RD',
    area: 27,
    building$: 212100,
    centers: [
      {
        lat: 43.17237099226772,
        lon: -72.04995751966752
      }
    ],
    cu$: 36100,
    land$: 54258,
    owner: 'GELATT FAMILY TRUST',
    taxed$: 302458,
    usage: '110',
    use: 'R1'
  },
  '14-4': {
    address: '683 ASHUELOT DR',
    area: 1.54,
    building$: 115600,
    centers: [
      {
        lat: 43.16723472340766,
        lon: -72.15225138975369
      }
    ],
    cu$: 18800,
    land$: 192200,
    owner: 'LIMA, MARIA LUCIANA REV TRUST ',
    taxed$: 326600,
    usage: '110',
    use: 'R1'
  },
  '13-16-01': {
    address: '3545 E WASHINGTON RD',
    area: 5.5136,
    building$: 98100,
    centers: [
      {
        lat: 43.17299034825658,
        lon: -72.04581978070541
      }
    ],
    cu$: 1400,
    land$: 0,
    owner: 'DARAGON, JAMES P.',
    taxed$: 99500,
    usage: '110',
    use: 'R1'
  },
  '13-17': {
    address: '3661 E WASHINGTON RD',
    area: 3,
    building$: 84400,
    centers: [
      {
        lat: 43.171262100041815,
        lon: -72.0490146953288
      }
    ],
    cu$: 15900,
    land$: 41300,
    owner: 'SHIPMAN, DAVID',
    taxed$: 141600,
    usage: '110',
    use: 'R1'
  },
  '13-18': {
    address: '3587 E WASHINGTON RD',
    area: 49.7,
    building$: 255300,
    centers: [
      {
        lat: 43.17100837558111,
        lon: -72.04511150398748
      }
    ],
    cu$: 59900,
    land$: 47999,
    owner: 'PALUDI, DAMON TRUST',
    taxed$: 363199,
    usage: '110',
    use: 'R1'
  },
  '13-22': {
    address: '3245 E WASHINGTON RD',
    area: 4.4,
    building$: 116800,
    centers: [
      {
        lat: 43.178332006470136,
        lon: -72.03847976123464
      }
    ],
    cu$: 16400,
    land$: 45600,
    owner: 'HOFSTETTER REV FAMILY TRUST',
    taxed$: 178800,
    usage: '110',
    use: 'R1'
  },
  '13-23': {
    address: '3145 E WASHINGTON RD',
    area: 55.8,
    building$: 87200,
    centers: [
      {
        lat: 43.17628548357347,
        lon: -72.03626175819912
      }
    ],
    cu$: 5400,
    land$: 44877,
    owner: 'CROWLEY, SEAN B',
    taxed$: 137477,
    usage: '110',
    use: 'R1'
  },
  '13-24': {
    address: '3015 E WASHINGTON RD',
    area: 1,
    building$: 113300,
    centers: [
      {
        lat: 43.184939315442364,
        lon: -72.03733843953871
      }
    ],
    cu$: 0,
    land$: 40500,
    owner: 'CURRAN, RYAN',
    taxed$: 153800,
    usage: '110',
    use: 'R1'
  },
  '14-8': {
    address: '20 HARRISON RD',
    area: 2.3,
    building$: 115300,
    centers: [
      {
        lat: 43.16567475305773,
        lon: -72.15229946889689
      }
    ],
    cu$: 24400,
    land$: 182500,
    owner: 'SHEA, JOSEPH',
    taxed$: 322200,
    usage: '110',
    use: 'R1'
  },
  '13-25': {
    address: '3133 E WASHINGTON RD',
    area: 126.9,
    building$: 0,
    centers: [
      {
        lat: 43.1848495254498,
        lon: -72.03466273678555
      }
    ],
    cu$: 2700,
    land$: 27899,
    owner: 'ECCARDT FARMS INC',
    taxed$: 30599,
    usage: '190',
    use: 'CUFL'
  },
  '13-28': {
    address: '2667 E WASHINGTON RD',
    area: 1,
    building$: 102100,
    centers: [
      {
        lat: 43.19047923751127,
        lon: -72.03352862323489
      }
    ],
    cu$: 1000,
    land$: 40500,
    owner: 'TREADWELL, ALLAN E',
    taxed$: 143600,
    usage: '110',
    use: 'R1'
  },
  '14-37': {
    address: '526 ASHUELOT DR',
    area: 1.39,
    building$: 157200,
    centers: [
      {
        lat: 43.16264234838971,
        lon: -72.15033326514848
      }
    ],
    cu$: 0,
    land$: 45200,
    owner: 'DAWE, RICHARD C.',
    taxed$: 202400,
    usage: '110',
    use: 'R1'
  },
  '13-30': {
    address: '2607 E WASHINGTON RD',
    area: 8,
    building$: 0,
    centers: [
      {
        lat: 43.189812411128905,
        lon: -72.03063087098424
      }
    ],
    cu$: 2200,
    land$: 51000,
    owner: 'HAVUNEN, DALE',
    taxed$: 53200,
    usage: '110',
    use: 'R1'
  },
  '13-32': {
    address: '3094 E WASHINGTON RD',
    area: 4,
    building$: 134300,
    centers: [
      {
        lat: 43.18278712453848,
        lon: -72.03900741753142
      }
    ],
    cu$: 0,
    land$: 42800,
    owner: 'TOCZKO,  ALLAN J',
    taxed$: 177100,
    usage: '110',
    use: 'R1'
  },
  '13-33': {
    address: '3112 E WASHINGTON RD',
    area: 4,
    building$: 139700,
    centers: [
      {
        lat: 43.18199759738637,
        lon: -72.03872624801518
      }
    ],
    cu$: 1100,
    land$: 45000,
    owner: 'BENNETT, BRUCE',
    taxed$: 185800,
    usage: '110',
    use: 'R1'
  },
  '13-34': {
    address: '3000 E WASHINGTON RD',
    area: 5,
    building$: 159100,
    centers: [
      {
        lat: 43.185542850735814,
        lon: -72.0391633939918
      }
    ],
    cu$: 14700,
    land$: 54500,
    owner: 'ECCARD, GEORGE R',
    taxed$: 228300,
    usage: '110',
    use: 'R1'
  },
  '14-15': {
    address: '82 HARRISON RD',
    area: 5.28,
    building$: 75400,
    centers: [
      {
        lat: 43.16409684810926,
        lon: -72.15358123265942
      }
    ],
    cu$: 4600,
    land$: 176800,
    owner: 'THOMPSON, ROBERT W. LIVING TRU',
    taxed$: 256800,
    usage: '110',
    use: 'R1'
  },
  '14-22': {
    address: '158 HARRISON RD',
    area: 1.11,
    building$: 123600,
    centers: [
      {
        lat: 43.161387211524804,
        lon: -72.15301588369218
      }
    ],
    cu$: 27800,
    land$: 221600,
    owner: 'SMITH III, JAMES D',
    taxed$: 373000,
    usage: '110',
    use: 'R1'
  },
  '14-23': {
    address: '166 HARRISON RD',
    area: 1.17,
    building$: 153600,
    centers: [
      {
        lat: 43.16110807986071,
        lon: -72.1523639584606
      }
    ],
    cu$: 16000,
    land$: 221700,
    owner: 'PATERNO, ANNE F REVOCABLE LIVI',
    taxed$: 391300,
    usage: '110',
    use: 'R1'
  },
  '14-24': {
    address: '182 HARRISON RD',
    area: 2.26,
    building$: 155800,
    centers: [
      {
        lat: 43.16111624101559,
        lon: -72.15154002264
      }
    ],
    cu$: 20700,
    land$: 163200,
    owner: 'COLLINS, WESLEY T & SUSAN R RE',
    taxed$: 339700,
    usage: '110',
    use: 'R1'
  },
  '14-26': {
    address: '135 HARRISON RD',
    area: 1.11,
    building$: 88700,
    centers: [
      {
        lat: 43.162074437334724,
        lon: -72.15236677382043
      }
    ],
    cu$: 5100,
    land$: 40700,
    owner: 'HASS, CHARLES',
    taxed$: 134500,
    usage: '110',
    use: 'R1A'
  },
  '14-27': {
    address: '117 HARRISON RD',
    area: 1.1,
    building$: 84700,
    centers: [
      {
        lat: 43.1626858002094,
        lon: -72.1523298603193
      }
    ],
    cu$: 1000,
    land$: 40700,
    owner: 'BENOIT, RAYMOND A.',
    taxed$: 126400,
    usage: '110',
    use: 'R1'
  },
  '14-29': {
    address: '71 HARRISON RD',
    area: 1.1,
    building$: 120700,
    centers: [
      {
        lat: 43.163984334018885,
        lon: -72.15215788986455
      }
    ],
    cu$: 0,
    land$: 40700,
    owner: 'VIEIRA, EMANUEL JORGE JR',
    taxed$: 161400,
    usage: '110',
    use: 'R1'
  },
  '14-30': {
    address: '23 HARRISON RD',
    area: 2.6,
    building$: 142400,
    centers: [
      {
        lat: 43.164870745210266,
        lon: -72.15356282178318
      },
      {
        lat: 43.16465505068733,
        lon: -72.15210932919351
      }
    ],
    cu$: 0,
    land$: 115600,
    owner: 'LAPLUME, RUSSELL J',
    taxed$: 258000,
    usage: '110',
    use: 'R1W'
  },
  '14-32': {
    address: '585 ASHUELOT DR',
    area: 2.38,
    building$: 86200,
    centers: [
      {
        lat: 43.16409602341601,
        lon: -72.1514316308178
      }
    ],
    cu$: 3000,
    land$: 42600,
    owner: 'ERIAS, BERNARD',
    taxed$: 131800,
    usage: '110',
    use: 'R1A'
  },
  '14-33': {
    address: '547 ASHUELOT DR',
    area: 1.21,
    building$: 72700,
    centers: [
      {
        lat: 43.16332836623047,
        lon: -72.15142396725099
      }
    ],
    cu$: 1200,
    land$: 40800,
    owner: 'VILLAGIO, SPENCER',
    taxed$: 114700,
    usage: '110',
    use: 'R1'
  },
  '14-40': {
    address: '562 ASHUELOT DR',
    area: 2.77,
    building$: 67800,
    centers: [
      {
        lat: 43.163894605867114,
        lon: -72.15016772888887
      }
    ],
    cu$: 34100,
    land$: 47500,
    owner: 'COOLEY, EARL L.',
    taxed$: 149400,
    usage: '110',
    use: 'R1'
  },
  '14-43': {
    address: '652 ASHUELOT DR',
    area: 1.42,
    building$: 50800,
    centers: [
      {
        lat: 43.16596131456941,
        lon: -72.15090003939459
      }
    ],
    cu$: 900,
    land$: 35000,
    owner: 'FORTY, KENT',
    taxed$: 86700,
    usage: '110',
    use: 'R1'
  },
  '14-45': {
    address: '676 ASHUELOT DR',
    area: 1.29,
    building$: 112000,
    centers: [
      {
        lat: 43.16687926056783,
        lon: -72.15041092098822
      }
    ],
    cu$: 800,
    land$: 40900,
    owner: 'BILLINGS, TREVOR J.',
    taxed$: 153700,
    usage: '110',
    use: 'R1A'
  },
  '14-54': {
    address: '116 TAYLOR CIR',
    area: 2.96,
    building$: 89100,
    centers: [
      {
        lat: 43.168876182723885,
        lon: -72.14846154217346
      }
    ],
    cu$: 0,
    land$: 43400,
    owner: 'COLBY, ASHLEY D',
    taxed$: 132500,
    usage: '110',
    use: 'R1'
  },
  '14-58': {
    address: '40 TAYLOR CIR',
    area: 3.26,
    building$: 114100,
    centers: [
      {
        lat: 43.16647723932457,
        lon: -72.14807517885446
      }
    ],
    cu$: 23000,
    land$: 43900,
    owner: 'DEMERCHANT, PETER C',
    taxed$: 181000,
    usage: '110',
    use: 'R1'
  },
  '14-59': {
    address: '10 TAYLOR CIR',
    area: 2.54,
    building$: 162600,
    centers: [
      {
        lat: 43.16538348218975,
        lon: -72.14840353623958
      }
    ],
    cu$: 13500,
    land$: 42800,
    owner: 'PERCY, BENJAMIN A. & AMANDA L.',
    taxed$: 218900,
    usage: '110',
    use: 'R1'
  },
  '14-63': {
    address: '219 STOWELL RD',
    area: 1.46,
    building$: 108200,
    centers: [
      {
        lat: 43.16433825302618,
        lon: -72.14856582953114
      }
    ],
    cu$: 2000,
    land$: 41200,
    owner: 'GARCIA, HEATHER M',
    taxed$: 151400,
    usage: '110',
    use: 'R1'
  },
  '14-66': {
    address: '30 GRANT RD',
    area: 1.39,
    building$: 73300,
    centers: [
      {
        lat: 43.163339557286484,
        lon: -72.1489113043143
      }
    ],
    cu$: 2400,
    land$: 41100,
    owner: 'LAMBERT, ROBERT',
    taxed$: 116800,
    usage: '110',
    use: 'R1'
  },
  '14-68': {
    address: '80 GRANT RD',
    area: 1.42,
    building$: 172500,
    centers: [
      {
        lat: 43.16234133548461,
        lon: -72.14938507200448
      }
    ],
    cu$: 0,
    land$: 39100,
    owner: 'RIESSLE, ROBERT W',
    taxed$: 211600,
    usage: '110',
    use: 'R1'
  },
  '14-69': {
    address: '468 ASHUELOT DR',
    area: 1.11,
    building$: 81800,
    centers: [
      {
        lat: 43.16125818180685,
        lon: -72.15050415515447
      }
    ],
    cu$: 0,
    land$: 36600,
    owner: 'DAMATO, STEVEN',
    taxed$: 118400,
    usage: '110',
    use: 'R1'
  },
  '14-71': {
    address: '89 GRANT RD',
    area: 2.3,
    building$: 79100,
    centers: [
      {
        lat: 43.1614305310446,
        lon: -72.14952365513932
      }
    ],
    cu$: 18700,
    land$: 42500,
    owner: 'STICKLOR, PAUL',
    taxed$: 140300,
    usage: '110',
    use: 'R1'
  },
  '14-80': {
    address: '107 STOWELL RD',
    area: 5.96,
    building$: 83600,
    centers: [
      {
        lat: 43.162418939731225,
        lon: -72.14628878361212
      }
    ],
    cu$: 24400,
    land$: 47900,
    owner: 'SNOW, STEPHEN P',
    taxed$: 155900,
    usage: '110',
    use: 'R1'
  },
  '14-82': {
    address: '83 STOWELL RD',
    area: 1.05,
    building$: 73500,
    centers: [
      {
        lat: 43.161647138797306,
        lon: -72.1446496978153
      }
    ],
    cu$: 1700,
    land$: 40600,
    owner: 'NAPLES, JEFFREY G',
    taxed$: 115800,
    usage: '110',
    use: 'R1'
  },
  '14-83': {
    address: '48 JEFFERSON DR',
    area: 0.7,
    building$: 89900,
    centers: [
      {
        lat: 43.16144604729756,
        lon: -72.14540131711725
      }
    ],
    cu$: 5000,
    land$: 38700,
    owner: 'CASTELLANO, PATRICIA A',
    taxed$: 133600,
    usage: '110',
    use: 'R1'
  },
  '14-86': {
    address: '84 JEFFERSON DR',
    area: 1.4,
    building$: 75100,
    centers: [
      {
        lat: 43.161216351348656,
        lon: -72.14678129424107
      }
    ],
    cu$: 29200,
    land$: 41100,
    owner: 'LANGLOIS, ROBERT R',
    taxed$: 145400,
    usage: '110',
    use: 'R1'
  },
  '14-94': {
    address: '173 JEFFERSON DR',
    area: 0.75,
    building$: 61300,
    centers: [
      {
        lat: 43.15990076443587,
        lon: -72.15027471579072
      }
    ],
    cu$: 6500,
    land$: 39000,
    owner: 'DOWNEY, ROSEMARIE',
    taxed$: 106800,
    usage: '110',
    use: 'R1'
  },
  '14-97': {
    address: '125 JEFFERSON DR',
    area: 0.75,
    building$: 110400,
    centers: [
      {
        lat: 43.16021811454308,
        lon: -72.14856818288938
      }
    ],
    cu$: 1800,
    land$: 39000,
    owner: 'BILSKI TRUST, BARBARA C',
    taxed$: 151200,
    usage: '110',
    use: 'R1'
  },
  '14-100': {
    address: '85 JEFFERSON DR',
    area: 0.8,
    building$: 107800,
    centers: [
      {
        lat: 43.160513931940415,
        lon: -72.14685087006703
      }
    ],
    cu$: 10600,
    land$: 39300,
    owner: 'RENKIN, PAUL S',
    taxed$: 157700,
    usage: '110',
    use: 'R1'
  },
  '14-102': {
    address: '49 JEFFERSON DR',
    area: 0.8,
    building$: 80100,
    centers: [
      {
        lat: 43.16074652793502,
        lon: -72.1455765857441
      }
    ],
    cu$: 1500,
    land$: 39300,
    owner: 'ROUSSEAU & EVINSON REVC TRUST',
    taxed$: 120900,
    usage: '110',
    use: 'R1'
  },
  '14-104': {
    address: '77 STOWELL RD',
    area: 2,
    building$: 175800,
    centers: [
      {
        lat: 43.16102939225043,
        lon: -72.14396692163312
      }
    ],
    cu$: 0,
    land$: 42000,
    owner: 'SHARKEY, ARTHUR J & LINDA J',
    taxed$: 217800,
    usage: '110',
    use: 'R1'
  },
  '14-107': {
    address: '462 PRESIDENTIAL DR',
    area: 1.22,
    building$: 144300,
    centers: [
      {
        lat: 43.16034640610036,
        lon: -72.14303068786444
      }
    ],
    cu$: 12900,
    land$: 40800,
    owner: 'WASHBURN JR, MALCOM E',
    taxed$: 198000,
    usage: '110',
    use: 'R1'
  },
  '14-110': {
    address: '52 MADISON DR',
    area: 0.8,
    building$: 145100,
    centers: [
      {
        lat: 43.160292192868766,
        lon: -72.14495666225983
      }
    ],
    cu$: 1800,
    land$: 39300,
    owner: 'NIEMAN, ROBERT F',
    taxed$: 186200,
    usage: '110',
    use: 'R1'
  },
  '14-111': {
    address: '78 MADISON DR',
    area: 0.8,
    building$: 92700,
    centers: [
      {
        lat: 43.16018346428724,
        lon: -72.14559042817925
      }
    ],
    cu$: 19200,
    land$: 39300,
    owner: 'BECKLER, DREW A',
    taxed$: 151200,
    usage: '110',
    use: 'R1'
  },
  '14-114': {
    address: '128 MADISON DR',
    area: 1.46,
    building$: 42000,
    centers: [
      {
        lat: 43.15995126899845,
        lon: -72.14742316430102
      }
    ],
    cu$: 800,
    land$: 41200,
    owner: 'MORSE, JAMES',
    taxed$: 84000,
    usage: '110',
    use: 'R1'
  },
  '14-116': {
    address: '150 MADISON DR',
    area: 1.42,
    building$: 89400,
    centers: [
      {
        lat: 43.15970503762898,
        lon: -72.14823893275761
      }
    ],
    cu$: 4100,
    land$: 41100,
    owner: 'BECKLER, TYLER',
    taxed$: 134600,
    usage: '110',
    use: 'R1'
  },
  '14-124': {
    address: '145 MADISON DR',
    area: 2.16,
    building$: 95200,
    centers: [
      {
        lat: 43.159212422232585,
        lon: -72.14728451345651
      }
    ],
    cu$: 0,
    land$: 42200,
    owner: 'CARLSON, CATHERINA L',
    taxed$: 137400,
    usage: '110',
    use: 'R1'
  },
  '14-129': {
    address: '53 MADISON DR',
    area: 0.8,
    building$: 120800,
    centers: [
      {
        lat: 43.15963729304637,
        lon: -72.14484319616304
      }
    ],
    cu$: 0,
    land$: 37300,
    owner: 'MAHAFFY, GARY J.',
    taxed$: 158100,
    usage: '110',
    use: 'R1'
  },
  '14-138': {
    address: '616 PRESIDENTIAL DR',
    area: 2.16,
    building$: 135900,
    centers: [
      {
        lat: 43.158553036986795,
        lon: -72.14757694816048
      }
    ],
    cu$: 23700,
    land$: 42200,
    owner: 'NAZARIAN, RAYMOND',
    taxed$: 201800,
    usage: '110',
    use: 'R1'
  },
  '14-139': {
    address: '630 PRESIDENTIAL DR',
    area: 0.72,
    building$: 113600,
    centers: [
      {
        lat: 43.15846868936317,
        lon: -72.1483311523508
      }
    ],
    cu$: 500,
    land$: 46600,
    owner: 'RISCO, GABRIEL A. III',
    taxed$: 160700,
    usage: '110',
    use: 'R1'
  },
  '14-140': {
    address: '642 PRESIDENTIAL DR',
    area: 0.72,
    building$: 101300,
    centers: [
      {
        lat: 43.15836829183699,
        lon: -72.14888729690273
      }
    ],
    cu$: 0,
    land$: 46600,
    owner: 'HAROPULOS, JASON J.',
    taxed$: 147900,
    usage: '110',
    use: 'R1'
  },
  '14-142': {
    address: '682 PRESIDENTIAL DR',
    area: 0.7,
    building$: 99100,
    centers: [
      {
        lat: 43.15817435559396,
        lon: -72.15001596045309
      }
    ],
    cu$: 7000,
    land$: 42600,
    owner: 'BEAUCHESNE, ALAN B',
    taxed$: 148700,
    usage: '110',
    use: 'R1'
  },
  '14-144': {
    address: '314 ASHUELOT DR',
    area: 0.8,
    building$: 109400,
    centers: [
      {
        lat: 43.15699521892407,
        lon: -72.14979241638731
      }
    ],
    cu$: 39000,
    land$: 39300,
    owner: 'GERSHMAN, JEROLD M',
    taxed$: 187700,
    usage: '110',
    use: 'R1'
  },
  '14-145': {
    address: '292 ASHUELOT DR',
    area: 0.82,
    building$: 147500,
    centers: [
      {
        lat: 43.15654178260426,
        lon: -72.14967498767083
      }
    ],
    cu$: 29600,
    land$: 39400,
    owner: 'DICKMAN, DAVID T',
    taxed$: 216500,
    usage: '110',
    use: 'R1'
  },
  '14-146': {
    address: '278 ASHUELOT DR',
    area: 0.82,
    building$: 109500,
    centers: [
      {
        lat: 43.15607397905302,
        lon: -72.14953894110053
      }
    ],
    cu$: 3000,
    land$: 39400,
    owner: 'JOSLYN, MATTHEW B.',
    taxed$: 151900,
    usage: '110',
    use: 'R1'
  },
  '14-147': {
    address: '258 ASHUELOT DR',
    area: 0.8,
    building$: 108300,
    centers: [
      {
        lat: 43.15559431717481,
        lon: -72.14936002815418
      }
    ],
    cu$: 20900,
    land$: 68800,
    owner: 'BELLA VITA PROPERTIES, LLC',
    taxed$: 198000,
    usage: '110',
    use: 'R1'
  },
  '14-155': {
    address: '377 ASHUELOT DR',
    area: 1.33,
    building$: 176900,
    centers: [
      {
        lat: 43.158642431099366,
        lon: -72.15098869878804
      }
    ],
    cu$: 21100,
    land$: 236000,
    owner: 'ROBERT REVOCABLE TRUST',
    taxed$: 434000,
    usage: '110',
    use: 'R1W'
  },
  '14-157': {
    address: '351 ASHUELOT DR',
    area: 0.66,
    building$: 111900,
    centers: [
      {
        lat: 43.15783360760017,
        lon: -72.15089451008751
      }
    ],
    cu$: 8600,
    land$: 213500,
    owner: 'GENTILE, JOSEPH L',
    taxed$: 334000,
    usage: '110',
    use: 'R1W'
  },
  '14-158': {
    address: '341 ASHUELOT DR',
    area: 0.65,
    building$: 224200,
    centers: [
      {
        lat: 43.15749018141949,
        lon: -72.15089990121933
      }
    ],
    cu$: 4300,
    land$: 228400,
    owner: 'PETESCIA, GARY REV TRUST',
    taxed$: 456900,
    usage: '110',
    use: 'R1W'
  },
  '14-159': {
    address: '327 ASHUELOT DR',
    area: 0.69,
    building$: 93900,
    centers: [
      {
        lat: 43.15718231556269,
        lon: -72.1508386087596
      }
    ],
    cu$: 3100,
    land$: 218600,
    owner: 'BARTON, WILLIAM',
    taxed$: 315600,
    usage: '110',
    use: 'R1W'
  },
  '14-160': {
    address: '315 ASHUELOT DR',
    area: 0.69,
    building$: 143700,
    centers: [
      {
        lat: 43.156857744714586,
        lon: -72.15075919565055
      }
    ],
    cu$: 4600,
    land$: 213600,
    owner: 'RIZZO, JOHN S',
    taxed$: 361900,
    usage: '110',
    use: 'R1W'
  },
  '14-162': {
    address: '291 ASHUELOT DR',
    area: 0.67,
    building$: 64800,
    centers: [
      {
        lat: 43.156252957289496,
        lon: -72.15069279425376
      }
    ],
    cu$: 1400,
    land$: 213500,
    owner: 'MOREL, JAMES AND JOYCE LIVING ',
    taxed$: 279700,
    usage: '110',
    use: 'R1W'
  },
  '14-163': {
    address: '283 ASHUELOT DR',
    area: 0.66,
    building$: 94400,
    centers: [
      {
        lat: 43.15595757902467,
        lon: -72.15058785599109
      }
    ],
    cu$: 25000,
    land$: 213500,
    owner: 'MACDOUGALL FAMILY TRUST',
    taxed$: 332900,
    usage: '110',
    use: 'R1W'
  },
  '14-164': {
    address: '265 ASHUELOT DR',
    area: 0.68,
    building$: 133100,
    centers: [
      {
        lat: 43.15567542437154,
        lon: -72.15044590234766
      }
    ],
    cu$: 0,
    land$: 213600,
    owner: 'HOFF, JO ANN G REVOC TRUST',
    taxed$: 346700,
    usage: '110',
    use: 'R1W'
  },
  '14-165': {
    address: '263 ASHUELOT DR',
    area: 2.8,
    building$: 0,
    centers: [
      {
        lat: 43.155008427285466,
        lon: -72.15017300484266
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'L A E ASSOCIATION',
    taxed$: 0,
    usage: '300',
    use: 'EX-M'
  },
  '14-166': {
    address: '22 HARDING RD',
    area: 0.7,
    building$: 126600,
    centers: [
      {
        lat: 43.157765861682556,
        lon: -72.14587734458627
      }
    ],
    cu$: 3500,
    land$: 38700,
    owner: 'HILL, KRISTEN M.',
    taxed$: 168800,
    usage: '110',
    use: 'R1'
  },
  '14-168': {
    address: '237 ASHUELOT DR',
    area: 0.69,
    building$: 128100,
    centers: [
      {
        lat: 43.15492511850564,
        lon: -72.14880238390938
      }
    ],
    cu$: 3000,
    land$: 213600,
    owner: 'CLAUS, GUNHILD REVOC TRST',
    taxed$: 344700,
    usage: '110',
    use: 'R1W'
  },
  '14-169': {
    address: '223 ASHUELOT DR',
    area: 0.69,
    building$: 101300,
    centers: [
      {
        lat: 43.154962265707425,
        lon: -72.14839278412879
      }
    ],
    cu$: 11800,
    land$: 209800,
    owner: 'CURTIS, DIANE REV TRUST',
    taxed$: 322900,
    usage: '110',
    use: 'R1W'
  },
  '14-170': {
    address: '215 ASHUELOT DR',
    area: 0.69,
    building$: 119100,
    centers: [
      {
        lat: 43.15512952922728,
        lon: -72.14798649072137
      }
    ],
    cu$: 5000,
    land$: 223600,
    owner: "O'NEIL, THOMAS L REVOCABLE TRU",
    taxed$: 347700,
    usage: '110',
    use: 'R1W'
  },
  '14-171': {
    address: '193 ASHUELOT DR',
    area: 0.69,
    building$: 185800,
    centers: [
      {
        lat: 43.15532933856942,
        lon: -72.14759017063732
      }
    ],
    cu$: 3000,
    land$: 228600,
    owner: 'BOUCHER, ARDA L 1988 TRUST',
    taxed$: 417400,
    usage: '110',
    use: 'R1W'
  },
  '14-174': {
    address: '157 ASHUELOT DR',
    area: 1.38,
    building$: 91400,
    centers: [
      {
        lat: 43.15592305425265,
        lon: -72.14604379289759
      }
    ],
    cu$: 6500,
    land$: 237000,
    owner: 'HAYES REALTY TRUST',
    taxed$: 334900,
    usage: '110',
    use: 'R1W'
  },
  '14-178': {
    address: '87 ASHUELOT DR',
    area: 0.9,
    building$: 213500,
    centers: [
      {
        lat: 43.15591699863338,
        lon: -72.14444175056481
      }
    ],
    cu$: 24300,
    land$: 214900,
    owner: 'VILLANTI, ROBERT',
    taxed$: 452700,
    usage: '110',
    use: 'R1W'
  },
  '14-179': {
    address: '65 ASHUELOT DR',
    area: 0.969,
    building$: 192100,
    centers: [
      {
        lat: 43.15560995751884,
        lon: -72.14431898809976
      }
    ],
    cu$: 9300,
    land$: 245500,
    owner: 'TATSUTANI, MARIKA',
    taxed$: 446900,
    usage: '110',
    use: 'R1W'
  },
  '14-180': {
    address: '53 ASHUELOT DR',
    area: 1.03,
    building$: 84400,
    centers: [
      {
        lat: 43.15526187697049,
        lon: -72.14418483354606
      }
    ],
    cu$: 14900,
    land$: 215500,
    owner: 'STENZEL, ROBERT & LYNNE FAMILY',
    taxed$: 314800,
    usage: '110',
    use: 'R1W'
  },
  '14-183': {
    address: '21 ASHUELOT DR',
    area: 0.96,
    building$: 152800,
    centers: [
      {
        lat: 43.154368201570456,
        lon: -72.14456078902086
      }
    ],
    cu$: 21700,
    land$: 201200,
    owner: 'IOSCH, FRANK H',
    taxed$: 375700,
    usage: '110',
    use: 'R1W'
  },
  '14-186': {
    address: '26 VAN BUREN CIR',
    area: 0.8,
    building$: 172500,
    centers: [
      {
        lat: 43.15341508704084,
        lon: -72.14504841286069
      }
    ],
    cu$: 20400,
    land$: 244300,
    owner: 'KAY FAMILY 2019 TRUST',
    taxed$: 437200,
    usage: '110',
    use: 'R1W'
  },
  '14-190': {
    address: '29 VAN BUREN CIR',
    area: 0.8,
    building$: 113600,
    centers: [
      {
        lat: 43.152904057449035,
        lon: -72.14453562125846
      }
    ],
    cu$: 6200,
    land$: 244300,
    owner: 'ANDRUSIAK, RICHARD A',
    taxed$: 364100,
    usage: '110',
    use: 'R1W'
  },
  '14-193': {
    address: '173 MCKINLEY DR',
    area: 0.8,
    building$: 157600,
    centers: [
      {
        lat: 43.1534748184432,
        lon: -72.14312614945784
      }
    ],
    cu$: 7700,
    land$: 244000,
    owner: 'MONKTON, SUSAN K. & CLIFFORD B',
    taxed$: 409300,
    usage: '110',
    use: 'R1W'
  },
  '14-194': {
    address: '147 MCKINLEY DR',
    area: 1.25,
    building$: 164900,
    centers: [
      {
        lat: 43.15338828458107,
        lon: -72.14248251247986
      }
    ],
    cu$: 16100,
    land$: 216800,
    owner: 'DAMM, DONALD B & NANCY L REVOC',
    taxed$: 397800,
    usage: '110',
    use: 'R1W'
  },
  '14-198': {
    address: '105 MCKINLEY DR',
    area: 0.78,
    building$: 124800,
    centers: [
      {
        lat: 43.15421037407702,
        lon: -72.14051231342506
      }
    ],
    cu$: 0,
    land$: 39200,
    owner: 'SWANICK, SHELBY ELISABETH',
    taxed$: 164000,
    usage: '110',
    use: 'R1'
  },
  '14-201': {
    address: '48 GARFIELD RD',
    area: 0.96,
    building$: 167900,
    centers: [
      {
        lat: 43.15309927739334,
        lon: -72.13995452400516
      }
    ],
    cu$: 31600,
    land$: 215300,
    owner: 'BATCHA III, JOSEPH J',
    taxed$: 414800,
    usage: '110',
    use: 'R1W'
  },
  '14-204': {
    address: '86 GARFIELD RD',
    area: 0.97,
    building$: 236600,
    centers: [
      {
        lat: 43.1522749003482,
        lon: -72.13936882533328
      }
    ],
    cu$: 1200,
    land$: 215300,
    owner: 'HUNIHAN, KAREN REVOCABLE TRUST',
    taxed$: 453100,
    usage: '110',
    use: 'R1W'
  },
  '14-206': {
    address: '224 ASHUELOT DR',
    area: 0.8,
    building$: 112000,
    centers: [
      {
        lat: 43.15571181397759,
        lon: -72.1486314713155
      }
    ],
    cu$: 7600,
    land$: 59000,
    owner: 'RICARD, ALISON L.',
    taxed$: 178600,
    usage: '110',
    use: 'R1'
  },
  '14-208': {
    address: '48 TAFT RD',
    area: 0.83,
    building$: 70100,
    centers: [
      {
        lat: 43.15669209623205,
        lon: -72.14893823966656
      }
    ],
    cu$: 15400,
    land$: 39500,
    owner: 'MARINACCIO, RALPH J',
    taxed$: 125000,
    usage: '110',
    use: 'R1'
  },
  '14-209': {
    address: '22 TAFT RD',
    area: 0.82,
    building$: 98100,
    centers: [
      {
        lat: 43.15715577522293,
        lon: -72.14907349666991
      }
    ],
    cu$: 12500,
    land$: 39400,
    owner: 'ROCKETT, ANDREW',
    taxed$: 150000,
    usage: '110',
    use: 'R1'
  },
  '14-210': {
    address: '14 TAFT RD',
    area: 0.8,
    building$: 98500,
    centers: [
      {
        lat: 43.157661564344686,
        lon: -72.14923407223834
      }
    ],
    cu$: 1900,
    land$: 39300,
    owner: 'MATTE, DAVID P.',
    taxed$: 139700,
    usage: '110',
    use: 'R1'
  },
  '14-211': {
    address: '631 PRESIDENTIAL DR',
    area: 0.69,
    building$: 137400,
    centers: [
      {
        lat: 43.157862084658944,
        lon: -72.1483537926264
      }
    ],
    cu$: 3000,
    land$: 38600,
    owner: 'BOTELHO, JOSE J. & LAURA',
    taxed$: 179000,
    usage: '110',
    use: 'R1'
  },
  '14-215': {
    address: '55 TAFT RD',
    area: 1.38,
    building$: 87600,
    centers: [
      {
        lat: 43.15652439926105,
        lon: -72.14793926347997
      }
    ],
    cu$: 11400,
    land$: 51300,
    owner: 'CORIGLIANO, LEE B.',
    taxed$: 150300,
    usage: '110',
    use: 'R1'
  },
  '14-216': {
    address: '188 ASHUELOT DR',
    area: 0.78,
    building$: 93400,
    centers: [
      {
        lat: 43.15590300425249,
        lon: -72.14791136038832
      }
    ],
    cu$: 16100,
    land$: 39200,
    owner: 'BERMUDEZ, LOUIS',
    taxed$: 148700,
    usage: '110',
    use: 'R1'
  },
  '14-221': {
    address: '623 PRESIDENTIAL DR',
    area: 0.67,
    building$: 46400,
    centers: [
      {
        lat: 43.15796832315331,
        lon: -72.14764011227606
      }
    ],
    cu$: 15200,
    land$: 38500,
    owner: 'BALLIRO, JOHN F',
    taxed$: 100100,
    usage: '110',
    use: 'R1'
  },
  '14-223': {
    address: '29 HAYES RD',
    area: 0.71,
    building$: 97500,
    centers: [
      {
        lat: 43.157754218865364,
        lon: -72.14663764152544
      }
    ],
    cu$: 6500,
    land$: 38800,
    owner: 'SILVA, RAPHAEL',
    taxed$: 142800,
    usage: '110',
    use: 'R1'
  },
  '14-226': {
    address: '67 HAYES RD',
    area: 1.59,
    building$: 213100,
    centers: [
      {
        lat: 43.156679353193425,
        lon: -72.14594432193684
      }
    ],
    cu$: 24500,
    land$: 41400,
    owner: 'WRIGHT, ROBERT',
    taxed$: 279000,
    usage: '110',
    use: 'R1'
  },
  '14-228': {
    address: '50 HARDING RD',
    area: 0.7,
    building$: 109800,
    centers: [
      {
        lat: 43.157304907730335,
        lon: -72.14573603748525
      }
    ],
    cu$: 3000,
    land$: 38700,
    owner: 'KOPF, BRANDON E',
    taxed$: 151500,
    usage: '110',
    use: 'R1'
  },
  '14-232': {
    address: '47 HARDING RD',
    area: 0.8,
    building$: 112400,
    centers: [
      {
        lat: 43.15742665970187,
        lon: -72.14489757673738
      }
    ],
    cu$: 2000,
    land$: 39300,
    owner: 'BREIDEL, DANIEL M',
    taxed$: 153700,
    usage: '110',
    use: 'R1'
  },
  '14-234': {
    address: '108 ASHUELOT DR',
    area: 0.8,
    building$: 127000,
    centers: [
      {
        lat: 43.1567463921609,
        lon: -72.14438309966373
      }
    ],
    cu$: 1000,
    land$: 39300,
    owner: '108 ASHUELOT DR., LLC',
    taxed$: 167300,
    usage: '110',
    use: 'R1'
  },
  '14-235': {
    address: '96 ASHUELOT DR',
    area: 0.99,
    building$: 51600,
    centers: [
      {
        lat: 43.15652106921976,
        lon: -72.14379437551469
      }
    ],
    cu$: 0,
    land$: 40400,
    owner: 'REGAN JR, RONALD W',
    taxed$: 92000,
    usage: '110',
    use: 'R1'
  },
  '14-239': {
    address: '36 ASHUELOT DR',
    area: 1.77,
    building$: 129700,
    centers: [
      {
        lat: 43.15515465881277,
        lon: -72.14293196853978
      }
    ],
    cu$: 0,
    land$: 45800,
    owner: 'WALSH, JEANNETTE E TRUST',
    taxed$: 175500,
    usage: '110',
    use: 'R1'
  },
  '14-241': {
    address: '10 ASHUELOT DR',
    area: 0.88,
    building$: 103000,
    centers: [
      {
        lat: 43.154152903422236,
        lon: -72.14331296652179
      }
    ],
    cu$: 1800,
    land$: 47700,
    owner: 'CAYER, BRIAN',
    taxed$: 152500,
    usage: '110',
    use: 'R1'
  },
  '14-244': {
    address: '116 MCKINLEY DR',
    area: 0.89,
    building$: 66100,
    centers: [
      {
        lat: 43.1545034697838,
        lon: -72.14178588461239
      }
    ],
    cu$: 14200,
    land$: 43800,
    owner: 'BURT FAMILY 2006 TRUST',
    taxed$: 124100,
    usage: '110',
    use: 'R1'
  },
  '14-247': {
    address: '72 MCKINLEY DR',
    area: 1.2,
    building$: 113800,
    centers: [
      {
        lat: 43.15493328082427,
        lon: -72.14045543424598
      }
    ],
    cu$: 21900,
    land$: 40800,
    owner: 'KOHN, GLADYS M',
    taxed$: 176500,
    usage: '110',
    use: 'R1'
  },
  '14-249': {
    address: '38 MCKINLEY DR',
    area: 1.61,
    building$: 114700,
    centers: [
      {
        lat: 43.15535121375522,
        lon: -72.13948482825313
      }
    ],
    cu$: 1500,
    land$: 41400,
    owner: 'VRABEL REV TRUST,MICHAEL&DORIS',
    taxed$: 157600,
    usage: '110',
    use: 'R1'
  },
  '14-250': {
    address: '28 MCKINLEY DR',
    area: 0.82,
    building$: 132700,
    centers: [
      {
        lat: 43.15560044096872,
        lon: -72.1384765527861
      }
    ],
    cu$: 16600,
    land$: 39400,
    owner: 'SYLVIA, JASON',
    taxed$: 188700,
    usage: '110',
    use: 'R1'
  },
  '14-251': {
    address: '98 ADAMS DR',
    area: 0.83,
    building$: 115100,
    centers: [
      {
        lat: 43.155689794880296,
        lon: -72.13779724530441
      }
    ],
    cu$: 0,
    land$: 37500,
    owner: 'SMITH, KYLE B',
    taxed$: 152600,
    usage: '110',
    use: 'R1'
  },
  '14-252': {
    address: '126 ADAMS DR',
    area: 0.85,
    building$: 0,
    centers: [
      {
        lat: 43.15498811845178,
        lon: -72.13765858723963
      }
    ],
    cu$: 0,
    land$: 10000,
    owner: 'NORTHEAST PROPERTIES & INVESTM',
    taxed$: 10000,
    usage: '110',
    use: 'R1'
  },
  '14-253': {
    address: '23 MCKINLEY DR',
    area: 0.89,
    building$: 155300,
    centers: [
      {
        lat: 43.15489678775749,
        lon: -72.13818323607028
      }
    ],
    cu$: 0,
    land$: 39800,
    owner: 'BELCASTRO, JOSEPH P',
    taxed$: 195100,
    usage: '110',
    use: 'R1'
  },
  '14-260': {
    address: '30 MONROE CIR',
    area: 0.81,
    building$: 110300,
    centers: [
      {
        lat: 43.1542346424075,
        lon: -72.13778535252732
      }
    ],
    cu$: 0,
    land$: 39400,
    owner: 'DENSLOW, NOAH B',
    taxed$: 149700,
    usage: '110',
    use: 'R1'
  },
  '14-262': {
    address: '31 MONROE CIR',
    area: 0.77,
    building$: 137800,
    centers: [
      {
        lat: 43.15350341980229,
        lon: -72.13762774146493
      }
    ],
    cu$: 0,
    land$: 39100,
    owner: 'ROETMAN, THERESA',
    taxed$: 176900,
    usage: '110',
    use: 'R1'
  },
  '14-272': {
    address: '51 LINCOLN DR',
    area: 0.8,
    building$: 150800,
    centers: [
      {
        lat: 43.1560865106392,
        lon: -72.13895839388384
      }
    ],
    cu$: 1500,
    land$: 39300,
    owner: 'DYNDERSKI, ANTHONY  & SANDRA  ',
    taxed$: 191600,
    usage: '110',
    use: 'R1'
  },
  '14-276': {
    address: '111 LINCOLN DR',
    area: 1.27,
    building$: 130500,
    centers: [
      {
        lat: 43.15539363271141,
        lon: -72.14137926108597
      }
    ],
    cu$: 17600,
    land$: 36800,
    owner: 'PARK, DAVID',
    taxed$: 184900,
    usage: '110',
    use: 'R1'
  },
  '14-279': {
    address: '141 LINCOLN DR',
    area: 1.64,
    building$: 119800,
    centers: [
      {
        lat: 43.15647125988528,
        lon: -72.14273983531902
      }
    ],
    cu$: 0,
    land$: 41500,
    owner: 'CILLEY, KIMBERLY A',
    taxed$: 161300,
    usage: '110',
    use: 'R1'
  },
  '14-283': {
    address: '207 LINCOLN DR',
    area: 0.83,
    building$: 113200,
    centers: [
      {
        lat: 43.15755482484259,
        lon: -72.14433748447978
      }
    ],
    cu$: 2900,
    land$: 35500,
    owner: 'DAVIS JR, GORDON O',
    taxed$: 151600,
    usage: '110',
    use: 'R1'
  },
  '14-284': {
    address: '219 LINCOLN DR',
    area: 0.82,
    building$: 134500,
    centers: [
      {
        lat: 43.15802310752579,
        lon: -72.1442713284061
      }
    ],
    cu$: 9700,
    land$: 35500,
    owner: 'SHEPPARD, RICHARD C',
    taxed$: 179700,
    usage: '110',
    use: 'R1'
  },
  '14-286': {
    address: '232 LINCOLN DR',
    area: 0.79,
    building$: 151700,
    centers: [
      {
        lat: 43.158434261585526,
        lon: -72.14359253066128
      }
    ],
    cu$: 0,
    land$: 37300,
    owner: 'WEYMOUTH, DANA M & JEFFREY R',
    taxed$: 189000,
    usage: '110',
    use: 'R1'
  },
  '14-287': {
    address: '210 LINCOLN DR',
    area: 0.79,
    building$: 121700,
    centers: [
      {
        lat: 43.15802369895364,
        lon: -72.1433071790216
      }
    ],
    cu$: 3000,
    land$: 33400,
    owner: 'GRENDELL, FELISHA-ANNE',
    taxed$: 158100,
    usage: '110',
    use: 'R1'
  },
  '14-290': {
    address: '152 LINCOLN DR',
    area: 0.78,
    building$: 140800,
    centers: [
      {
        lat: 43.15702452662884,
        lon: -72.14216053374369
      }
    ],
    cu$: 6700,
    land$: 39200,
    owner: 'CHOY, ALBERT F',
    taxed$: 186700,
    usage: '110',
    use: 'R1'
  },
  '14-291': {
    address: '132 LINCOLN DR',
    area: 0.78,
    building$: 92900,
    centers: [
      {
        lat: 43.15671443226985,
        lon: -72.1417107016338
      }
    ],
    cu$: 25100,
    land$: 37200,
    owner: 'RACZKOWSKI, ARTUR',
    taxed$: 155200,
    usage: '110',
    use: 'R1'
  },
  '14-292': {
    address: '116 LINCOLN DR',
    area: 0.83,
    building$: 61700,
    centers: [
      {
        lat: 43.156449161053544,
        lon: -72.14120817397308
      }
    ],
    cu$: 32300,
    land$: 35500,
    owner: 'MORIN, LISA S',
    taxed$: 129500,
    usage: '110',
    use: 'R1'
  },
  '14-294': {
    address: '76 LINCOLN DR',
    area: 0.85,
    building$: 76500,
    centers: [
      {
        lat: 43.15649053894972,
        lon: -72.14017578651129
      }
    ],
    cu$: 3900,
    land$: 43600,
    owner: 'LEVITZ, ANDREW',
    taxed$: 124000,
    usage: '110',
    use: 'R1'
  },
  '14-295': {
    address: '70 LINCOLN DR',
    area: 1.6,
    building$: 74100,
    centers: [
      {
        lat: 43.15662880412835,
        lon: -72.13959320853152
      }
    ],
    cu$: 2800,
    land$: 44500,
    owner: 'TETRAULT, THOMAS L.',
    taxed$: 121400,
    usage: '110',
    use: 'R1'
  },
  '14-296': {
    address: '52 LINCOLN DR',
    area: 1.58,
    building$: 71500,
    centers: [
      {
        lat: 43.15704373379593,
        lon: -72.13901229392867
      }
    ],
    cu$: 20400,
    land$: 42200,
    owner: 'RANKIN, JOHN A.',
    taxed$: 134100,
    usage: '110',
    use: 'R1A'
  },
  '14-310': {
    address: '22 CLEVELAND CIR',
    area: 0.8,
    building$: 92500,
    centers: [
      {
        lat: 43.158964308264,
        lon: -72.14196220523776
      }
    ],
    cu$: 2700,
    land$: 35400,
    owner: 'STUMPF, KIMBERLY H',
    taxed$: 130600,
    usage: '110',
    use: 'R1'
  },
  '14-311': {
    address: '24 CLEVELAND CIR',
    area: 1.02,
    building$: 140000,
    centers: [
      {
        lat: 43.15869266855983,
        lon: -72.14239791718323
      }
    ],
    cu$: 0,
    land$: 36500,
    owner: 'BOUCHER, MICHAEL H',
    taxed$: 176500,
    usage: '110',
    use: 'R1'
  },
  '14-313': {
    address: '399 PRESIDENTIAL DR',
    area: 0.92,
    building$: 118300,
    centers: [
      {
        lat: 43.159125029019606,
        lon: -72.14095183417886
      }
    ],
    cu$: 0,
    land$: 40000,
    owner: 'PELCHAT, RANDY W.',
    taxed$: 158300,
    usage: '110',
    use: 'R1'
  },
  '14-315': {
    address: '25 JACKSON DR',
    area: 0.75,
    building$: 104900,
    centers: [
      {
        lat: 43.158304922663795,
        lon: -72.14045395281994
      }
    ],
    cu$: 14200,
    land$: 39000,
    owner: 'VACCARO. KENNETH',
    taxed$: 158100,
    usage: '110',
    use: 'R1'
  },
  '14-316': {
    address: '59 JACKSON DR',
    area: 0.75,
    building$: 127100,
    centers: [
      {
        lat: 43.157831371227715,
        lon: -72.14071771707067
      }
    ],
    cu$: 2200,
    land$: 39000,
    owner: 'MILLS, PHILLIP A',
    taxed$: 168300,
    usage: '110',
    use: 'R1'
  },
  '14-317': {
    address: '83 JACKSON DR',
    area: 0.83,
    building$: 131500,
    centers: [
      {
        lat: 43.157839597288174,
        lon: -72.14012319017009
      }
    ],
    cu$: 12000,
    land$: 39500,
    owner: 'MORIN, SCOTT MATTHEW',
    taxed$: 183000,
    usage: '110',
    use: 'R1'
  },
  '14-321': {
    address: '139 JACKSON DR',
    area: 0.75,
    building$: 130100,
    centers: [
      {
        lat: 43.15727490166654,
        lon: -72.13806023705918
      }
    ],
    cu$: 1500,
    land$: 39000,
    owner: 'BALAMUTH, ADAM O.',
    taxed$: 170600,
    usage: '110',
    use: 'R1'
  },
  '14-329': {
    address: '353 PRESIDENTIAL DR',
    area: 2.41,
    building$: 166600,
    centers: [
      {
        lat: 43.15829448095185,
        lon: -72.13948216659976
      }
    ],
    cu$: 3100,
    land$: 43400,
    owner: 'LUBA JR, MICHAEL',
    taxed$: 213100,
    usage: '110',
    use: 'R1A'
  },
  '14-335': {
    address: '390 PRESIDENTIAL DR',
    area: 1.11,
    building$: 73600,
    centers: [
      {
        lat: 43.15969212108372,
        lon: -72.14031397024826
      }
    ],
    cu$: 0,
    land$: 41600,
    owner: 'GIOIA, MARY K.',
    taxed$: 115200,
    usage: '110',
    use: 'R1A'
  },
  '14-337': {
    address: '54 COOLIDGE DR',
    area: 1.09,
    building$: 110100,
    centers: [
      {
        lat: 43.16040433149047,
        lon: -72.14038880894749
      }
    ],
    cu$: 0,
    land$: 40600,
    owner: 'ST. LAURENT, STEVEN P.',
    taxed$: 150700,
    usage: '110',
    use: 'R1'
  },
  '14-338': {
    address: '80 COOLIDGE DR',
    area: 1.16,
    building$: 93700,
    centers: [
      {
        lat: 43.16018893812059,
        lon: -72.13963543615517
      }
    ],
    cu$: 3600,
    land$: 40700,
    owner: 'OUELLETTE, KIM H',
    taxed$: 138000,
    usage: '110',
    use: 'R1'
  },
  '14-340': {
    address: '110 COOLIDGE DR',
    area: 1.27,
    building$: 121700,
    centers: [
      {
        lat: 43.159781450221125,
        lon: -72.13820584702913
      }
    ],
    cu$: 16000,
    land$: 40900,
    owner: 'DUNPHY, JAMES M TRUSTEE, REV T',
    taxed$: 178600,
    usage: '110',
    use: 'R1'
  },
  '14-343': {
    address: '170 COOLIDGE DR',
    area: 3.77,
    building$: 38400,
    centers: [
      {
        lat: 43.16167644730257,
        lon: -72.13679838500912
      }
    ],
    cu$: 500,
    land$: 40200,
    owner: 'DIGIACOMO, JOSEPH A & JAN N',
    taxed$: 79100,
    usage: '110',
    use: 'R1'
  },
  '14-345': {
    address: '216 COOLIDGE DR',
    area: 3.6,
    building$: 61200,
    centers: [
      {
        lat: 43.1627027038346,
        lon: -72.13743200916544
      }
    ],
    cu$: 0,
    land$: 35500,
    owner: 'DRAGON, KIRK M.',
    taxed$: 96700,
    usage: '110',
    use: 'R1'
  },
  '14-350': {
    address: '290 COOLIDGE DR',
    area: 2.37,
    building$: 174500,
    centers: [
      {
        lat: 43.16461810463584,
        lon: -72.13853386995476
      }
    ],
    cu$: 3000,
    land$: 40400,
    owner: 'TRUDELLE, FAMILY TRUST OF 2015',
    taxed$: 217900,
    usage: '110',
    use: 'R1'
  },
  '14-351': {
    address: '306 COOLIDGE DR',
    area: 2.88,
    building$: 147400,
    centers: [
      {
        lat: 43.165150343261445,
        lon: -72.13888547510834
      }
    ],
    cu$: 0,
    land$: 41200,
    owner: 'ADAMEK, ROBERT P',
    taxed$: 188600,
    usage: '110',
    use: 'R1'
  },
  '14-352': {
    address: '328 COOLIDGE DR',
    area: 2.06,
    building$: 144600,
    centers: [
      {
        lat: 43.1652430104949,
        lon: -72.13976277331871
      }
    ],
    cu$: 5700,
    land$: 42900,
    owner: 'GENTILE, DOUGLAS J',
    taxed$: 193200,
    usage: '110',
    use: 'R1A'
  },
  '14-365': {
    address: '20 STOWELL RD',
    area: 2.42,
    building$: 124200,
    centers: [
      {
        lat: 43.1612400947044,
        lon: -72.14251999690569
      }
    ],
    cu$: 5600,
    land$: 42600,
    owner: 'SVITOK, OTTO',
    taxed$: 172400,
    usage: '110',
    use: 'R1'
  },
  '14-369': {
    address: '27 COOLIDGE DR',
    area: 1.24,
    building$: 127900,
    centers: [
      {
        lat: 43.16101366016922,
        lon: -72.14119318491602
      }
    ],
    cu$: 0,
    land$: 40900,
    owner: 'SMITH, JAMES D. III',
    taxed$: 168800,
    usage: '110',
    use: 'R1'
  },
  '14-370': {
    address: '53 COOLIDGE DR',
    area: 1.12,
    building$: 166900,
    centers: [
      {
        lat: 43.161145208926285,
        lon: -72.14058866096595
      }
    ],
    cu$: 0,
    land$: 40700,
    owner: 'WHITEHILL, MICHAEL',
    taxed$: 207600,
    usage: '110',
    use: 'R1'
  },
  '14-373': {
    address: '103 COOLIDGE DR',
    area: 1.11,
    building$: 125700,
    centers: [
      {
        lat: 43.16072478072341,
        lon: -72.13875424559367
      }
    ],
    cu$: 1500,
    land$: 40700,
    owner: 'YOUNG, BARBARA A',
    taxed$: 167900,
    usage: '110',
    use: 'R1'
  },
  '14-379': {
    address: '47 BUCHANAN CIR',
    area: 1.32,
    building$: 163800,
    centers: [
      {
        lat: 43.161958865856924,
        lon: -72.13983723197394
      }
    ],
    cu$: 6300,
    land$: 41000,
    owner: '47 BUCHANAN CIRCLE REALTY TRUS',
    taxed$: 211100,
    usage: '110',
    use: 'R1'
  },
  '14-361': {
    address: '500 COOLIDGE DR',
    area: 1.51,
    building$: 145600,
    centers: [
      {
        lat: 43.16262101947857,
        lon: -72.14372661054188
      }
    ],
    cu$: 41800,
    land$: 41300,
    owner: 'LOWE FAMILY NH TRUST',
    taxed$: 228700,
    usage: '110',
    use: 'R1'
  },
  '14-362': {
    address: '90 STOWELL RD',
    area: 1.88,
    building$: 131600,
    centers: [
      {
        lat: 43.16234508802294,
        lon: -72.14428058402653
      }
    ],
    cu$: 11000,
    land$: 41800,
    owner: 'LEEDBERG, MICHAEL J',
    taxed$: 184400,
    usage: '110',
    use: 'R1'
  },
  '14-368': {
    address: '11 COOLIDGE DR',
    area: 2.34,
    building$: 163200,
    centers: [
      {
        lat: 43.1604051459568,
        lon: -72.14160384599496
      }
    ],
    cu$: 26900,
    land$: 42500,
    owner: 'MORIN, MELISSA',
    taxed$: 232600,
    usage: '110',
    use: 'R1'
  },
  '14-381': {
    address: '74 BUCHANAN CIR',
    area: 3.84,
    building$: 141700,
    centers: [
      {
        lat: 43.1629112190123,
        lon: -72.14152318690103
      }
    ],
    cu$: 25300,
    land$: 44800,
    owner: 'LANDRY FAMILY TRUST',
    taxed$: 211800,
    usage: '110',
    use: 'R1'
  },
  '14-498': {
    address: '67 LANG RD',
    area: 15.79,
    building$: 133400,
    centers: [
      {
        lat: 43.15363133515568,
        lon: -72.16032407696588
      }
    ],
    cu$: 40600,
    land$: 131677,
    owner: 'GILLIGAN, JENNY M',
    taxed$: 305677,
    usage: '110',
    use: 'R1'
  },
  '15-1': {
    address: '223 VALLEY RD',
    area: 1.25,
    building$: 0,
    centers: [
      {
        lat: 43.167901941363226,
        lon: -72.0953168407457
      }
    ],
    cu$: 0,
    land$: 58,
    owner: 'BARTEVIAN, PATRICIA REV TRUST',
    taxed$: 58,
    usage: '110',
    use: 'R1'
  },
  '15-2': {
    address: '231 VALLEY RD',
    area: 12.2,
    building$: 184100,
    centers: [
      {
        lat: 43.16573061549639,
        lon: -72.09446863220231
      }
    ],
    cu$: 37500,
    land$: 49137,
    owner: 'BARTEVIAN, PATRICIA REV TRUST',
    taxed$: 270737,
    usage: '110',
    use: 'R1'
  },
  '15-5': {
    address: '393 VALLEY RD',
    area: 0.5,
    building$: 56800,
    centers: [
      {
        lat: 43.16416868491633,
        lon: -72.09918887769638
      }
    ],
    cu$: 2100,
    land$: 33800,
    owner: 'KELLY, JAYNE M',
    taxed$: 92700,
    usage: '110',
    use: 'R1'
  },
  '15-6': {
    address: '649 VALLEY RD',
    area: 40,
    building$: 148700,
    centers: [
      {
        lat: 43.15840829062819,
        lon: -72.09922434155328
      }
    ],
    cu$: 2600,
    land$: 88518,
    owner: 'DUMENY, SCOTT M',
    taxed$: 239818,
    usage: '110',
    use: 'R1'
  },
  '15-7': {
    address: '719 VALLEY RD',
    area: 5.2,
    building$: 28400,
    centers: [
      {
        lat: 43.15646042362939,
        lon: -72.09853225541704
      }
    ],
    cu$: 20500,
    land$: 38300,
    owner: 'JOY, ROBERT A',
    taxed$: 87200,
    usage: '110',
    use: 'R1'
  },
  '15-8': {
    address: '737 VALLEY RD',
    area: 5.2,
    building$: 61300,
    centers: [
      {
        lat: 43.15590164607999,
        lon: -72.0985834037256
      }
    ],
    cu$: 0,
    land$: 40300,
    owner: 'LINDSELL, JENNIFER R',
    taxed$: 101600,
    usage: '110',
    use: 'R1'
  },
  '15-10': {
    address: '791 VALLEY RD',
    area: 5.2,
    building$: 88600,
    centers: [
      {
        lat: 43.1546964032309,
        lon: -72.09869751773606
      }
    ],
    cu$: 0,
    land$: 42300,
    owner: 'TROTTIER, ROBERT',
    taxed$: 130900,
    usage: '110',
    use: 'R1'
  },
  '15-11': {
    address: '811 VALLEY RD',
    area: 44.79536,
    building$: 2200,
    centers: [
      {
        lat: 43.156187852043686,
        lon: -72.09506020618429
      }
    ],
    cu$: 3900,
    land$: 0,
    owner: 'HOLLENBECK,  JOHN A',
    taxed$: 6100,
    usage: '110',
    use: 'R1'
  },
  '15-12': {
    address: '813 VALLEY RD',
    area: 33.8,
    building$: 104400,
    centers: [
      {
        lat: 43.153847477981174,
        lon: -72.09486185425256
      }
    ],
    cu$: 27500,
    land$: 39542,
    owner: 'HOLLENBECK,  JOHN A',
    taxed$: 171442,
    usage: '110',
    use: 'R1'
  },
  '15-15': {
    address: '893 VALLEY RD',
    area: 5.2,
    building$: 253600,
    centers: [
      {
        lat: 43.15174968222335,
        lon: -72.09897386024595
      }
    ],
    cu$: 3500,
    land$: 92300,
    owner: 'WECHSLER FAMILY REVOCABLE TRUS',
    taxed$: 349400,
    usage: '110',
    use: 'R1'
  },
  '15-17': {
    address: '935 VALLEY RD',
    area: 5.2,
    building$: 156400,
    centers: [
      {
        lat: 43.15063223795197,
        lon: -72.09875873652777
      }
    ],
    cu$: 1700,
    land$: 67300,
    owner: 'SNELL, KAREN A REVOCABLE TRUST',
    taxed$: 225400,
    usage: '110',
    use: 'R1'
  },
  '15-19': {
    address: '973 VALLEY RD',
    area: 5.2,
    building$: 1900,
    centers: [
      {
        lat: 43.1494520922393,
        lon: -72.09877102566833
      }
    ],
    cu$: 1300,
    land$: 34200,
    owner: 'TURNER, SCOTT D. III',
    taxed$: 37400,
    usage: '110',
    use: 'R1'
  },
  '15-21': {
    address: '1025 VALLEY RD',
    area: 5.2,
    building$: 137600,
    centers: [
      {
        lat: 43.1481818250598,
        lon: -72.09908005941898
      }
    ],
    cu$: 21500,
    land$: 42300,
    owner: 'RICHARD, DONALD',
    taxed$: 201400,
    usage: '110',
    use: 'R1'
  },
  '15-24': {
    address: '1040 VALLEY RD',
    area: 11,
    building$: 112700,
    centers: [
      {
        lat: 43.14691811992248,
        lon: -72.103472875066
      }
    ],
    cu$: 3400,
    land$: 50500,
    owner: 'ALMEIDA, JOHN',
    taxed$: 166600,
    usage: '110',
    use: 'R1'
  },
  '15-29': {
    address: '776 VALLEY RD',
    area: 7.3,
    building$: 106600,
    centers: [
      {
        lat: 43.15328457737038,
        lon: -72.10393073431476
      }
    ],
    cu$: 600,
    land$: 41500,
    owner: 'SABINE, ROBIN',
    taxed$: 148700,
    usage: '110',
    use: 'R1'
  },
  '15-33': {
    address: '658 VALLEY RD',
    area: 47.83017,
    building$: 32500,
    centers: [
      {
        lat: 43.15868808877008,
        lon: -72.10368739144594
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'HURLEY, MAUREEN R',
    taxed$: 32500,
    usage: '110',
    use: 'R1'
  },
  '15-35': {
    address: '494 VALLEY RD',
    area: 0.8,
    building$: 65000,
    centers: [
      {
        lat: 43.161815180064565,
        lon: -72.10134750060604
      }
    ],
    cu$: 2000,
    land$: 31800,
    owner: "O'CONNOR, JOANN M",
    taxed$: 98800,
    usage: '110',
    use: 'R1'
  },
  '15-36': {
    address: '524 VALLEY RD',
    area: 5.2,
    building$: 83800,
    centers: [
      {
        lat: 43.16161897409324,
        lon: -72.10207804473421
      }
    ],
    cu$: 0,
    land$: 36200,
    owner: 'PETROWICZ, LAWRENCE C',
    taxed$: 120000,
    usage: '110',
    use: 'R1'
  },
  '15-39': {
    address: '511 FAXON HILL RD',
    area: 19,
    building$: 181000,
    centers: [
      {
        lat: 43.167003460592774,
        lon: -72.107238587649
      }
    ],
    cu$: 15000,
    land$: 34801,
    owner: 'HALVERSON, KIRSTEN',
    taxed$: 230801,
    usage: '110',
    use: 'R1'
  },
  '15-49': {
    address: '1035 FAXON HILL RD',
    area: 2.8,
    building$: 84700,
    centers: [
      {
        lat: 43.1583428998913,
        lon: -72.12342717026887
      }
    ],
    cu$: 0,
    land$: 47500,
    owner: 'RIVEST, BONNIE LYNN',
    taxed$: 132200,
    usage: '110',
    use: 'R1'
  },
  '15-57': {
    address: '1124 FAXON HILL RD',
    area: 3.4,
    building$: 101100,
    centers: [
      {
        lat: 43.15842368121034,
        lon: -72.12663379862178
      }
    ],
    cu$: 25700,
    land$: 168500,
    owner: 'HATCH, ANDREW W',
    taxed$: 295300,
    usage: '110',
    use: 'R1'
  },
  '15-58': {
    address: '1040 FAXON HILL RD',
    area: 6.9,
    building$: 129700,
    centers: [
      {
        lat: 43.1591919505391,
        lon: -72.12521876961989
      }
    ],
    cu$: 31700,
    land$: 228027,
    owner: 'JAKE REALTY TRUST',
    taxed$: 389427,
    usage: '110',
    use: 'R1W'
  },
  '15-63': {
    address: '968 FAXON HILL RD',
    area: 2.33479,
    building$: 13400,
    centers: [
      {
        lat: 43.16009824344944,
        lon: -72.12287911878443
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'CIANO, ROBERT',
    taxed$: 13400,
    usage: '110',
    use: 'R1'
  },
  '15-79': {
    address: '857 MILLEN POND RD',
    area: 0.33,
    building$: 122600,
    centers: [
      {
        lat: 43.16548708106715,
        lon: -72.1267451453776
      }
    ],
    cu$: 10100,
    land$: 213700,
    owner: 'DULAC, PAUL & REBECCA FAMILY R',
    taxed$: 346400,
    usage: '110',
    use: 'R1W'
  },
  '15-84': {
    address: '919 MILLEN POND RD',
    area: 0.26,
    building$: 52900,
    centers: [
      {
        lat: 43.16366995783735,
        lon: -72.12684442834932
      }
    ],
    cu$: 4000,
    land$: 217900,
    owner: 'CLARKE, BARRY D',
    taxed$: 274800,
    usage: '110',
    use: 'R1W'
  },
  '15-90': {
    address: '1035 MILLEN POND RD',
    area: 0.41,
    building$: 123000,
    centers: [
      {
        lat: 43.16127469999695,
        lon: -72.12726544194183
      }
    ],
    cu$: 18500,
    land$: 140300,
    owner: 'MINIKOWSKI, STEPHEN J.',
    taxed$: 281800,
    usage: '110',
    use: 'R1W'
  },
  '15-92': {
    address: '1244 FAXON HILL RD',
    area: 0.48,
    building$: 129100,
    centers: [
      {
        lat: 43.160848016934494,
        lon: -72.12740880068492
      }
    ],
    cu$: 3400,
    land$: 161000,
    owner: 'HUNTON, GEORGE W',
    taxed$: 293500,
    usage: '110',
    use: 'R1W'
  },
  '15-99': {
    address: '164 PRESIDENTIAL DR',
    area: 5.99,
    building$: 88800,
    centers: [
      {
        lat: 43.15881215121211,
        lon: -72.13450655506169
      }
    ],
    cu$: 0,
    land$: 48000,
    owner: 'SILIPIGNI, STEPHEN',
    taxed$: 136800,
    usage: '110',
    use: 'R1A'
  },
  '15-100': {
    address: '70 PRESIDENTIAL DR',
    area: 5.09,
    building$: 104100,
    centers: [
      {
        lat: 43.159652835058694,
        lon: -72.13113071426181
      }
    ],
    cu$: 11900,
    land$: 46600,
    owner: 'ABORN, JAMES H',
    taxed$: 162600,
    usage: '110',
    use: 'R1A'
  },
  '15-105': {
    address: '8 FARNSWORTH HILL RD',
    area: 6.63,
    building$: 112700,
    centers: [
      {
        lat: 43.16427056189728,
        lon: -72.12766704846088
      },
      {
        lat: 43.16330085745487,
        lon: -72.12673638606022
      }
    ],
    cu$: 33400,
    land$: 178251,
    owner: 'BRIGHTON FAMILY TRUST',
    taxed$: 324351,
    usage: '110',
    use: 'R1'
  },
  '15-110': {
    address: '836 MILLEN POND RD',
    area: 2.49,
    building$: 126200,
    centers: [
      {
        lat: 43.16658252723384,
        lon: -72.12777207636613
      }
    ],
    cu$: 2900,
    land$: 132300,
    owner: 'RIGBY, LTC JOHN G',
    taxed$: 261400,
    usage: '110',
    use: 'R1'
  },
  '15-111': {
    address: '818 MILLEN POND RD',
    area: 3.56,
    building$: 150300,
    centers: [
      {
        lat: 43.16716598037066,
        lon: -72.12780132328345
      }
    ],
    cu$: 0,
    land$: 61300,
    owner: 'SHANNON FAMILY TRUST',
    taxed$: 211600,
    usage: '110',
    use: 'R1'
  },
  '15-112': {
    address: '798 MILLEN POND RD',
    area: 0.45,
    building$: 72500,
    centers: [
      {
        lat: 43.16719696852541,
        lon: -72.12644004058123
      },
      {
        lat: 43.16702211459054,
        lon: -72.12583884517755
      }
    ],
    cu$: 3000,
    land$: 44400,
    owner: 'MACDONALD, LEANDRA ANN',
    taxed$: 119900,
    usage: '110',
    use: 'R1'
  },
  '15-113': {
    address: '768 MILLEN POND RD',
    area: 0.51,
    building$: 95500,
    centers: [
      {
        lat: 43.1679143068681,
        lon: -72.12560989446271
      }
    ],
    cu$: 19100,
    land$: 45100,
    owner: 'PACHECO, JOHN D',
    taxed$: 159700,
    usage: '110',
    use: 'R1'
  },
  '16-126': {
    address: '1478 S MAIN ST',
    area: 8.5,
    building$: 145800,
    centers: [
      {
        lat: 43.146617087548876,
        lon: -72.06180740470124
      }
    ],
    cu$: 2600,
    land$: 49600,
    owner: 'CARON, BRUCE W. & BREANNA E.',
    taxed$: 198000,
    usage: '110',
    use: 'R1'
  },
  '15-115': {
    address: '738 MILLEN POND RD',
    area: 0.75,
    building$: 175700,
    centers: [
      {
        lat: 43.16830940337187,
        lon: -72.12465379643625
      }
    ],
    cu$: 1000,
    land$: 58500,
    owner: 'YUSKO REV TRUST, STEPHEN G',
    taxed$: 235200,
    usage: '110',
    use: 'R1'
  },
  '15-118': {
    address: '102 FARNSWORTH HILL RD',
    area: 0.32,
    building$: 60400,
    centers: [
      {
        lat: 43.16573750939498,
        lon: -72.12834591785071
      }
    ],
    cu$: 400,
    land$: 32100,
    owner: 'SMITH, WILLIAM T',
    taxed$: 92900,
    usage: '110',
    use: 'R1'
  },
  '15-123': {
    address: '262 PRESIDENTIAL DR',
    area: 1.14,
    building$: 124700,
    centers: [
      {
        lat: 43.158565127511665,
        lon: -72.13616517020618
      }
    ],
    cu$: 0,
    land$: 40700,
    owner: 'KENNETT, HEATHER J',
    taxed$: 165400,
    usage: '110',
    use: 'R1'
  },
  '15-125': {
    address: '286 PRESIDENTIAL DR',
    area: 2.2,
    building$: 115800,
    centers: [
      {
        lat: 43.158922651808744,
        lon: -72.13729880296901
      }
    ],
    cu$: 0,
    land$: 42300,
    owner: 'DAVIS, GLENN A',
    taxed$: 158100,
    usage: '110',
    use: 'R1A'
  },
  '15-128': {
    address: '27 ADAMS DR',
    area: 0.75,
    building$: 77600,
    centers: [
      {
        lat: 43.157214314937285,
        lon: -72.1359982206851
      }
    ],
    cu$: 4600,
    land$: 39000,
    owner: 'CANNELLA, MICHAEL J II',
    taxed$: 121200,
    usage: '110',
    use: 'R1'
  },
  '15-129': {
    address: '37 ADAMS DR',
    area: 1.5,
    building$: 78800,
    centers: [
      {
        lat: 43.15672327639021,
        lon: -72.13625319057796
      }
    ],
    cu$: 1600,
    land$: 37100,
    owner: 'FELICE LIVING TRUST',
    taxed$: 117500,
    usage: '110',
    use: 'R1'
  },
  '15-132': {
    address: '135 ADAMS DR',
    area: 2.25,
    building$: 136600,
    centers: [
      {
        lat: 43.155084665050396,
        lon: -72.13681779280475
      }
    ],
    cu$: 15900,
    land$: 42400,
    owner: 'BUTLER, BEVERLY A',
    taxed$: 194900,
    usage: '110',
    use: 'R1A'
  },
  '15-141': {
    address: '245 ADAMS DR',
    area: 4.65,
    building$: 138200,
    centers: [
      {
        lat: 43.15162355471578,
        lon: -72.13522883619439
      }
    ],
    cu$: 15200,
    land$: 46000,
    owner: 'KRAMER, KENNETH R',
    taxed$: 199400,
    usage: '110',
    use: 'R1'
  },
  '15-145': {
    address: '250 ADAMS DR',
    area: 0.75,
    building$: 171200,
    centers: [
      {
        lat: 43.15185413887989,
        lon: -72.13585863010636
      }
    ],
    cu$: 7200,
    land$: 39000,
    owner: 'BOYD, ROBERT E.',
    taxed$: 217400,
    usage: '110',
    use: 'R1'
  },
  '15-148': {
    address: '224 ADAMS DR',
    area: 1.5,
    building$: 195000,
    centers: [
      {
        lat: 43.1523966022975,
        lon: -72.13597651990197
      }
    ],
    cu$: 6200,
    land$: 41300,
    owner: 'STEPHANSKY, ERIC J.',
    taxed$: 242500,
    usage: '110',
    use: 'R1'
  },
  '15-149': {
    address: '196 ADAMS DR',
    area: 0.75,
    building$: 117100,
    centers: [
      {
        lat: 43.1530200836434,
        lon: -72.13638727762779
      }
    ],
    cu$: 3000,
    land$: 35100,
    owner: 'CIANCETTA, CHRISTINE A',
    taxed$: 155200,
    usage: '110',
    use: 'R1'
  },
  '15-150': {
    address: '182 ADAMS DR',
    area: 1.5,
    building$: 140400,
    centers: [
      {
        lat: 43.153540791121344,
        lon: -72.13675836352219
      }
    ],
    cu$: 19900,
    land$: 39200,
    owner: 'MEIER, MICHAEL',
    taxed$: 199500,
    usage: '110',
    use: 'R1'
  },
  '15-152': {
    address: '707 VALLEY RD',
    area: 1.5,
    building$: 10700,
    centers: [
      {
        lat: 43.15651704985547,
        lon: -72.10024765591066
      }
    ],
    cu$: 400,
    land$: 28900,
    owner: 'GRINDELL, STEPHEN RICHARD',
    taxed$: 40000,
    usage: '110',
    use: 'R1'
  },
  '15-156': {
    address: '193 VALLEY RD',
    area: 5,
    building$: 91800,
    centers: [
      {
        lat: 43.16739568009852,
        lon: -72.09445446436544
      }
    ],
    cu$: 0,
    land$: 38000,
    owner: 'MOORE, CARL',
    taxed$: 129800,
    usage: '110',
    use: 'R1'
  },
  '16-2-01': {
    address: '434 S MAIN ST',
    area: 12.1,
    building$: 157900,
    centers: [
      {
        lat: 43.16681150952049,
        lon: -72.08862532282188
      }
    ],
    cu$: 3000,
    land$: 38886,
    owner: 'MANNING, JUNE',
    taxed$: 199786,
    usage: '110',
    use: 'R1'
  },
  '16-7-01': {
    address: '254 HIGHLAND HAVEN RD',
    area: 15.15,
    building$: 125600,
    centers: [
      {
        lat: 43.15264238257805,
        lon: -72.08302869652545
      }
    ],
    cu$: 5700,
    land$: 34457,
    owner: 'SHEARIN, KATIE E',
    taxed$: 165757,
    usage: '110',
    use: 'R1A'
  },
  '16-7-02': {
    address: '324 HIGHLAND HAVEN RD',
    area: 15.18,
    building$: 160600,
    centers: [
      {
        lat: 43.15112464570548,
        lon: -72.08419683891915
      }
    ],
    cu$: 17700,
    land$: 35732,
    owner: 'TYLER, JAMES E',
    taxed$: 214032,
    usage: '110',
    use: 'R1'
  },
  '16-9': {
    address: '85 POINT RD',
    area: 0.78,
    building$: 64100,
    centers: [
      {
        lat: 43.148140251100095,
        lon: -72.09175529257944
      }
    ],
    cu$: 3400,
    land$: 206300,
    owner: 'HIGGINS.THOMAS M & JULIANNA S.',
    taxed$: 273800,
    usage: '110',
    use: 'R1W'
  },
  '16-10': {
    address: '67 POINT RD',
    area: 0.91,
    building$: 190900,
    centers: [
      {
        lat: 43.1481155115872,
        lon: -72.09085319066855
      }
    ],
    cu$: 0,
    land$: 210000,
    owner: 'DUGAN, EDWARD M',
    taxed$: 400900,
    usage: '110',
    use: 'R1W'
  },
  '16-11': {
    address: '43 POINT RD',
    area: 0.8,
    building$: 156800,
    centers: [
      {
        lat: 43.14846977440694,
        lon: -72.09020179292527
      }
    ],
    cu$: 600,
    land$: 224300,
    owner: 'MCHUGH, WILLIAM',
    taxed$: 381700,
    usage: '110',
    use: 'R1W'
  },
  '16-77-05': {
    address: '4786 E WASHINGTON RD',
    area: 5.011,
    building$: 176100,
    centers: [
      {
        lat: 43.16741358114117,
        lon: -72.0832866918004
      }
    ],
    cu$: 1500,
    land$: 46100,
    owner: 'BRUNO, ALFRED J',
    taxed$: 223700,
    usage: '110',
    use: 'R1'
  },
  '16-12': {
    address: '552 HIGHLAND HAVEN RD',
    area: 0.9,
    building$: 70100,
    centers: [
      {
        lat: 43.148490409065836,
        lon: -72.08939476657193
      }
    ],
    cu$: 1200,
    land$: 162900,
    owner: 'KELLY, ROBERT W',
    taxed$: 234200,
    usage: '110',
    use: 'R1W'
  },
  '16-14': {
    address: '588 HIGHLAND HAVEN RD',
    area: 0.25,
    building$: 61100,
    centers: [
      {
        lat: 43.14743615685779,
        lon: -72.08899690396649
      }
    ],
    cu$: 0,
    land$: 151500,
    owner: 'SINGLEY LIVING TRUST, MARTIN C',
    taxed$: 212600,
    usage: '110',
    use: 'R1W'
  },
  '16-16': {
    address: '604 HIGHLAND HAVEN RD',
    area: 0.28,
    building$: 101400,
    centers: [
      {
        lat: 43.1470316905458,
        lon: -72.08882008823912
      }
    ],
    cu$: 3200,
    land$: 170300,
    owner: 'DOBSON, BRIAN & DONNA FAMILY T',
    taxed$: 274900,
    usage: '110',
    use: 'R1W'
  },
  '16-17': {
    address: '4 MAPLE WAY',
    area: 0.75,
    building$: 50200,
    centers: [
      {
        lat: 43.146975235494835,
        lon: -72.0877850438312
      }
    ],
    cu$: 2800,
    land$: 39000,
    owner: 'LOPEZ, PETER A.',
    taxed$: 92000,
    usage: '110',
    use: 'R1'
  },
  '16-28': {
    address: '557 HIGHLAND HAVEN RD',
    area: 0.25,
    building$: 51800,
    centers: [
      {
        lat: 43.14827182175858,
        lon: -72.08866689642893
      }
    ],
    cu$: 2000,
    land$: 43800,
    owner: 'JOHNS, DENNIS',
    taxed$: 97600,
    usage: '110',
    use: 'R1A'
  },
  '16-31': {
    address: '501 HIGHLAND HAVEN RD',
    area: 1.18,
    building$: 109100,
    centers: [
      {
        lat: 43.14874018285478,
        lon: -72.08676885450487
      }
    ],
    cu$: 0,
    land$: 36700,
    owner: 'WOJTAS, CHARLES',
    taxed$: 145800,
    usage: '110',
    use: 'R1A'
  },
  '16-34': {
    address: '447 HIGHLAND HAVEN RD',
    area: 0.77,
    building$: 82200,
    centers: [
      {
        lat: 43.14844713482917,
        lon: -72.08564924386982
      }
    ],
    cu$: 17500,
    land$: 35200,
    owner: 'HARRINGTON, DENNIS',
    taxed$: 134900,
    usage: '110',
    use: 'R1A'
  },
  '16-35': {
    address: '439 HIGHLAND HAVEN RD',
    area: 0.45,
    building$: 62300,
    centers: [
      {
        lat: 43.14830089864518,
        lon: -72.0851796797622
      }
    ],
    cu$: 0,
    land$: 33300,
    owner: 'AGRESTI, PASQUALE A',
    taxed$: 95600,
    usage: '110',
    use: 'R1'
  },
  '16-38': {
    address: '101 POINT RD',
    area: 0.56,
    building$: 40300,
    centers: [
      {
        lat: 43.14852077024745,
        lon: -72.09211623706435
      }
    ],
    cu$: 1800,
    land$: 161500,
    owner: 'NEMIROVSKY, MICHAEL',
    taxed$: 203600,
    usage: '110',
    use: 'R1W'
  },
  '16-43': {
    address: '494 HIGHLAND HAVEN RD',
    area: 2.7,
    building$: 186900,
    centers: [
      {
        lat: 43.149878632083144,
        lon: -72.08674057385011
      }
    ],
    cu$: 10800,
    land$: 38700,
    owner: 'ASSELIN, LORETTA',
    taxed$: 236400,
    usage: '110',
    use: 'R1A'
  },
  '16-44': {
    address: '512 HIGHLAND HAVEN RD',
    area: 2,
    building$: 110300,
    centers: [
      {
        lat: 43.14975342883381,
        lon: -72.08748582292836
      }
    ],
    cu$: 1600,
    land$: 37800,
    owner: 'ADAMS-BARRIENTOS, KAREN',
    taxed$: 149700,
    usage: '110',
    use: 'R1'
  },
  '16-49': {
    address: '1158 S MAIN ST',
    area: 13.19,
    building$: 111500,
    centers: [
      {
        lat: 43.15107765696232,
        lon: -72.07068610051908
      }
    ],
    cu$: 134400,
    land$: 45236,
    owner: 'LAFFERTY, ANDREW M.',
    taxed$: 291136,
    usage: '110',
    use: 'R1'
  },
  '16-55': {
    address: '1388 S MAIN ST',
    area: 27.56,
    building$: 132300,
    centers: [
      {
        lat: 43.14686049421175,
        lon: -72.06377101812993
      }
    ],
    cu$: 3300,
    land$: 65300,
    owner: 'YOUNG, JOHANNA H',
    taxed$: 200900,
    usage: '110',
    use: 'R1'
  },
  '16-66': {
    address: '3859 E WASHINGTON RD',
    area: 13,
    building$: 94400,
    centers: [
      {
        lat: 43.165780558486404,
        lon: -72.05113748286384
      }
    ],
    cu$: 300,
    land$: 37459,
    owner: 'ROBERTSON, EVERETT',
    taxed$: 132159,
    usage: '110',
    use: 'R1'
  },
  '16-70-16': {
    address: '4627 E WASHINGTON RD',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.16708397229818,
        lon: -72.07658225157533
      }
    ],
    cu$: 0,
    land$: 152,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 152,
    usage: '190',
    use: 'CUUO'
  },
  '16-71': {
    address: '1107 S MAIN ST',
    area: 29.48,
    building$: 175900,
    centers: [
      {
        lat: 43.155017120770026,
        lon: -72.06940011461289
      }
    ],
    cu$: 37200,
    land$: 85754,
    owner: 'PARTYKA, STANLEY J. III',
    taxed$: 298854,
    usage: '110',
    use: 'R1'
  },
  '16-86': {
    address: '132 WASHINGTON DR',
    area: 3.8,
    building$: 78800,
    centers: [
      {
        lat: 43.16856618620786,
        lon: -72.06139410443855
      }
    ],
    cu$: 5300,
    land$: 44700,
    owner: 'SHERIFF, BARRY D.',
    taxed$: 128800,
    usage: '110',
    use: 'R1'
  },
  '16-76': {
    address: '479 S MAIN ST',
    area: 10,
    building$: 52600,
    centers: [
      {
        lat: 43.16749275350722,
        lon: -72.08561474182937
      }
    ],
    cu$: 0,
    land$: 78500,
    owner: 'MULLINER, SHANE AND CAMEO',
    taxed$: 131100,
    usage: '260',
    use: 'CI'
  },
  '16-77-02': {
    address: '60 MILL ST',
    area: 5.02,
    building$: 105100,
    centers: [
      {
        lat: 43.16952103491525,
        lon: -72.08438028880069
      }
    ],
    cu$: 2000,
    land$: 37208,
    owner: 'LAWRENCE, KEVIN A',
    taxed$: 144308,
    usage: '110',
    use: 'R1'
  },
  '16-77-04': {
    address: '4812 E WASHINGTON RD',
    area: 5.36538,
    building$: 6600,
    centers: [
      {
        lat: 43.16738045317089,
        lon: -72.08423055167081
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'LONGVAL, MARC C',
    taxed$: 6600,
    usage: '110',
    use: 'R1'
  },
  '16-78': {
    address: '4610 E WASHINGTON RD',
    area: 3.7,
    building$: 138600,
    centers: [
      {
        lat: 43.16860729860479,
        lon: -72.07652542627591
      }
    ],
    cu$: 100,
    land$: 40100,
    owner: 'RUSSELL, JOHN A',
    taxed$: 178800,
    usage: '110',
    use: 'R1'
  },
  '16-79': {
    address: '4550 E WASHINGTON RD',
    area: 1.73461,
    building$: 0,
    centers: [
      {
        lat: 43.16826041808797,
        lon: -72.07488433525187
      }
    ],
    cu$: 1000,
    land$: 0,
    owner: 'BOREY, LOUIS J',
    taxed$: 1000,
    usage: '260',
    use: 'CI'
  },
  '16-81': {
    address: '23 ISLAND POND RD',
    area: 3.6,
    building$: 88100,
    centers: [
      {
        lat: 43.168412781041,
        lon: -72.07364933215186
      }
    ],
    cu$: 14800,
    land$: 55500,
    owner: 'DUGGAN, COLIN C',
    taxed$: 158400,
    usage: '110',
    use: 'R1'
  },
  '16-88': {
    address: '92 WASHINGTON DR',
    area: 3.2,
    building$: 65700,
    centers: [
      {
        lat: 43.16766917564632,
        lon: -72.06122828018691
      }
    ],
    cu$: 3700,
    land$: 43800,
    owner: 'POZOMOORE, MARIA ISABEL',
    taxed$: 113200,
    usage: '110',
    use: 'R1'
  },
  '16-92': {
    address: '22 WASHINGTON DR',
    area: 2.9,
    building$: 206300,
    centers: [
      {
        lat: 43.16609823675407,
        lon: -72.06301305797918
      }
    ],
    cu$: 28400,
    land$: 43400,
    owner: 'DUBE, DAVID',
    taxed$: 278100,
    usage: '110',
    use: 'R1'
  },
  '16-93': {
    address: '4210 E WASHINGTON RD',
    area: 2.88,
    building$: 178000,
    centers: [
      {
        lat: 43.16614085512162,
        lon: -72.0612405707242
      }
    ],
    cu$: 500,
    land$: 41200,
    owner: 'GILLILAND FAMILY REV TRUST',
    taxed$: 219700,
    usage: '110',
    use: 'R1'
  },
  '16-97': {
    address: '4126 E WASHINGTON RD',
    area: 3.18,
    building$: 94500,
    centers: [
      {
        lat: 43.16510874871244,
        lon: -72.05968428391316
      }
    ],
    cu$: 6800,
    land$: 43800,
    owner: 'WHYNOTT, CHRISTOPHER FRANCIS',
    taxed$: 145100,
    usage: '110',
    use: 'R1'
  },
  '16-100': {
    address: '4070 E WASHINGTON RD',
    area: 3.34,
    building$: 70600,
    centers: [
      {
        lat: 43.164059804355404,
        lon: -72.05823645386565
      }
    ],
    cu$: 3600,
    land$: 44000,
    owner: 'HOWDEN, ERIK J',
    taxed$: 118200,
    usage: '110',
    use: 'R1'
  },
  '16-107': {
    address: '3912 E WASHINGTON RD',
    area: 2.78,
    building$: 117400,
    centers: [
      {
        lat: 43.166143804444566,
        lon: -72.05456755256671
      }
    ],
    cu$: 7700,
    land$: 43200,
    owner: 'LYNCH, THOMAS E',
    taxed$: 168300,
    usage: '110',
    use: 'R1'
  },
  '16-112': {
    address: '3824 E WASHINGTON RD',
    area: 5.26,
    building$: 104900,
    centers: [
      {
        lat: 43.168137294832036,
        lon: -72.0543227867931
      }
    ],
    cu$: 10600,
    land$: 44700,
    owner: 'SNAIR SR, ROBERT B',
    taxed$: 160200,
    usage: '110',
    use: 'R1'
  },
  '16-114': {
    address: '3756 E WASHINGTON RD',
    area: 5.14,
    building$: 129000,
    centers: [
      {
        lat: 43.16889678755847,
        lon: -72.0538065255981
      }
    ],
    cu$: 4700,
    land$: 42200,
    owner: 'KULBACKI, STEVEN C',
    taxed$: 175900,
    usage: '110',
    use: 'R1'
  },
  '16-124': {
    address: '1514 S MAIN ST',
    area: 7.6,
    building$: 63200,
    centers: [
      {
        lat: 43.14624938690606,
        lon: -72.06020402285552
      }
    ],
    cu$: 3100,
    land$: 50400,
    owner: 'ELDRIDGE, MARC',
    taxed$: 116700,
    usage: '110',
    use: 'R1'
  },
  '16-118': {
    address: '381 HIGHLAND HAVEN RD',
    area: 2.02,
    building$: 160400,
    centers: [
      {
        lat: 43.14876381183181,
        lon: -72.08279455985519
      }
    ],
    cu$: 2800,
    land$: 42000,
    owner: 'BARDEN, RALF I & INGER A REV F',
    taxed$: 205200,
    usage: '110',
    use: 'R1'
  },
  '16-119': {
    address: '48 BEAVER BROOK RD',
    area: 6.25,
    building$: 127400,
    centers: [
      {
        lat: 43.14782167086209,
        lon: -72.08441690244769
      }
    ],
    cu$: 29200,
    land$: 48400,
    owner: 'CAFFREY, EVAN',
    taxed$: 205000,
    usage: '110',
    use: 'R1'
  },
  '16-121': {
    address: '608 HIGHLAND HAVEN RD',
    area: 0.25,
    building$: 200700,
    centers: [
      {
        lat: 43.146855747632166,
        lon: -72.08859326752571
      }
    ],
    cu$: 3000,
    land$: 170000,
    owner: 'GRUNWALD, MICHAEL',
    taxed$: 373700,
    usage: '110',
    use: 'R1W'
  },
  '16-123': {
    address: '1516 S MAIN ST',
    area: 6.6,
    building$: 22700,
    centers: [
      {
        lat: 43.146146104124654,
        lon: -72.05927272984029
      }
    ],
    cu$: 700,
    land$: 48900,
    owner: 'OSTERTAG, ROBERT',
    taxed$: 72300,
    usage: '110',
    use: 'R1'
  },
  '16-125': {
    address: '1480 S MAIN ST',
    area: 6.5,
    building$: 39500,
    centers: [
      {
        lat: 43.14648546306561,
        lon: -72.06097287548589
      }
    ],
    cu$: 900,
    land$: 48800,
    owner: 'OSTERTAG, MICHAEL D',
    taxed$: 89200,
    usage: '110',
    use: 'R1'
  },
  '16-128': {
    address: '27 BEAVER BROOK RD',
    area: 5,
    building$: 72900,
    centers: [
      {
        lat: 43.14792072534905,
        lon: -72.08105180562849
      }
    ],
    cu$: 38100,
    land$: 44300,
    owner: 'BARDEN, MATS',
    taxed$: 155300,
    usage: '110',
    use: 'R1A'
  },
  '16-129': {
    address: '51 BEAVER BROOK RD',
    area: 13,
    building$: 52200,
    centers: [
      {
        lat: 43.147226564824415,
        lon: -72.07847063820351
      }
    ],
    cu$: 4100,
    land$: 51000,
    owner: 'MOSHER, DOUGLAS G',
    taxed$: 107300,
    usage: '110',
    use: 'R1A'
  },
  '17-8': {
    address: '289 SMITH POND RD',
    area: 173,
    building$: 343800,
    centers: [
      {
        lat: 43.15695880693304,
        lon: -72.0404582618454
      }
    ],
    cu$: 7300,
    land$: 42293,
    owner: 'RUBEGA REV TRUST OF 2015',
    taxed$: 393393,
    usage: '110',
    use: 'R1'
  },
  '17-10': {
    address: '269 SMITH POND RD',
    area: 5,
    building$: 119000,
    centers: [
      {
        lat: 43.15390324180305,
        lon: -72.03670490053477
      }
    ],
    cu$: 15400,
    land$: 42000,
    owner: 'SPALDING, PAMELA A',
    taxed$: 176400,
    usage: '110',
    use: 'R1'
  },
  '17-11': {
    address: '241 SMITH POND RD',
    area: 8,
    building$: 125500,
    centers: [
      {
        lat: 43.152724557728206,
        lon: -72.0384006188501
      }
    ],
    cu$: 2100,
    land$: 42500,
    owner: 'DONNELLY, JAMES R.',
    taxed$: 170100,
    usage: '110',
    use: 'R1'
  },
  '17-12': {
    address: '181 SMITH POND RD',
    area: 20.3,
    building$: 127700,
    centers: [
      {
        lat: 43.15130680192251,
        lon: -72.04133762712904
      }
    ],
    cu$: 16100,
    land$: 34106,
    owner: 'HAKULIN,  ANNA MARIE ANNELLI',
    taxed$: 177906,
    usage: '110',
    use: 'R1'
  },
  '17-16': {
    address: '256 SMITH POND RD',
    area: 2.09,
    building$: 130200,
    centers: [
      {
        lat: 43.153167123921605,
        lon: -72.034937196405
      }
    ],
    cu$: 12600,
    land$: 61000,
    owner: 'HUOT, ERIN M',
    taxed$: 203800,
    usage: '110',
    use: 'R1'
  },
  '17-17': {
    address: '302 SMITH POND RD',
    area: 2.05,
    building$: 155700,
    centers: [
      {
        lat: 43.154387094521866,
        lon: -72.03437258267881
      }
    ],
    cu$: 3000,
    land$: 32200,
    owner: 'DESFOSSES, RICHARD',
    taxed$: 190900,
    usage: '110',
    use: 'R1'
  },
  '17-19': {
    address: '107 WILD ACRE DR',
    area: 3.328,
    building$: 146300,
    centers: [
      {
        lat: 43.154381044748305,
        lon: -72.0333179883661
      }
    ],
    cu$: 5000,
    land$: 139600,
    owner: 'MUSMANNO, FRANK J. REVOC TRUST',
    taxed$: 290900,
    usage: '110',
    use: 'R1W'
  },
  '17-20': {
    address: '77 WILD ACRE DR',
    area: 2.198,
    building$: 136600,
    centers: [
      {
        lat: 43.15376706214161,
        lon: -72.03311926522761
      },
      {
        lat: 43.154351792962274,
        lon: -72.03223645699383
      }
    ],
    cu$: 22600,
    land$: 120500,
    owner: 'PARK, THOMAS E',
    taxed$: 279700,
    usage: '110',
    use: 'R1W'
  },
  '17-21': {
    address: '56 WILD ACRE DR',
    area: 4.19,
    building$: 38000,
    centers: [
      {
        lat: 43.15240186245536,
        lon: -72.03477157946058
      }
    ],
    cu$: 3700,
    land$: 40800,
    owner: 'NIVEN, RICHARD',
    taxed$: 82500,
    usage: '110',
    use: 'R1A'
  },
  '17-22': {
    address: '90 WILD ACRE DR',
    area: 1.127,
    building$: 108000,
    centers: [
      {
        lat: 43.153461823052695,
        lon: -72.03230887275878
      },
      {
        lat: 43.15365158406502,
        lon: -72.03167488244713
      }
    ],
    cu$: 21600,
    land$: 104300,
    owner: 'GANNON, MICHAEL',
    taxed$: 233900,
    usage: '110',
    use: 'R1W'
  },
  '17-23': {
    address: '158 WILD ACRE DR',
    area: 1.254,
    building$: 95200,
    centers: [
      {
        lat: 43.15272435468448,
        lon: -72.03141032195357
      },
      {
        lat: 43.15306322683044,
        lon: -72.03093038458164
      }
    ],
    cu$: 28300,
    land$: 119400,
    owner: 'HOLMBERG, CHARLOTTE MINOR VEDE',
    taxed$: 242900,
    usage: '110',
    use: 'R1W'
  },
  '17-24': {
    address: '168 WILD ACRE DR',
    area: 1.308,
    building$: 111300,
    centers: [
      {
        lat: 43.15241655073616,
        lon: -72.03077983707497
      },
      {
        lat: 43.15290179983389,
        lon: -72.03055337850407
      }
    ],
    cu$: 21300,
    land$: 104500,
    owner: 'ALLAN, JAMES AND BERNADETTE',
    taxed$: 237100,
    usage: '110',
    use: 'R1A'
  },
  '17-27': {
    address: '223 WILD ACRE DR',
    area: 3.06,
    building$: 152500,
    centers: [
      {
        lat: 43.15263718635221,
        lon: -72.02794386601336
      }
    ],
    cu$: 19900,
    land$: 139200,
    owner: 'WARENDA, MARK',
    taxed$: 311600,
    usage: '110',
    use: 'R1W'
  },
  '22-4': {
    address: '202 N MAIN ST',
    area: 2.10307,
    building$: 11100,
    centers: [
      {
        lat: 43.181373366049044,
        lon: -72.10061784601132
      }
    ],
    cu$: 4300,
    land$: 0,
    owner: 'CARTER, MICHAEL',
    taxed$: 15400,
    usage: '110',
    use: 'R1'
  },
  '17-41': {
    address: '361 SMITH POND RD',
    area: 13,
    building$: 210000,
    centers: [
      {
        lat: 43.156487661952156,
        lon: -72.033200477205
      }
    ],
    cu$: 33400,
    land$: 139621,
    owner: 'ROSS, ALAN L 2011 REVOCABLE TR',
    taxed$: 383021,
    usage: '110',
    use: 'R1W'
  },
  '17-45': {
    address: '58 WILD ACRE DR',
    area: 12.598,
    building$: 121400,
    centers: [
      {
        lat: 43.15171157608299,
        lon: -72.03180700395636
      },
      {
        lat: 43.1534294394105,
        lon: -72.03390032851813
      }
    ],
    cu$: 17900,
    land$: 33919,
    owner: 'NIVEN, RICHARD R & CYNTHIA R',
    taxed$: 173219,
    usage: '120',
    use: 'R2'
  },
  '19-2': {
    address: '1137 VALLEY RD',
    area: 5,
    building$: 83300,
    centers: [
      {
        lat: 43.1457476210599,
        lon: -72.09782571291838
      }
    ],
    cu$: 1000,
    land$: 46500,
    owner: 'HESELTON, NICHOLAS W',
    taxed$: 130800,
    usage: '110',
    use: 'R1'
  },
  '20-47': {
    address: '160 DOLE SCHOOL HOUSE RD',
    area: 5.07,
    building$: 0,
    centers: [
      {
        lat: 43.1436259438641,
        lon: -72.05330759092962
      }
    ],
    cu$: 7900,
    land$: 22400,
    owner: 'ESTEY-MANSFIELD, RAYMOND',
    taxed$: 30300,
    usage: '110',
    use: 'R1'
  },
  '20-124': {
    address: '212 BEAVER BROOK RD',
    area: 1,
    building$: 207200,
    centers: [
      {
        lat: 43.142997550162434,
        lon: -72.08375666158598
      }
    ],
    cu$: 5500,
    land$: 100900,
    owner: 'KELLEY FAMILY TRUST, SHAWN M.',
    taxed$: 313600,
    usage: '110',
    use: 'R1W'
  },
  '20-125': {
    address: '211 BEAVER BROOK RD',
    area: 8.7371,
    building$: 103600,
    centers: [
      {
        lat: 43.14335739906376,
        lon: -72.0805678068563
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'VENDEL LIVING TRUST',
    taxed$: 103600,
    usage: '110',
    use: 'R1A'
  },
  '20-137': {
    address: '642 HIGHLAND HAVEN RD',
    area: 0.6,
    building$: 112100,
    centers: [
      {
        lat: 43.14626666626079,
        lon: -72.08757331745349
      }
    ],
    cu$: 15300,
    land$: 183100,
    owner: 'GOODMAN, MICHAEL W',
    taxed$: 310500,
    usage: '110',
    use: 'R1W'
  },
  '20-138': {
    address: '656 HIGHLAND HAVEN RD',
    area: 0.3,
    building$: 156800,
    centers: [
      {
        lat: 43.146015815707564,
        lon: -72.0872831245057
      }
    ],
    cu$: 5600,
    land$: 170500,
    owner: 'CARUSO, NANCY',
    taxed$: 332900,
    usage: '110',
    use: 'R1W'
  },
  '20-139': {
    address: '664 HIGHLAND HAVEN RD',
    area: 0.22,
    building$: 70500,
    centers: [
      {
        lat: 43.145877634286336,
        lon: -72.0871345007641
      }
    ],
    cu$: 0,
    land$: 157000,
    owner: 'JANELLE, DAVID J',
    taxed$: 227500,
    usage: '110',
    use: 'R1W'
  },
  '20-140': {
    address: '672 HIGHLAND HAVEN RD',
    area: 0.35,
    building$: 119100,
    centers: [
      {
        lat: 43.14570297353015,
        lon: -72.08699208018267
      }
    ],
    cu$: 0,
    land$: 161000,
    owner: 'PHERSON, MARK',
    taxed$: 280100,
    usage: '110',
    use: 'R1W'
  },
  '20-142': {
    address: '696 HIGHLAND HAVEN RD',
    area: 0.35,
    building$: 42300,
    centers: [
      {
        lat: 43.14519062329004,
        lon: -72.08638175694176
      }
    ],
    cu$: 3400,
    land$: 171000,
    owner: 'ROGERS LIVING TRUST',
    taxed$: 216700,
    usage: '110',
    use: 'R1W'
  },
  '20-150': {
    address: '236 DOLE SCHOOL HOUSE RD',
    area: 5.07,
    building$: 118100,
    centers: [
      {
        lat: 43.14242916476756,
        lon: -72.05178739354893
      }
    ],
    cu$: 1200,
    land$: 38600,
    owner: 'BROADLEY, EMILY C',
    taxed$: 157900,
    usage: '110',
    use: 'R1'
  },
  '22-5-01': {
    address: '130 N MAIN ST',
    area: 2.02,
    building$: 218900,
    centers: [
      {
        lat: 43.179288873735864,
        lon: -72.09896829014788
      }
    ],
    cu$: 4400,
    land$: 37800,
    owner: 'CILLEY, JOHN E',
    taxed$: 261100,
    usage: '110',
    use: 'R1'
  },
  '20-171': {
    address: '68 BEAVER BROOK RD',
    area: 3.69,
    building$: 109300,
    centers: [
      {
        lat: 43.14641396015972,
        lon: -72.08413308576543
      }
    ],
    cu$: 1800,
    land$: 40100,
    owner: 'TAGLIERI, STEPHEN',
    taxed$: 151200,
    usage: '110',
    use: 'R1A'
  },
  '20-173': {
    address: '130 BEAVER BROOK RD',
    area: 3.41,
    building$: 217400,
    centers: [
      {
        lat: 43.145385230162596,
        lon: -72.08314619609293
      }
    ],
    cu$: 6500,
    land$: 159000,
    owner: 'VOAS, CARL M REVOCABLE TRUST',
    taxed$: 382900,
    usage: '110',
    use: 'R1W'
  },
  '20-174': {
    address: '158 BEAVER BROOK RD',
    area: 2.47,
    building$: 252800,
    centers: [
      {
        lat: 43.144791072599354,
        lon: -72.08310342183755
      }
    ],
    cu$: 3900,
    land$: 186900,
    owner: 'GILMAN, RAY E. III',
    taxed$: 443600,
    usage: '110',
    use: 'R1W'
  },
  '20-175': {
    address: '198 BEAVER BROOK RD',
    area: 2.02,
    building$: 105100,
    centers: [
      {
        lat: 43.14417158745012,
        lon: -72.08308529988862
      }
    ],
    cu$: 3600,
    land$: 162000,
    owner: 'BUTLER, COLLEEN ANNE',
    taxed$: 270700,
    usage: '110',
    use: 'R1'
  },
  '20-183': {
    address: '141 BEAVER BROOK RD',
    area: 7.49,
    building$: 282600,
    centers: [
      {
        lat: 43.14487584128202,
        lon: -72.07893356041882
      }
    ],
    cu$: 1500,
    land$: 51200,
    owner: 'SCANLAN, MONICA M',
    taxed$: 335300,
    usage: '110',
    use: 'R1A'
  },
  '20-186': {
    address: '93 BEAVER BROOK RD',
    area: 9.49,
    building$: 128300,
    centers: [
      {
        lat: 43.14655933917872,
        lon: -72.0786702140227
      }
    ],
    cu$: 15400,
    land$: 47300,
    owner: 'FED HOME LOAN MORTG CORP',
    taxed$: 191000,
    usage: '110',
    use: 'R1A'
  },
  '21-6': {
    address: '564 DOLE SCHOOL HOUSE RD',
    area: 75,
    building$: 141500,
    centers: [
      {
        lat: 43.1349389006026,
        lon: -72.03882002477846
      }
    ],
    cu$: 0,
    land$: 36385,
    owner: 'CURTIS, GARRETT L',
    taxed$: 177885,
    usage: '110',
    use: 'R1'
  },
  '22-26': {
    address: '88 HALFMOON POND RD',
    area: 0.1,
    building$: 68400,
    centers: [
      {
        lat: 43.1752203442223,
        lon: -72.09385512546478
      }
    ],
    cu$: 0,
    land$: 16200,
    owner: 'SUMSKI, LAWRENCE P',
    taxed$: 84600,
    usage: '110',
    use: 'R1'
  },
  '21-9-01': {
    address: '422 DOLE SCHOOL HOUSE RD',
    area: 2.01,
    building$: 84800,
    centers: [
      {
        lat: 43.13883824177254,
        lon: -72.0458167621376
      }
    ],
    cu$: 1700,
    land$: 33600,
    owner: 'ANCTIL, CHARLES',
    taxed$: 120100,
    usage: '110',
    use: 'R1'
  },
  '21-9-02': {
    address: '536 DOLE SCHOOL HOUSE RD',
    area: 12.4,
    building$: 142500,
    centers: [
      {
        lat: 43.13582535067979,
        lon: -72.04141744664685
      }
    ],
    cu$: 26400,
    land$: 33660,
    owner: 'MOORE,DANIELLE A',
    taxed$: 202560,
    usage: '110',
    use: 'R1'
  },
  '21-13': {
    address: '485 DOLE SCHOOL HOUSE RD',
    area: 30,
    building$: 110900,
    centers: [
      {
        lat: 43.140281625884434,
        lon: -72.0411369502434
      }
    ],
    cu$: 5200,
    land$: 35403,
    owner: 'WALTON, ROBERT S',
    taxed$: 151503,
    usage: '110',
    use: 'R1'
  },
  '21-17': {
    address: '476 DOLE SCHOOL HOUSE RD',
    area: 6.86,
    building$: 143400,
    centers: [
      {
        lat: 43.13557132776958,
        lon: -72.04378027271022
      }
    ],
    cu$: 1000,
    land$: 36700,
    owner: 'MILLER, DONALD A',
    taxed$: 181100,
    usage: '110',
    use: 'R1'
  },
  '21-18': {
    address: '492 DOLE SCHOOL HOUSE RD',
    area: 6.88,
    building$: 37500,
    centers: [
      {
        lat: 43.1365704158946,
        lon: -72.04305424089857
      }
    ],
    cu$: 1700,
    land$: 33100,
    owner: 'WALTON, GORDON C',
    taxed$: 72300,
    usage: '110',
    use: 'R1'
  },
  '21-19': {
    address: '506 DOLE SCHOOL HOUSE RD',
    area: 7.05,
    building$: 116200,
    centers: [
      {
        lat: 43.137386629837934,
        lon: -72.04235107225153
      }
    ],
    cu$: 20600,
    land$: 49600,
    owner: 'REED, SHERRY A & MARK J',
    taxed$: 186400,
    usage: '110',
    use: 'R1'
  },
  '21-20': {
    address: '446 DOLE SCHOOL HOUSE RD',
    area: 10.7,
    building$: 142200,
    centers: [
      {
        lat: 43.13749702650746,
        lon: -72.04503322637642
      }
    ],
    cu$: 41300,
    land$: 41900,
    owner: 'GIGLIO, TIMOTHY R',
    taxed$: 225400,
    usage: '110',
    use: 'R1'
  },
  '22-1': {
    address: '280 N MAIN ST',
    area: 2,
    building$: 63100,
    centers: [
      {
        lat: 43.183414463780764,
        lon: -72.1017562785696
      }
    ],
    cu$: 3700,
    land$: 42000,
    owner: 'LEMIRE, LOUIS P',
    taxed$: 108800,
    usage: '110',
    use: 'R1'
  },
  '22-10': {
    address: '32 N MAIN ST',
    area: 2,
    building$: 120600,
    centers: [
      {
        lat: 43.17784013241755,
        lon: -72.09736553591758
      }
    ],
    cu$: 3000,
    land$: 37800,
    owner: 'PROVENCHER, KEVIN',
    taxed$: 161400,
    usage: '110',
    use: 'R1'
  },
  '22-11': {
    address: '26 N MAIN ST',
    area: 2.06,
    building$: 173600,
    centers: [
      {
        lat: 43.17741756660888,
        lon: -72.09696360679693
      }
    ],
    cu$: 19100,
    land$: 36000,
    owner: 'GIBSON, JONATHAN',
    taxed$: 228700,
    usage: '110',
    use: 'R1'
  },
  '22-12-0S': {
    address: '7 HALFMOON POND RD',
    area: 3.206,
    building$: 571000,
    centers: [
      {
        lat: 43.17686935867412,
        lon: -72.09624394607704
      }
    ],
    cu$: 10500,
    land$: 98600,
    owner: 'WASHINGTON, TOWN OF -TOWN HALL',
    taxed$: 680100,
    usage: '300',
    use: 'EX-M'
  },
  '22-15': {
    address: '85 HALFMOON POND RD',
    area: 2.93,
    building$: 146000,
    centers: [
      {
        lat: 43.17628976566064,
        lon: -72.09399050274999
      }
    ],
    cu$: 23300,
    land$: 39100,
    owner: "O'CONNOR, SEAN P",
    taxed$: 208400,
    usage: '110',
    use: 'R1'
  },
  '22-18': {
    address: '95 HALFMOON POND RD',
    area: 1.2,
    building$: 104500,
    centers: [
      {
        lat: 43.17576067743829,
        lon: -72.09327885128366
      }
    ],
    cu$: 11800,
    land$: 33000,
    owner: 'BURKE, LUKE A.',
    taxed$: 149300,
    usage: '110',
    use: 'R1'
  },
  '22-20': {
    address: '101 HALFMOON POND RD',
    area: 0.69,
    building$: 87100,
    centers: [
      {
        lat: 43.17537825645247,
        lon: -72.09295811036928
      }
    ],
    cu$: 1500,
    land$: 34800,
    owner: 'BRITT, ANDREW W',
    taxed$: 123400,
    usage: '110',
    use: 'R1'
  },
  '22-21': {
    address: '163 S MAIN ST',
    area: 5.5,
    building$: 115800,
    centers: [
      {
        lat: 43.174382716250896,
        lon: -72.09267046338091
      }
    ],
    cu$: 64400,
    land$: 52900,
    owner: 'DUCKER, MICHAEL R',
    taxed$: 233100,
    usage: '110',
    use: 'R1'
  },
  '22-25': {
    address: '94 HALFMOON POND RD',
    area: 0.11,
    building$: 33000,
    centers: [
      {
        lat: 43.175175493076516,
        lon: -72.09366243114954
      }
    ],
    cu$: 0,
    land$: 15100,
    owner: 'HARWOOD, GARY R',
    taxed$: 48100,
    usage: '110',
    use: 'R1'
  },
  '22-29': {
    address: '64 HALFMOON POND RD',
    area: 0.57,
    building$: 91100,
    centers: [
      {
        lat: 43.175507434968445,
        lon: -72.09512029751791
      }
    ],
    cu$: 1000,
    land$: 35700,
    owner: 'EDBERG, DENISE',
    taxed$: 127800,
    usage: '110',
    use: 'R1'
  },
  '22-31': {
    address: '11 CROSS RD',
    area: 0.3,
    building$: 61300,
    centers: [
      {
        lat: 43.17522488585319,
        lon: -72.09504928374919
      }
    ],
    cu$: 2200,
    land$: 25600,
    owner: 'JOHNSON SR, DALE L',
    taxed$: 89100,
    usage: '110',
    use: 'R1'
  },
  '22-32': {
    address: '127 S MAIN ST',
    area: 1,
    building$: 94200,
    centers: [
      {
        lat: 43.17401313625493,
        lon: -72.0932965153612
      }
    ],
    cu$: 5200,
    land$: 32800,
    owner: 'COLE, WILLIAM B',
    taxed$: 132200,
    usage: '110',
    use: 'R1'
  },
  '22-33': {
    address: '122 S MAIN ST',
    area: 1.25,
    building$: 82000,
    centers: [
      {
        lat: 43.17346940921203,
        lon: -72.0941571262789
      }
    ],
    cu$: 5200,
    land$: 36800,
    owner: 'LACKEY, SAVANNA G',
    taxed$: 124000,
    usage: '110',
    use: 'R1'
  },
  '22-36': {
    address: '56 SYMONDS LN',
    area: 8,
    building$: 198100,
    centers: [
      {
        lat: 43.173870270438776,
        lon: -72.09981104438944
      }
    ],
    cu$: 19100,
    land$: 31016,
    owner: 'BARKER, PHILIP A. & LINDA K. I',
    taxed$: 248216,
    usage: '110',
    use: 'R1'
  },
  '22-37': {
    address: '1 FAXON HILL RD',
    area: 0.5,
    building$: 123900,
    centers: [
      {
        lat: 43.17575324837644,
        lon: -72.09692574455693
      }
    ],
    cu$: 13300,
    land$: 30400,
    owner: 'BOYDEN, ROBERT',
    taxed$: 167600,
    usage: '110',
    use: 'R1'
  },
  '22-38': {
    address: '3 FAXON HILL RD',
    area: 2.4,
    building$: 133600,
    centers: [
      {
        lat: 43.1755782732256,
        lon: -72.09783523467398
      }
    ],
    cu$: 3000,
    land$: 34500,
    owner: 'GASKELL, JAMES L',
    taxed$: 171100,
    usage: '110',
    use: 'R1'
  },
  '22-39': {
    address: '37 SYMONDS LN',
    area: 1.59,
    building$: 86900,
    centers: [
      {
        lat: 43.17504390919505,
        lon: -72.09855708178767
      }
    ],
    cu$: 5200,
    land$: 33500,
    owner: 'BAUER, JOSEPHINE S',
    taxed$: 125600,
    usage: '110',
    use: 'R1'
  },
  '22-40': {
    address: '55 FAXON HILL RD',
    area: 0.2126,
    building$: 24400,
    centers: [
      {
        lat: 43.175735700558384,
        lon: -72.09895158764863
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'HOFFORD REVOC FAMILY TRUST',
    taxed$: 24400,
    usage: '110',
    use: 'R1'
  },
  '22-41': {
    address: '203 FAXON HILL RD',
    area: 27.7912,
    building$: 62200,
    centers: [
      {
        lat: 43.17353130446203,
        lon: -72.10222826079368
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'TELLIER, THOMAS E',
    taxed$: 62200,
    usage: '110',
    use: 'R1'
  },
  '22-52': {
    address: '2 FAXON HILL RD',
    area: 0.4,
    building$: 67800,
    centers: [
      {
        lat: 43.17633967147477,
        lon: -72.0975260831257
      }
    ],
    cu$: 6500,
    land$: 29600,
    owner: 'DEPOT, SCOTT RAYMOND',
    taxed$: 103900,
    usage: '110',
    use: 'R1'
  },
  '22-46': {
    address: '22 MILLEN POND RD',
    area: 3.23,
    building$: 110400,
    centers: [
      {
        lat: 43.17535740637876,
        lon: -72.10371844533802
      }
    ],
    cu$: 0,
    land$: 43800,
    owner: 'BARTLETT, WILLIAM J JR',
    taxed$: 154200,
    usage: '110',
    use: 'R1'
  },
  '22-49': {
    address: '1 OLD MARLOW RD',
    area: 2.83,
    building$: 114200,
    centers: [
      {
        lat: 43.17729664847364,
        lon: -72.10139254719462
      }
    ],
    cu$: 19700,
    land$: 36367,
    owner: 'STAPLETON, JOSEPH BRIAN',
    taxed$: 170267,
    usage: '110',
    use: 'R1'
  },
  '22-50': {
    address: '96 FAXON HILL RD',
    area: 1.72,
    building$: 64200,
    centers: [
      {
        lat: 43.17629710787577,
        lon: -72.10008360617353
      }
    ],
    cu$: 19800,
    land$: 37400,
    owner: 'MENDONSA, EMANUEL C',
    taxed$: 121400,
    usage: '110',
    use: 'R1'
  },
  '22-51': {
    address: '32 FAXON HILL RD',
    area: 0.27,
    building$: 113600,
    centers: [
      {
        lat: 43.17624308241216,
        lon: -72.09820097837672
      }
    ],
    cu$: 0,
    land$: 30100,
    owner: 'PARRIS, SCOTT J',
    taxed$: 143700,
    usage: '110',
    use: 'R1'
  },
  '22-54': {
    address: '29 N MAIN ST',
    area: 1.10908,
    building$: 141700,
    centers: [
      {
        lat: 43.17665775533755,
        lon: -72.09823421443323
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'CURRAN, RYAN',
    taxed$: 141700,
    usage: '260',
    use: 'CI'
  },
  '22-59': {
    address: '72 OLD MARLOW RD',
    area: 8.3,
    building$: 191900,
    centers: [
      {
        lat: 43.1796203604286,
        lon: -72.10364179096675
      }
    ],
    cu$: 22000,
    land$: 50900,
    owner: 'CHAUSEE, SCOTT J',
    taxed$: 264800,
    usage: '110',
    use: 'R1'
  },
  '22-61': {
    address: '150 LEMPSTER MOUNTAIN RD',
    area: 3.5,
    building$: 113800,
    centers: [
      {
        lat: 43.181007759311804,
        lon: -72.10281353729862
      }
    ],
    cu$: 9900,
    land$: 44300,
    owner: 'TWEEDY, MEGHAN',
    taxed$: 168000,
    usage: '110',
    use: 'R1'
  },
  '22-62': {
    address: '80 LEMPSTER MOUNTAIN RD',
    area: 3.67,
    building$: 72800,
    centers: [
      {
        lat: 43.17971015561605,
        lon: -72.10156548451594
      }
    ],
    cu$: 9900,
    land$: 44500,
    owner: 'CARLSON, ROGER M',
    taxed$: 127200,
    usage: '110',
    use: 'R1'
  },
  '22-63': {
    address: '173 N MAIN ST',
    area: 2.6,
    building$: 124400,
    centers: [
      {
        lat: 43.180180947639904,
        lon: -72.10098122352265
      }
    ],
    cu$: 14400,
    land$: 85800,
    owner: 'OTTE, KENDEL REVOCABLE TRUST',
    taxed$: 224600,
    usage: '260',
    use: 'CI'
  },
  '22-65': {
    address: '36 LEMPSTER MOUNTAIN RD',
    area: 0.5,
    building$: 121900,
    centers: [
      {
        lat: 43.1782646816553,
        lon: -72.10024234941412
      }
    ],
    cu$: 4500,
    land$: 32100,
    owner: 'CLARK, HUGH R.',
    taxed$: 158500,
    usage: '110',
    use: 'R1'
  },
  '22-66': {
    address: '28 LEMPSTER MOUNTAIN RD',
    area: 2,
    building$: 144100,
    centers: [
      {
        lat: 43.17811760931935,
        lon: -72.09956246686086
      }
    ],
    cu$: 36400,
    land$: 37800,
    owner: 'ANCTIL, ARMAND H JR',
    taxed$: 218300,
    usage: '110',
    use: 'R1'
  },
  '22-73': {
    address: '56 FAXON HILL RD',
    area: 0.12,
    building$: 57700,
    centers: [
      {
        lat: 43.176146457581794,
        lon: -72.09882470510625
      }
    ],
    cu$: 0,
    land$: 19800,
    owner: 'MITCHELL, DIANE A',
    taxed$: 77500,
    usage: '110',
    use: 'R1'
  },
  '23-2': {
    address: '105 BRADFORD SPRINGS RD',
    area: 1,
    building$: 116200,
    centers: [
      {
        lat: 43.19413107189369,
        lon: -72.02043152249233
      }
    ],
    cu$: 4800,
    land$: 44600,
    owner: 'MCNEILL, KENNETH',
    taxed$: 165600,
    usage: '110',
    use: 'R1'
  },
  '23-3': {
    address: '85 BRADFORD SPRINGS RD',
    area: 1,
    building$: 150700,
    centers: [
      {
        lat: 43.193419039000034,
        lon: -72.02023211740381
      }
    ],
    cu$: 13600,
    land$: 44600,
    owner: 'FALLON FAMILY REV TRUST',
    taxed$: 208900,
    usage: '110',
    use: 'R1'
  },
  '23-4': {
    address: '43 BRADFORD SPRINGS RD',
    area: 3,
    building$: 143000,
    centers: [
      {
        lat: 43.19241416841661,
        lon: -72.02003851923709
      }
    ],
    cu$: 0,
    land$: 47900,
    owner: 'TAYLOR, NATHANIEL L LIVING TRU',
    taxed$: 190900,
    usage: '110',
    use: 'R1'
  },
  '23-7': {
    address: '28 BRADFORD SPRINGS RD',
    area: 1.5,
    building$: 151500,
    centers: [
      {
        lat: 43.19202226001556,
        lon: -72.01859946177584
      }
    ],
    cu$: 1900,
    land$: 45400,
    owner: 'CLEGG, JOHN J.',
    taxed$: 198800,
    usage: '110',
    use: 'R1'
  },
  '23-8': {
    address: '34 BRADFORD SPRINGS RD',
    area: 1,
    building$: 106900,
    centers: [
      {
        lat: 43.19248299960147,
        lon: -72.0186301239003
      }
    ],
    cu$: 2000,
    land$: 44600,
    owner: 'DAVIS, LISA M.',
    taxed$: 153500,
    usage: '110',
    use: 'R1'
  },
  '23-9': {
    address: '48 BRADFORD SPRINGS RD',
    area: 3,
    building$: 174000,
    centers: [
      {
        lat: 43.192993633718295,
        lon: -72.01884507518781
      }
    ],
    cu$: 25300,
    land$: 43100,
    owner: 'WATERMAN, PETER',
    taxed$: 242400,
    usage: '110',
    use: 'R1'
  },
  '23-52': {
    address: '2485 E WASHINGTON RD',
    area: 0.5,
    building$: 144200,
    centers: [
      {
        lat: 43.19201693821838,
        lon: -72.02711393283312
      }
    ],
    cu$: 1500,
    land$: 41300,
    owner: 'ROBINSON, SANDRA J REV TRUST',
    taxed$: 187000,
    usage: '110',
    use: 'R1'
  },
  '23-10': {
    address: '142 BRADFORD SPRINGS RD',
    area: 6,
    building$: 119600,
    centers: [
      {
        lat: 43.19405087839591,
        lon: -72.01910223087116
      }
    ],
    cu$: 18300,
    land$: 47600,
    owner: 'BRYANT, EDWARD R.',
    taxed$: 185500,
    usage: '110',
    use: 'R1'
  },
  '23-14': {
    address: '23 OLD HILLSBOROUGH RD',
    area: 1,
    building$: 105400,
    centers: [
      {
        lat: 43.19104304019668,
        lon: -72.01689976346097
      }
    ],
    cu$: 11600,
    land$: 40500,
    owner: 'DONAHUE, CAROLE A',
    taxed$: 157500,
    usage: '110',
    use: 'R1'
  },
  '23-15': {
    address: '11 OLD HILLSBOROUGH RD',
    area: 2.7,
    building$: 134000,
    centers: [
      {
        lat: 43.191039485660234,
        lon: -72.01744138786565
      }
    ],
    cu$: 0,
    land$: 43100,
    owner: 'DONAHUE, CAROLE A 2004 TRUST',
    taxed$: 177100,
    usage: '110',
    use: 'R1'
  },
  '23-16': {
    address: '2232 E WASHINGTON RD',
    area: 0.5,
    building$: 139200,
    centers: [
      {
        lat: 43.19087937942019,
        lon: -72.0181320390259
      }
    ],
    cu$: 9700,
    land$: 41300,
    owner: 'DONAHUE, CAROLE A 2004 TRUST',
    taxed$: 190200,
    usage: '110',
    use: 'R1'
  },
  '23-17': {
    address: '2230 E WASHINGTON RD',
    area: 0.49,
    building$: 113700,
    centers: [
      {
        lat: 43.19094304402877,
        lon: -72.01865597666882
      }
    ],
    cu$: 8700,
    land$: 53600,
    owner: 'GILMAN, CHARLES A',
    taxed$: 176000,
    usage: '110',
    use: 'R1'
  },
  '23-18': {
    address: '2234 E WASHINGTON RD',
    area: 0.89504,
    building$: 54700,
    centers: [
      {
        lat: 43.191347052576866,
        lon: -72.01803927779117
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'EAST WASHINGTON BAPTIST CHURCH',
    taxed$: 54700,
    usage: '260',
    use: 'CI'
  },
  '23-20': {
    address: '2184 E WASHINGTON RD',
    area: 0.92,
    building$: 159000,
    centers: [
      {
        lat: 43.19052093106863,
        lon: -72.01644433691595
      }
    ],
    cu$: 11900,
    land$: 39600,
    owner: 'DONAHUE, CAROLE A 2004 TRUST',
    taxed$: 210500,
    usage: '110',
    use: 'R1'
  },
  '23-21': {
    address: '52 OLD HILLSBOROUGH RD',
    area: 1.77,
    building$: 112700,
    centers: [
      {
        lat: 43.19031831494996,
        lon: -72.0149212091066
      }
    ],
    cu$: 10200,
    land$: 41700,
    owner: 'FACCHINA, BAZIL T',
    taxed$: 164600,
    usage: '110',
    use: 'R1'
  },
  '23-22': {
    address: '2146 E WASHINGTON RD',
    area: 0.3,
    building$: 126000,
    centers: [
      {
        lat: 43.19007924018679,
        lon: -72.01536480005892
      }
    ],
    cu$: 600,
    land$: 33700,
    owner: 'NIMS, ADAM M.',
    taxed$: 160300,
    usage: '110',
    use: 'R1'
  },
  '23-23': {
    address: '2128 E WASHINGTON RD',
    area: 0.5,
    building$: 70600,
    centers: [
      {
        lat: 43.18986373703112,
        lon: -72.01477698016227
      }
    ],
    cu$: 2900,
    land$: 33800,
    owner: 'ROY, RONALD E',
    taxed$: 107300,
    usage: '110',
    use: 'R1'
  },
  '23-24': {
    address: '2114 E WASHINGTON RD',
    area: 0.17,
    building$: 120300,
    centers: [
      {
        lat: 43.18965491428293,
        lon: -72.01438081731189
      }
    ],
    cu$: 1500,
    land$: 24300,
    owner: 'HOEHN, JANICE L',
    taxed$: 146100,
    usage: '110',
    use: 'R1'
  },
  '23-25': {
    address: '2110 E WASHINGTON RD',
    area: 4.6,
    building$: 247300,
    centers: [
      {
        lat: 43.190025809557156,
        lon: -72.01415313941979
      }
    ],
    cu$: 23400,
    land$: 43700,
    owner: 'HARVEY, GREIG',
    taxed$: 314400,
    usage: '110',
    use: 'R1'
  },
  '23-27': {
    address: '2072 E WASHINGTON RD',
    area: 2,
    building$: 0,
    centers: [
      {
        lat: 43.18915600172917,
        lon: -72.01257174084257
      }
    ],
    cu$: 0,
    land$: 37800,
    owner: 'HARVEY, ELIZABETH DEAKIN',
    taxed$: 37800,
    usage: '110',
    use: 'R1'
  },
  '23-28': {
    address: '2046 E WASHINGTON RD',
    area: 2,
    building$: 135200,
    centers: [
      {
        lat: 43.188429403212524,
        lon: -72.01196893806214
      }
    ],
    cu$: 8100,
    land$: 42000,
    owner: 'HOLMES, VICKI L',
    taxed$: 185300,
    usage: '110',
    use: 'R1'
  },
  '23-35': {
    address: '43 BEAR HILL RD',
    area: 6.62,
    building$: 376600,
    centers: [
      {
        lat: 43.18906371698744,
        lon: -72.0162268693511
      }
    ],
    cu$: 2500,
    land$: 48500,
    owner: 'COSTELLO, ANTHONY T',
    taxed$: 427600,
    usage: '110',
    use: 'R1'
  },
  '23-38': {
    address: '54 BEAR HILL RD',
    area: 2.56,
    building$: 108100,
    centers: [
      {
        lat: 43.18906154940407,
        lon: -72.0202668153507
      }
    ],
    cu$: 22700,
    land$: 52100,
    owner: 'SCHWARTZ REV FAM TRUST',
    taxed$: 182900,
    usage: '110',
    use: 'R1'
  },
  '23-42': {
    address: '116 PURLING BECK RD',
    area: 4.1,
    building$: 0,
    centers: [
      {
        lat: 43.188834826685984,
        lon: -72.02351443702139
      }
    ],
    cu$: 0,
    land$: 34900,
    owner: 'VANYPEREN, JAMES',
    taxed$: 34900,
    usage: '110',
    use: 'R1'
  },
  '23-43': {
    address: '2093 E WASHINGTON RD',
    area: 33.26,
    building$: 168300,
    centers: [
      {
        lat: 43.18764480537784,
        lon: -72.01405021653852
      }
    ],
    cu$: 19800,
    land$: 60417,
    owner: 'CASHORALI, NICHOLAS T.',
    taxed$: 248517,
    usage: '110',
    use: 'R1'
  },
  '23-44': {
    address: '116 PURLING BECK RD',
    area: 1.8,
    building$: 231500,
    centers: [
      {
        lat: 43.189847649747435,
        lon: -72.02362940714627
      }
    ],
    cu$: 48600,
    land$: 50900,
    owner: 'VANYPEREN, JAMES',
    taxed$: 331000,
    usage: '110',
    use: 'R1'
  },
  '23-45': {
    address: '66 PURLING BECK RD',
    area: 10.4,
    building$: 171500,
    centers: [
      {
        lat: 43.189491730600594,
        lon: -72.0210071050388
      },
      {
        lat: 43.190211306420224,
        lon: -72.02185468308751
      }
    ],
    cu$: 17400,
    land$: 63600,
    owner: 'SCHWARTZ REV FAM TRUST',
    taxed$: 252500,
    usage: '110',
    use: 'R1'
  },
  '23-48': {
    address: '2291 E WASHINGTON RD',
    area: 1.47,
    building$: 230600,
    centers: [
      {
        lat: 43.19125442297403,
        lon: -72.02008303400257
      }
    ],
    cu$: 3000,
    land$: 49900,
    owner: 'QUATTROCHI, JOSEPH C',
    taxed$: 283500,
    usage: '110',
    use: 'R1'
  },
  '24-7': {
    address: '1234 VALLEY RD',
    area: 0.41,
    building$: 49000,
    centers: [
      {
        lat: 43.143774635847706,
        lon: -72.09596060053848
      }
    ],
    cu$: 3900,
    land$: 36600,
    owner: 'GUAY, RODNEY',
    taxed$: 89500,
    usage: '110',
    use: 'R1'
  },
  '23-50': {
    address: '2381 E WASHINGTON RD',
    area: 7.5,
    building$: 189700,
    centers: [
      {
        lat: 43.1913954956845,
        lon: -72.022315218059
      }
    ],
    cu$: 6700,
    land$: 67200,
    owner: 'PERSECHINO, DANIEL L. AND REBE',
    taxed$: 263600,
    usage: '110',
    use: 'R1'
  },
  '23-53': {
    address: '146 PURLING BECK RD',
    area: 12.2,
    building$: 43800,
    centers: [
      {
        lat: 43.18972858915252,
        lon: -72.02514800923382
      }
    ],
    cu$: 15800,
    land$: 74073,
    owner: 'CUMMINGS, MARK A',
    taxed$: 133673,
    usage: '110',
    use: 'R1'
  },
  '23-55': {
    address: '178 BRADFORD SPRINGS RD',
    area: 5.02,
    building$: 98600,
    centers: [
      {
        lat: 43.1949578420123,
        lon: -72.01794732452453
      }
    ],
    cu$: 1200,
    land$: 44872,
    owner: 'MACDONALD, ADAM T',
    taxed$: 144672,
    usage: '110',
    use: 'R1'
  },
  '23-57': {
    address: '2236 E WASHINGTON RD',
    area: 1,
    building$: 84700,
    centers: [
      {
        lat: 43.1915142780669,
        lon: -72.01869182061603
      }
    ],
    cu$: 15800,
    land$: 44600,
    owner: 'MORSE, PAULA  A',
    taxed$: 145100,
    usage: '110',
    use: 'R1'
  },
  '23-58': {
    address: '143 BEAR HILL RD',
    area: 5.1,
    building$: 66200,
    centers: [
      {
        lat: 43.186319944512896,
        lon: -72.02041733015528
      }
    ],
    cu$: 31500,
    land$: 51700,
    owner: 'HEAVY-LEEDHAM RECREATION TRUST',
    taxed$: 149400,
    usage: '110',
    use: 'R1'
  },
  '24-3': {
    address: '1170 VALLEY RD',
    area: 0.72,
    building$: 48800,
    centers: [
      {
        lat: 43.14441834621464,
        lon: -72.0980668334367
      }
    ],
    cu$: 2000,
    land$: 43800,
    owner: 'HALL, MICHAEL P',
    taxed$: 94600,
    usage: '110',
    use: 'R1A'
  },
  '24-6': {
    address: '1224 VALLEY RD',
    area: 0.96,
    building$: 26300,
    centers: [
      {
        lat: 43.14399570575319,
        lon: -72.09632536030313
      }
    ],
    cu$: 0,
    land$: 40300,
    owner: 'CURRAN, JAMES M',
    taxed$: 66600,
    usage: '110',
    use: 'R1A'
  },
  '24-24': {
    address: '1358 VALLEY RD',
    area: 0.42,
    building$: 30700,
    centers: [
      {
        lat: 43.14344952320711,
        lon: -72.09234447127301
      }
    ],
    cu$: 4100,
    land$: 25700,
    owner: 'SWANSON, ROBERT A.',
    taxed$: 60500,
    usage: '110',
    use: 'R1A'
  },
  '24-8': {
    address: '1238 VALLEY RD',
    area: 1.23,
    building$: 140700,
    centers: [
      {
        lat: 43.14357680849455,
        lon: -72.09560171069305
      }
    ],
    cu$: 9300,
    land$: 40800,
    owner: 'SOMERO, KATELYNN',
    taxed$: 190800,
    usage: '110',
    use: 'R1A'
  },
  '24-13': {
    address: '1199 VALLEY RD',
    area: 0.64,
    building$: 121400,
    centers: [
      {
        lat: 43.14496006902462,
        lon: -72.09676383710946
      }
    ],
    cu$: 0,
    land$: 38300,
    owner: 'DREW, KELLIE L. & SCOTT A. JR.',
    taxed$: 159700,
    usage: '110',
    use: 'R1A'
  },
  '24-14': {
    address: '1207 VALLEY RD',
    area: 0.42,
    building$: 23400,
    centers: [
      {
        lat: 43.144907435333124,
        lon: -72.09629538332456
      }
    ],
    cu$: 0,
    land$: 36700,
    owner: 'JUDKINS, EVERETT M & JEAN D',
    taxed$: 60100,
    usage: '110',
    use: 'R1A'
  },
  '24-15': {
    address: '1219 VALLEY RD',
    area: 0.58,
    building$: 105900,
    centers: [
      {
        lat: 43.14462375448302,
        lon: -72.09591156205984
      }
    ],
    cu$: 15500,
    land$: 38000,
    owner: 'SILVA, JOHN M',
    taxed$: 159400,
    usage: '110',
    use: 'R1A'
  },
  '24-16': {
    address: '1243 VALLEY RD',
    area: 0.27,
    building$: 0,
    centers: [
      {
        lat: 43.14436511824731,
        lon: -72.09531937978946
      }
    ],
    cu$: 0,
    land$: 28200,
    owner: 'HESELTON, HAROLD E',
    taxed$: 28200,
    usage: '110',
    use: 'R1A'
  },
  '24-18': {
    address: '1278 VALLEY RD',
    area: 2.41,
    building$: 86700,
    centers: [
      {
        lat: 43.14304021315252,
        lon: -72.09449648665485
      }
    ],
    cu$: 900,
    land$: 42600,
    owner: 'GRIFFIN, THOMAS J',
    taxed$: 130200,
    usage: '110',
    use: 'R1A'
  },
  '24-19': {
    address: '1292 VALLEY RD',
    area: 0.98,
    building$: 62900,
    centers: [
      {
        lat: 43.143286049502436,
        lon: -72.09357757305737
      }
    ],
    cu$: 12100,
    land$: 40400,
    owner: 'PUTNAM, MARTIN G',
    taxed$: 115400,
    usage: '110',
    use: 'R1'
  },
  '24-25': {
    address: '1362 VALLEY RD',
    area: 0.23,
    building$: 0,
    centers: [
      {
        lat: 43.14324466446881,
        lon: -72.09219262702334
      }
    ],
    cu$: 0,
    land$: 13200,
    owner: 'WILLIAMS, JOHN J',
    taxed$: 13200,
    usage: '110',
    use: 'R1A'
  },
  '24-27': {
    address: '1372 VALLEY RD',
    area: 0.47,
    building$: 102300,
    centers: [
      {
        lat: 43.142857691801595,
        lon: -72.09200169750812
      }
    ],
    cu$: 0,
    land$: 37200,
    owner: 'FITZGERALD, RANDY H',
    taxed$: 139500,
    usage: '110',
    use: 'R1'
  },
  '24-30': {
    address: '1394 VALLEY RD',
    area: 0.62,
    building$: 57500,
    centers: [
      {
        lat: 43.14237458253194,
        lon: -72.09182279588988
      }
    ],
    cu$: 18700,
    land$: 38200,
    owner: 'TAPP, JOSEPH A',
    taxed$: 114400,
    usage: '110',
    use: 'R1A'
  },
  '24-31': {
    address: '1406 VALLEY RD',
    area: 0.2,
    building$: 60400,
    centers: [
      {
        lat: 43.142137414244395,
        lon: -72.09175056058336
      }
    ],
    cu$: 9100,
    land$: 27000,
    owner: 'PIPER, TIMOTHY S',
    taxed$: 96500,
    usage: '110',
    use: 'R1A'
  },
  '24-37': {
    address: '1509 VALLEY RD',
    area: 0.78,
    building$: 37700,
    centers: [
      {
        lat: 43.139434240344734,
        lon: -72.09136739079106
      }
    ],
    cu$: 9600,
    land$: 35300,
    owner: 'ADKINS, ROBERT T',
    taxed$: 82600,
    usage: '110',
    use: 'R1A'
  },
  '24-39': {
    address: '1547 VALLEY RD',
    area: 0.6,
    building$: 70900,
    centers: [
      {
        lat: 43.139007945245616,
        lon: -72.09126204761095
      }
    ],
    cu$: 13500,
    land$: 38100,
    owner: 'BRAYFIELD, JEFFERY C',
    taxed$: 122500,
    usage: '110',
    use: 'R1A'
  },
  '24-40': {
    address: '1561 VALLEY RD',
    area: 1.62,
    building$: 40700,
    centers: [
      {
        lat: 43.1390194816929,
        lon: -72.09029894439846
      }
    ],
    cu$: 1500,
    land$: 41400,
    owner: 'MACINTYRE,KEVIN S',
    taxed$: 83600,
    usage: '110',
    use: 'R1A'
  },
  '24-58': {
    address: '46 LOOKOUT POINT RD',
    area: 0.13,
    building$: 40500,
    centers: [
      {
        lat: 43.14052565422369,
        lon: -72.08820158769373
      }
    ],
    cu$: 4300,
    land$: 160700,
    owner: 'COTE IRREVOCABLE TRUST',
    taxed$: 205500,
    usage: '110',
    use: 'R1W'
  },
  '25-70': {
    address: '2120 VALLEY RD',
    area: 0.27,
    building$: 51900,
    centers: [
      {
        lat: 43.13128490407269,
        lon: -72.08532645478601
      }
    ],
    cu$: 4200,
    land$: 35200,
    owner: 'CLOUTIER, PAUL R.',
    taxed$: 91300,
    usage: '110',
    use: 'R1'
  },
  '24-59': {
    address: '38 LOOKOUT POINT RD',
    area: 0.11,
    building$: 59200,
    centers: [
      {
        lat: 43.14050918895522,
        lon: -72.08787661446917
      }
    ],
    cu$: 0,
    land$: 158900,
    owner: 'MENSH, ERIC & WENDY JOINT REV ',
    taxed$: 218100,
    usage: '110',
    use: 'R1W'
  },
  '24-64': {
    address: '18 LOOKOUT POINT RD',
    area: 0.18,
    building$: 26600,
    centers: [
      {
        lat: 43.1400422604336,
        lon: -72.08700221677722
      }
    ],
    cu$: 5800,
    land$: 160200,
    owner: 'HABESHIAN, ALICIA MARIE',
    taxed$: 192600,
    usage: '110',
    use: 'R1W'
  },
  '24-67': {
    address: '1445 VALLEY RD',
    area: 2.51635,
    building$: 104000,
    centers: [
      {
        lat: 43.14128792599162,
        lon: -72.09102474698722
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'GUYER, DALE J',
    taxed$: 104000,
    usage: '110',
    use: 'R1W'
  },
  '24-77': {
    address: '84 LAKEVIEW TER',
    area: 0.51,
    building$: 52300,
    centers: [
      {
        lat: 43.14372268752806,
        lon: -72.09045621621857
      }
    ],
    cu$: 29800,
    land$: 195000,
    owner: 'JANCO FAMILY WASHINGTON TRUST',
    taxed$: 277100,
    usage: '110',
    use: 'R1W'
  },
  '24-78': {
    address: '1361 VALLEY RD',
    area: 3.3,
    building$: 154000,
    centers: [
      {
        lat: 43.14316147887497,
        lon: -72.09112867589288
      }
    ],
    cu$: 18000,
    land$: 149000,
    owner: 'CORDEIRO, PAUL',
    taxed$: 321000,
    usage: '110',
    use: 'R1W'
  },
  '25-24': {
    address: '1750 VALLEY RD',
    area: 0.63,
    building$: 128600,
    centers: [
      {
        lat: 43.13726992750596,
        lon: -72.08682512610883
      }
    ],
    cu$: 0,
    land$: 38300,
    owner: 'FEIGHERY, KIMBERLY ANN',
    taxed$: 166900,
    usage: '110',
    use: 'R1A'
  },
  '24-84': {
    address: '52 BEECH WAY',
    area: 0.46,
    building$: 75200,
    centers: [
      {
        lat: 43.14444874298351,
        lon: -72.0908286576969
      }
    ],
    cu$: 3300,
    land$: 158700,
    owner: 'MCFEE, RICHARD D',
    taxed$: 237200,
    usage: '110',
    use: 'R1W'
  },
  '24-86': {
    address: '54 BEECH WAY',
    area: 0.26,
    building$: 22500,
    centers: [
      {
        lat: 43.14460510558443,
        lon: -72.09054662335944
      }
    ],
    cu$: 5200,
    land$: 157500,
    owner: 'MCFEE, RICHARD D.',
    taxed$: 185200,
    usage: '110',
    use: 'R1W'
  },
  '24-87': {
    address: '66 BEECH WAY',
    area: 0.81,
    building$: 127800,
    centers: [
      {
        lat: 43.14484224148673,
        lon: -72.09026061793563
      }
    ],
    cu$: 2700,
    land$: 201500,
    owner: 'HOCEVAR, DAVID A',
    taxed$: 332000,
    usage: '110',
    use: 'R1W'
  },
  '24-93': {
    address: '62 BIRCH POINT WAY',
    area: 0.93,
    building$: 110000,
    centers: [
      {
        lat: 43.14602704494952,
        lon: -72.09022748970806
      }
    ],
    cu$: 36200,
    land$: 247100,
    owner: 'PEABODY, C & B REVC TRUST',
    taxed$: 393300,
    usage: '110',
    use: 'R1'
  },
  '24-107': {
    address: '92 COVE RD',
    area: 0.54,
    building$: 112700,
    centers: [
      {
        lat: 43.14659911966629,
        lon: -72.09225040547396
      }
    ],
    cu$: 1500,
    land$: 209200,
    owner: 'LANGTRY REVOCABLE TRUST, R & C',
    taxed$: 323400,
    usage: '110',
    use: 'R1W'
  },
  '24-121': {
    address: '93 COVE RD',
    area: 0.51,
    building$: 84400,
    centers: [
      {
        lat: 43.146039338855246,
        lon: -72.09257040061323
      }
    ],
    cu$: 23700,
    land$: 27000,
    owner: 'DEVINE, CAROLE AND JAMES',
    taxed$: 135100,
    usage: '110',
    use: 'R1A'
  },
  '24-114': {
    address: '188 COVE RD',
    area: 0.6,
    building$: 90600,
    centers: [
      {
        lat: 43.14820796585147,
        lon: -72.09326991621299
      }
    ],
    cu$: 7700,
    land$: 180500,
    owner: 'WRIGHTSON, DAVID MALCOLM',
    taxed$: 278800,
    usage: '110',
    use: 'R1W'
  },
  '24-138': {
    address: '11 COVE RD',
    area: 23.5,
    building$: 92900,
    centers: [
      {
        lat: 43.145366545962816,
        lon: -72.09449230025302
      }
    ],
    cu$: 3000,
    land$: 34162,
    owner: 'GRANT, JARED R',
    taxed$: 130062,
    usage: '110',
    use: 'R1A'
  },
  '25-1': {
    address: '1538 VALLEY RD',
    area: 1.17,
    building$: 74200,
    centers: [
      {
        lat: 43.13834744123253,
        lon: -72.09183290276798
      }
    ],
    cu$: 1200,
    land$: 40800,
    owner: 'FRAZIER, WILLIAM J',
    taxed$: 116200,
    usage: '110',
    use: 'R1A'
  },
  '25-2': {
    address: '1548 VALLEY RD',
    area: 0.24,
    building$: 52600,
    centers: [
      {
        lat: 43.13847721777968,
        lon: -72.091331994796
      }
    ],
    cu$: 1300,
    land$: 34000,
    owner: 'ALLEN, CHARLES',
    taxed$: 87900,
    usage: '110',
    use: 'R1A'
  },
  '25-5': {
    address: '1578 VALLEY RD',
    area: 0.21,
    building$: 85200,
    centers: [
      {
        lat: 43.13832837797284,
        lon: -72.09019964983906
      }
    ],
    cu$: 800,
    land$: 31000,
    owner: 'CORDEIRO, JEAN TRUST OF 2005',
    taxed$: 117000,
    usage: '110',
    use: 'R1A'
  },
  '25-7': {
    address: '1600 VALLEY RD',
    area: 0.41,
    building$: 18700,
    centers: [
      {
        lat: 43.138292425884906,
        lon: -72.0893904201339
      }
    ],
    cu$: 2800,
    land$: 29300,
    owner: 'LABOMBARD, MICHAEL',
    taxed$: 50800,
    usage: '110',
    use: 'R1A'
  },
  '25-12': {
    address: '1700 VALLEY RD',
    area: 0.92,
    building$: 74400,
    centers: [
      {
        lat: 43.13883965363955,
        lon: -72.08739102119092
      }
    ],
    cu$: 44900,
    land$: 40000,
    owner: 'CHICOINE, GEORGE F',
    taxed$: 159300,
    usage: '110',
    use: 'R1A'
  },
  '25-13': {
    address: '1704 VALLEY RD',
    area: 0.47,
    building$: 19300,
    centers: [
      {
        lat: 43.13817229763383,
        lon: -72.087183775868
      }
    ],
    cu$: 28400,
    land$: 37200,
    owner: 'CHICOINE, ROGER G. JR & ANGELA',
    taxed$: 84900,
    usage: '110',
    use: 'R1A'
  },
  '25-21': {
    address: '1736 VALLEY RD',
    area: 0.67,
    building$: 88800,
    centers: [
      {
        lat: 43.13749925243683,
        lon: -72.08713167962658
      }
    ],
    cu$: 0,
    land$: 38500,
    owner: 'MCQUADE, GERALDINE SUE TRUST',
    taxed$: 127300,
    usage: '110',
    use: 'R1A'
  },
  '25-26': {
    address: '1788 VALLEY RD',
    area: 0.69,
    building$: 96900,
    centers: [
      {
        lat: 43.13645151903822,
        lon: -72.08705239372475
      }
    ],
    cu$: 1200,
    land$: 38600,
    owner: 'MILLETTE, MICHAEL L',
    taxed$: 136700,
    usage: '110',
    use: 'R1A'
  },
  '25-33': {
    address: '1892 VALLEY RD',
    area: 0.66,
    building$: 94600,
    centers: [
      {
        lat: 43.1341100700406,
        lon: -72.08916073076333
      }
    ],
    cu$: 7100,
    land$: 38500,
    owner: 'KIROVAC, MARC',
    taxed$: 140200,
    usage: '110',
    use: 'R1A'
  },
  '25-37': {
    address: '2042 VALLEY RD',
    area: 0.56,
    building$: 74700,
    centers: [
      {
        lat: 43.130232930554065,
        lon: -72.08779599308798
      }
    ],
    cu$: 2100,
    land$: 37900,
    owner: 'LUONGO, ALICIA A',
    taxed$: 114700,
    usage: '110',
    use: 'R1A'
  },
  '25-39': {
    address: '2050 VALLEY RD',
    area: 1.73,
    building$: 119900,
    centers: [
      {
        lat: 43.129867842138054,
        lon: -72.08695322742506
      }
    ],
    cu$: 0,
    land$: 41600,
    owner: 'MELLETT, KEVIN F',
    taxed$: 161500,
    usage: '110',
    use: 'R1A'
  },
  '25-47': {
    address: '2181 VALLEY RD',
    area: 0.24,
    building$: 59100,
    centers: [
      {
        lat: 43.13027395560721,
        lon: -72.08410620993888
      }
    ],
    cu$: 3700,
    land$: 165600,
    owner: 'MORWAY, ELIZABETH A',
    taxed$: 228400,
    usage: '110',
    use: 'R1W'
  },
  '25-48': {
    address: '2171 VALLEY RD',
    area: 0.25,
    building$: 67500,
    centers: [
      {
        lat: 43.13039993337016,
        lon: -72.08403392186403
      }
    ],
    cu$: 7500,
    land$: 170000,
    owner: 'STANTON, JOHN F',
    taxed$: 245000,
    usage: '110',
    use: 'R1W'
  },
  '25-50': {
    address: '2163 VALLEY RD',
    area: 0.23,
    building$: 111300,
    centers: [
      {
        lat: 43.130657983182026,
        lon: -72.0838753019442
      }
    ],
    cu$: 9100,
    land$: 173000,
    owner: 'AMARI FAMILY TRUST',
    taxed$: 293400,
    usage: '110',
    use: 'R1W'
  },
  '25-52': {
    address: '2157 VALLEY RD',
    area: 0.41,
    building$: 15800,
    centers: [
      {
        lat: 43.130832451932044,
        lon: -72.0837924449349
      }
    ],
    cu$: 19500,
    land$: 186600,
    owner: 'AMARI, SHELLEY',
    taxed$: 221900,
    usage: '110',
    use: 'R1W'
  },
  '25-55': {
    address: '2143 VALLEY RD',
    area: 0.34,
    building$: 85300,
    centers: [
      {
        lat: 43.131391679975664,
        lon: -72.08400509772493
      }
    ],
    cu$: 24200,
    land$: 195900,
    owner: 'MAYBURY, JOHN F',
    taxed$: 305400,
    usage: '110',
    use: 'R1W'
  },
  '25-58': {
    address: '2123 VALLEY RD',
    area: 0.46,
    building$: 62100,
    centers: [
      {
        lat: 43.1318851360689,
        lon: -72.0850907369084
      }
    ],
    cu$: 7200,
    land$: 222100,
    owner: 'BEEBIE, KAREN FAMILY TRUST',
    taxed$: 291400,
    usage: '110',
    use: 'R1W'
  },
  '25-60': {
    address: '2115 VALLEY RD',
    area: 0.19,
    building$: 56600,
    centers: [
      {
        lat: 43.131748227771126,
        lon: -72.08563150119038
      }
    ],
    cu$: 800,
    land$: 144000,
    owner: 'CROMBIE, FREDERICK C III REV T',
    taxed$: 201400,
    usage: '110',
    use: 'R1W'
  },
  '25-63': {
    address: '2105 VALLEY RD',
    area: 0.17,
    building$: 59200,
    centers: [
      {
        lat: 43.1314985858488,
        lon: -72.08604462348424
      }
    ],
    cu$: 1000,
    land$: 142000,
    owner: 'ASHWORTH, CHRISTINE',
    taxed$: 202200,
    usage: '110',
    use: 'R1W'
  },
  '25-64': {
    address: '2097 VALLEY RD',
    area: 0.48,
    building$: 68100,
    centers: [
      {
        lat: 43.131319716059814,
        lon: -72.08630254088655
      }
    ],
    cu$: 5400,
    land$: 177300,
    owner: 'MEADE, MICHAEL',
    taxed$: 250800,
    usage: '110',
    use: 'R1'
  },
  '25-65': {
    address: '2081 VALLEY RD',
    area: 0.46,
    building$: 59400,
    centers: [
      {
        lat: 43.13103110040666,
        lon: -72.0866286015221
      }
    ],
    cu$: 10000,
    land$: 177100,
    owner: 'PELTON, THOMAS W',
    taxed$: 246500,
    usage: '110',
    use: 'R1W'
  },
  '25-66': {
    address: '2080 VALLEY RD',
    area: 0.21,
    building$: 30700,
    centers: [
      {
        lat: 43.130635060224236,
        lon: -72.0861974857967
      }
    ],
    cu$: 1900,
    land$: 27900,
    owner: 'GIRARD, CHRISTINE',
    taxed$: 60500,
    usage: '110',
    use: 'R1A'
  },
  '25-71': {
    address: '2134 VALLEY RD',
    area: 0.34,
    building$: 65400,
    centers: [
      {
        lat: 43.13115667598215,
        lon: -72.08505528561639
      }
    ],
    cu$: 1700,
    land$: 35900,
    owner: 'LOFGREN, GREGORY',
    taxed$: 103000,
    usage: '110',
    use: 'R1A'
  },
  '25-77': {
    address: '58 HEMLOCK DR',
    area: 0.23,
    building$: 79200,
    centers: [
      {
        lat: 43.130996744957386,
        lon: -72.08469749754941
      }
    ],
    cu$: 1100,
    land$: 33000,
    owner: 'CROUSS, TIMOTHY K',
    taxed$: 113300,
    usage: '110',
    use: 'R1A'
  },
  '25-78': {
    address: '2154 VALLEY RD',
    area: 0.21,
    building$: 64000,
    centers: [
      {
        lat: 43.13086174873764,
        lon: -72.08457012262784
      }
    ],
    cu$: 1800,
    land$: 31000,
    owner: 'LAVOIE, DANIEL',
    taxed$: 96800,
    usage: '110',
    use: 'R1A'
  },
  '25-83-02': {
    address: '2041 VALLEY RD',
    area: 0.36,
    building$: 78200,
    centers: [
      {
        lat: 43.130737319803856,
        lon: -72.08761717929968
      }
    ],
    cu$: 0,
    land$: 34300,
    owner: 'BONACCORSI, PETER M.',
    taxed$: 112500,
    usage: '110',
    use: 'R1A'
  },
  '25-86': {
    address: '2005 VALLEY RD',
    area: 0.34,
    building$: 55600,
    centers: [
      {
        lat: 43.13121006386944,
        lon: -72.08827969335412
      }
    ],
    cu$: 0,
    land$: 165900,
    owner: 'LANE, JAMES E',
    taxed$: 221500,
    usage: '110',
    use: 'R1W'
  },
  '25-87': {
    address: '1993 VALLEY RD',
    area: 0.37,
    building$: 26500,
    centers: [
      {
        lat: 43.13146492115784,
        lon: -72.088703505551
      }
    ],
    cu$: 0,
    land$: 189000,
    owner: 'MACDONALD, ROBIN',
    taxed$: 215500,
    usage: '110',
    use: 'R1'
  },
  '25-90': {
    address: '1949 VALLEY RD',
    area: 1.46,
    building$: 115900,
    centers: [
      {
        lat: 43.13250995779288,
        lon: -72.08889327434399
      }
    ],
    cu$: 2100,
    land$: 196200,
    owner: 'KARPOWSKI JR,THOMAS',
    taxed$: 314200,
    usage: '110',
    use: 'R1'
  },
  '25-91': {
    address: '1927 VALLEY RD',
    area: 0.96,
    building$: 103800,
    centers: [
      {
        lat: 43.13297243925935,
        lon: -72.0885386938456
      }
    ],
    cu$: 4700,
    land$: 185300,
    owner: 'DALEY, JEAN E',
    taxed$: 293800,
    usage: '110',
    use: 'R1A'
  },
  '25-101': {
    address: '1821 VALLEY RD',
    area: 0.23,
    building$: 88800,
    centers: [
      {
        lat: 43.13539995574483,
        lon: -72.08682526752592
      }
    ],
    cu$: 0,
    land$: 119700,
    owner: 'POOLE, CHRISTOPHER',
    taxed$: 208500,
    usage: '110',
    use: 'R1A'
  },
  '25-103': {
    address: '1795 VALLEY RD',
    area: 1.03,
    building$: 131500,
    centers: [
      {
        lat: 43.135976246972604,
        lon: -72.08608109542743
      }
    ],
    cu$: 16100,
    land$: 220500,
    owner: 'BENNETT FAMILY LIVING TRUST',
    taxed$: 368100,
    usage: '110',
    use: 'R1W'
  },
  '25-104': {
    address: '1787 VALLEY RD',
    area: 0.98,
    building$: 53000,
    centers: [
      {
        lat: 43.13633921565808,
        lon: -72.08576529365894
      }
    ],
    cu$: 3100,
    land$: 204300,
    owner: 'CLAIRE FAMILY REVOCABLE TRUST ',
    taxed$: 260400,
    usage: '110',
    use: 'R1W'
  },
  '25-105': {
    address: '1773 VALLEY RD',
    area: 0.34,
    building$: 102900,
    centers: [
      {
        lat: 43.13662991541031,
        lon: -72.08620731718008
      }
    ],
    cu$: 2200,
    land$: 195900,
    owner: 'MCCANN, RICHARD M',
    taxed$: 301000,
    usage: '110',
    use: 'R1W'
  },
  '25-108': {
    address: '1747 VALLEY RD',
    area: 0.35,
    building$: 110400,
    centers: [
      {
        lat: 43.13746770693271,
        lon: -72.0861086117535
      }
    ],
    cu$: 2600,
    land$: 196000,
    owner: 'COUTE, THOMAS  & DIANE M',
    taxed$: 309000,
    usage: '110',
    use: 'R1W'
  },
  '25-112': {
    address: '1705 VALLEY RD',
    area: 0.36,
    building$: 118200,
    centers: [
      {
        lat: 43.13837217179503,
        lon: -72.08628182589658
      }
    ],
    cu$: 2200,
    land$: 186100,
    owner: 'CHICOINE, ROGER G.',
    taxed$: 306500,
    usage: '110',
    use: 'R1W'
  },
  '25-113': {
    address: '1703 VALLEY RD',
    area: 0.38,
    building$: 17900,
    centers: [
      {
        lat: 43.138557860437956,
        lon: -72.08635276215648
      }
    ],
    cu$: 1500,
    land$: 191300,
    owner: "O'CONNOR, KEVIN W",
    taxed$: 210700,
    usage: '110',
    use: 'R1W'
  },
  '25-116': {
    address: '1681 VALLEY RD',
    area: 1.12875,
    building$: 148800,
    centers: [
      {
        lat: 43.13924541289981,
        lon: -72.08629597138298
      }
    ],
    cu$: 38300,
    land$: 0,
    owner: 'BARKIE, DAVID',
    taxed$: 187100,
    usage: '110',
    use: 'R1'
  },
  '25-117': {
    address: '1669 VALLEY RD',
    area: 0.49,
    building$: 144700,
    centers: [
      {
        lat: 43.139462837149715,
        lon: -72.08679005153255
      }
    ],
    cu$: 0,
    land$: 197400,
    owner: 'DEMARCO, FRANK M JR',
    taxed$: 342100,
    usage: '110',
    use: 'R1W'
  },
  '16-117': {
    address: '81 POINT RD',
    area: 2,
    building$: 99900,
    centers: [
      {
        lat: 43.14779857740604,
        lon: -72.09133031483879
      }
    ],
    cu$: 800,
    land$: 192000,
    owner: 'SHWARTZ, JANET KOELSCH',
    taxed$: 292700,
    usage: '110',
    use: 'R1W'
  },
  '9-23': {
    address: '2766 E WASHINGTON RD',
    area: 28.92649,
    building$: 0,
    centers: [
      {
        lat: 43.18899286962391,
        lon: -72.03575772664117
      }
    ],
    cu$: 14100,
    land$: 0,
    owner: 'ECCARDT FARMS INC',
    taxed$: 14100,
    usage: '110',
    use: 'R1'
  },
  '11-43': {
    address: '521 MILLEN POND RD',
    area: 3,
    building$: 126500,
    centers: [
      {
        lat: 43.172241948974474,
        lon: -72.1186427570704
      }
    ],
    cu$: 6500,
    land$: 202900,
    owner: 'LUNDQUIST LIV TRUST DTD 1/4/05',
    taxed$: 335900,
    usage: '110',
    use: 'R1W'
  },
  '12-11': {
    address: '447 HALFMOON POND RD',
    area: 38,
    building$: 86500,
    centers: [
      {
        lat: 43.17641723885001,
        lon: -72.08668314520334
      }
    ],
    cu$: 4100,
    land$: 39698,
    owner: 'ZIPPER, AARON J',
    taxed$: 130298,
    usage: '110',
    use: 'R1W'
  },
  '12-137': {
    address: '546 WASHINGTON DR',
    area: 2.59,
    building$: 142100,
    centers: [
      {
        lat: 43.17621927435387,
        lon: -72.05828603106639
      }
    ],
    cu$: 7300,
    land$: 101500,
    owner: 'CORRIGAN, JOHN F',
    taxed$: 250900,
    usage: '110',
    use: 'R1W'
  },
  '23-1': {
    address: '2372 E WASHINGTON RD',
    area: 17.75,
    building$: 94100,
    centers: [
      {
        lat: 43.1932876323008,
        lon: -72.0216960486037
      }
    ],
    cu$: 1300,
    land$: 54606,
    owner: 'PEREZ, JOSEPH',
    taxed$: 150006,
    usage: '110',
    use: 'R1'
  },
  '14-409': {
    address: '68 ASHUELOT ACRE RD',
    area: 0.33,
    building$: 191000,
    centers: [
      {
        lat: 43.15312480747,
        lon: -72.1584131730631
      }
    ],
    cu$: 16900,
    land$: 192200,
    owner: 'BEAM, KATHLEEN A 2001 LIV TR',
    taxed$: 400100,
    usage: '110',
    use: 'R1W'
  },
  '25-3': {
    address: '1554 VALLEY RD',
    area: 0.46,
    building$: 0,
    centers: [
      {
        lat: 43.13845150458323,
        lon: -72.09100991242711
      }
    ],
    cu$: 3300,
    land$: 18600,
    owner: 'PARKER, NEAL H',
    taxed$: 21900,
    usage: '110',
    use: 'R1A'
  },
  '8-33': {
    address: '374 MARTIN RD',
    area: 10.7,
    building$: 0,
    centers: [
      {
        lat: 43.20799911012737,
        lon: -72.06345005759661
      }
    ],
    cu$: 1200,
    land$: 28300,
    owner: 'MARTIN, PETER W LIVING TRUST',
    taxed$: 29500,
    usage: '110',
    use: 'R1'
  },
  '7-17': {
    address: '315 WASHINGTON HGTS RD',
    area: 5,
    building$: 80600,
    centers: [
      {
        lat: 43.19843433221691,
        lon: -72.11359089455286
      }
    ],
    cu$: 12700,
    land$: 28500,
    owner: 'VALLE, STEVEN F',
    taxed$: 121800,
    usage: '110',
    use: 'R1'
  },
  '7-23': {
    address: '179 WASHINGTON HGTS RD',
    area: 5.2,
    building$: 155100,
    centers: [
      {
        lat: 43.19588553700595,
        lon: -72.11867444593392
      }
    ],
    cu$: 3600,
    land$: 28800,
    owner: 'WALSH, MALLORY JACOB',
    taxed$: 187500,
    usage: '110',
    use: 'R1'
  },
  '7-25': {
    address: '117 WASHINGTON HGTS RD',
    area: 10.3,
    building$: 79300,
    centers: [
      {
        lat: 43.19427820974563,
        lon: -72.11833669312071
      }
    ],
    cu$: 2000,
    land$: 36000,
    owner: 'CASEY, GEORGANN',
    taxed$: 117300,
    usage: '110',
    use: 'R1'
  },
  '7-32': {
    address: '94 WASHINGTON HGTS RD',
    area: 5.9,
    building$: 87400,
    centers: [
      {
        lat: 43.192348269151665,
        lon: -72.11555668051112
      }
    ],
    cu$: 6400,
    land$: 23601,
    owner: 'WILSON, RAYMOND L',
    taxed$: 117401,
    usage: '110',
    use: 'R1'
  },
  '7-35': {
    address: '188 WASHINGTON HGTS RD',
    area: 5,
    building$: 83900,
    centers: [
      {
        lat: 43.194264780783044,
        lon: -72.1145250818172
      }
    ],
    cu$: 1000,
    land$: 28500,
    owner: 'DUBE, MARC R',
    taxed$: 113400,
    usage: '110',
    use: 'R1'
  },
  '7-39': {
    address: '294 WASHINGTON HGTS RD',
    area: 6.4,
    building$: 34400,
    centers: [
      {
        lat: 43.195834404425185,
        lon: -72.11251949519806
      }
    ],
    cu$: 0,
    land$: 30600,
    owner: 'STEVENS, GREGORY',
    taxed$: 65000,
    usage: '110',
    use: 'R1'
  },
  '7-40': {
    address: '322 WASHINGTON HGTS RD',
    area: 6.1,
    building$: 0,
    centers: [
      {
        lat: 43.19600910182587,
        lon: -72.11159051853197
      }
    ],
    cu$: 400,
    land$: 30200,
    owner: 'BARKER, BRUCE',
    taxed$: 30600,
    usage: '110',
    use: 'R1'
  },
  '7-42': {
    address: '341 WASHINGTON HGTS RD',
    area: 10.3,
    building$: 128400,
    centers: [
      {
        lat: 43.19798672021689,
        lon: -72.11134147458601
      }
    ],
    cu$: 5700,
    land$: 36000,
    owner: 'KENDALL, GARY',
    taxed$: 170100,
    usage: '110',
    use: 'R1'
  },
  '7-43': {
    address: '919 NO MAIN ST',
    area: 5.1,
    building$: 94400,
    centers: [
      {
        lat: 43.19919179760384,
        lon: -72.11021603494737
      }
    ],
    cu$: 0,
    land$: 38200,
    owner: 'KELLY, JOHN',
    taxed$: 132600,
    usage: '110',
    use: 'R1'
  },
  '8-25': {
    address: '253 MARTIN RD',
    area: 6.8,
    building$: 0,
    centers: [
      {
        lat: 43.21136554487417,
        lon: -72.0689149301373
      }
    ],
    cu$: 1000,
    land$: 29400,
    owner: 'MILLER, DANIEL P & DIANE M',
    taxed$: 30400,
    usage: '110',
    use: 'R1'
  },
  '8-34': {
    address: '372 MARTIN RD',
    area: 12,
    building$: 8400,
    centers: [
      {
        lat: 43.207900294735495,
        lon: -72.06487934470026
      }
    ],
    cu$: 0,
    land$: 16879,
    owner: 'LAPIERRE, MYRA C REVOC TRUST',
    taxed$: 25279,
    usage: '110',
    use: 'R1'
  },
  '9-10': {
    address: '231 DEER VALLEY RD',
    area: 3,
    building$: 14700,
    centers: [
      {
        lat: 43.19999767307207,
        lon: -72.02269340572711
      }
    ],
    cu$: 800,
    land$: 29374,
    owner: 'LANDRY, LOUIS G',
    taxed$: 44874,
    usage: '110',
    use: 'R1'
  },
  '9-26-0A': {
    address: '301 AYERS POND RD',
    area: 10.7,
    building$: 134000,
    centers: [
      {
        lat: 43.20001530764097,
        lon: -72.02649943401417
      },
      {
        lat: 43.20029146821464,
        lon: -72.03219076290769
      }
    ],
    cu$: 0,
    land$: 32266,
    owner: 'PORTER, BENJAMIN C',
    taxed$: 166266,
    usage: '110',
    use: 'R1'
  },
  '9-61': {
    address: '2527 E WASHINGTON RD',
    area: 5.3,
    building$: 0,
    centers: [
      {
        lat: 43.19156111380461,
        lon: -72.02808770676421
      }
    ],
    cu$: 9200,
    land$: 3099,
    owner: 'THAYER, EDWARD G',
    taxed$: 12299,
    usage: '110',
    use: 'R1'
  },
  '9-63': {
    address: '2560 E WASHINGTON RD',
    area: 0.36,
    building$: 16900,
    centers: [
      {
        lat: 43.19240380468024,
        lon: -72.02923643566805
      }
    ],
    cu$: 0,
    land$: 36100,
    owner: 'WASHINGTON, TOWN OF - FIRE',
    taxed$: 53000,
    usage: '300',
    use: 'EX-M'
  },
  '10-34': {
    address: '799 ASHUELOT DR',
    area: 1.31,
    building$: 79300,
    centers: [
      {
        lat: 43.17020769710256,
        lon: -72.15198210800425
      }
    ],
    cu$: 3000,
    land$: 193200,
    owner: 'CONNORS, PHILIP F',
    taxed$: 275500,
    usage: '110',
    use: 'R1W'
  },
  '10-37': {
    address: '769 ASHUELOT DR',
    area: 1.17,
    building$: 81100,
    centers: [
      {
        lat: 43.169182767701095,
        lon: -72.15174784148233
      }
    ],
    cu$: 0,
    land$: 198000,
    owner: 'SCHNEIDER FAMILY REVOCABLE TRU',
    taxed$: 279100,
    usage: '110',
    use: 'R1W'
  },
  '10-45': {
    address: '147 TAYLOR CIR',
    area: 3.65,
    building$: 0,
    centers: [
      {
        lat: 43.16970744378105,
        lon: -72.1502165288455
      }
    ],
    cu$: 0,
    land$: 24000,
    owner: 'SCHNEIDER FAMILY REVOCABLE TRU',
    taxed$: 24000,
    usage: '110',
    use: 'R1A'
  },
  '11-3-01': {
    address: '26 OLD BURBANK RD',
    area: 4.76,
    building$: 131900,
    centers: [
      {
        lat: 43.18289161609036,
        lon: -72.11806502228202
      }
    ],
    cu$: 14200,
    land$: 37600,
    owner: 'CARTER, WALLACE F',
    taxed$: 183700,
    usage: '110',
    use: 'R1'
  },
  '11-13': {
    address: '686 MILLEN POND RD',
    area: 14.76,
    building$: 352500,
    centers: [
      {
        lat: 43.17249607684697,
        lon: -72.12523128112771
      }
    ],
    cu$: 27300,
    land$: 40049,
    owner: 'MINGARY, LLC',
    taxed$: 419849,
    usage: '110',
    use: 'R1'
  },
  '11-14': {
    address: '626 MILLEN POND RD',
    area: 69.40589,
    building$: 25100,
    centers: [
      {
        lat: 43.17490998778808,
        lon: -72.1226105343751
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'MUGAR, CAROLYN J',
    taxed$: 25100,
    usage: '110',
    use: 'R1'
  },
  '11-22': {
    address: '221 LEMPSTER MT RD',
    area: 7.3,
    building$: 53700,
    centers: [
      {
        lat: 43.181655420939556,
        lon: -72.10529940638253
      }
    ],
    cu$: 2000,
    land$: 36783,
    owner: 'KELLOGG, RANDOLPH W',
    taxed$: 92483,
    usage: '110',
    use: 'R1'
  },
  '11-26': {
    address: '600 LEMPSTER MT RD',
    area: 4,
    building$: 146800,
    centers: [
      {
        lat: 43.18980853198782,
        lon: -72.1145611379802
      }
    ],
    cu$: 0,
    land$: 65500,
    owner: 'WOODCOCK, PETER L.',
    taxed$: 212300,
    usage: '110',
    use: 'R1'
  },
  '11-50': {
    address: '674 MILLEN POND RD',
    area: 0.4,
    building$: 163500,
    centers: [
      {
        lat: 43.169852292872,
        lon: -72.12329126614651
      }
    ],
    cu$: 18000,
    land$: 50200,
    owner: 'KERN, AUDREY MARGARET TRUST',
    taxed$: 231700,
    usage: '110',
    use: 'R1A'
  },
  '11-55': {
    address: '704 MILLEN POND RD',
    area: 1.4,
    building$: 71100,
    centers: [
      {
        lat: 43.16924511380416,
        lon: -72.12403866021971
      },
      {
        lat: 43.16847002990929,
        lon: -72.12361363859023
      }
    ],
    cu$: 13400,
    land$: 190700,
    owner: 'SNYDER, DIANE E',
    taxed$: 275200,
    usage: '110',
    use: 'R1W'
  },
  '11-67': {
    address: '18 WOLF WAY',
    area: 114.4215,
    building$: 0,
    centers: [
      {
        lat: 43.169744319162106,
        lon: -72.11336522122781
      }
    ],
    cu$: 1400,
    land$: 0,
    owner: 'WASHINGTON, TOWN OF -CMP MORGN',
    taxed$: 1400,
    usage: '300',
    use: 'EX-M'
  },
  '12-67': {
    address: '821 WASHINGTON DR',
    area: 0.73,
    building$: 115600,
    centers: [
      {
        lat: 43.1821257224196,
        lon: -72.0605034048629
      }
    ],
    cu$: 5400,
    land$: 221700,
    owner: '821 WASHINGTON DRIVE, LLC',
    taxed$: 342700,
    usage: '110',
    use: 'R1W'
  },
  '12-39': {
    address: '730 HALFMOON PD RD',
    area: 1.12,
    building$: 114500,
    centers: [
      {
        lat: 43.18133946254143,
        lon: -72.08104383902703
      },
      {
        lat: 43.18157828201703,
        lon: -72.08205853252855
      }
    ],
    cu$: 16000,
    land$: 61000,
    owner: 'LAPRADE, NORMAN',
    taxed$: 191500,
    usage: '110',
    use: 'R1A'
  },
  '12-43': {
    address: '528 HALFMOON PD RD',
    area: 12,
    building$: 31400,
    centers: [
      {
        lat: 43.17593440901555,
        lon: -72.08214168066499
      }
    ],
    cu$: 1100,
    land$: 30601,
    owner: 'OTTERSON, GEORGE M.REVOC FAMIL',
    taxed$: 63101,
    usage: '110',
    use: 'R1'
  },
  '12-68': {
    address: '795 WASHINGTON DR',
    area: 0.86,
    building$: 179300,
    centers: [
      {
        lat: 43.1817809057747,
        lon: -72.0603881952562
      }
    ],
    cu$: 2000,
    land$: 222600,
    owner: 'SARDINSKAS, STUART A ET AL',
    taxed$: 403900,
    usage: '110',
    use: 'R1W'
  },
  '12-111': {
    address: '261 WASHINGTON DR',
    area: 0.66,
    building$: 64300,
    centers: [
      {
        lat: 43.17159061545716,
        lon: -72.05983784546373
      }
    ],
    cu$: 5700,
    land$: 216500,
    owner: 'CHAMBERLAIN, RALPH E',
    taxed$: 286500,
    usage: '110',
    use: 'R1W'
  },
  '12-112': {
    address: '255 WASHINGTON DR',
    area: 0.51,
    building$: 50400,
    centers: [
      {
        lat: 43.171740949317126,
        lon: -72.0602257726902
      }
    ],
    cu$: 0,
    land$: 211100,
    owner: 'KWIATKOWSKI, IRENE S IRREV TRU',
    taxed$: 261500,
    usage: '110',
    use: 'R1W'
  },
  '12-162': {
    address: '21 ISLAND POND RD',
    area: 0.05,
    building$: 0,
    centers: [
      {
        lat: 43.16939133257221,
        lon: -72.07255271949373
      }
    ],
    cu$: 3000,
    land$: 25300,
    owner: 'GILLILAND, ROBERT J.',
    taxed$: 28300,
    usage: '110',
    use: 'R1W'
  },
  '14-1': {
    address: '731 ASHUELOT DR',
    area: 1.54,
    building$: 152500,
    centers: [
      {
        lat: 43.168093650954056,
        lon: -72.15158567907258
      }
    ],
    cu$: 13700,
    land$: 197200,
    owner: 'HORTON, CAROL E',
    taxed$: 363400,
    usage: '110',
    use: 'R1W'
  },
  '14-2': {
    address: '707 ASHUELOT DR',
    area: 4.39,
    building$: 168100,
    centers: [
      {
        lat: 43.167736335417594,
        lon: -72.15206325886462
      },
      {
        lat: 43.16732296933555,
        lon: -72.15037688220646
      }
    ],
    cu$: 3100,
    land$: 186100,
    owner: 'RUSSELL, MARY C  REV TRUST',
    taxed$: 357300,
    usage: '110',
    use: 'R1W'
  },
  '14-5': {
    address: '679 ASHUELOT DR',
    area: 1.71,
    building$: 121900,
    centers: [
      {
        lat: 43.16678543905109,
        lon: -72.15247742379077
      }
    ],
    cu$: 0,
    land$: 201600,
    owner: 'COSTLEY, SUSAN E',
    taxed$: 323500,
    usage: '110',
    use: 'R1'
  },
  '14-7': {
    address: '651 ASHUELOT DR',
    area: 1.44,
    building$: 113400,
    centers: [
      {
        lat: 43.166196718388996,
        lon: -72.15255060625807
      }
    ],
    cu$: 12400,
    land$: 199100,
    owner: "O'CONNELL, JOHN L",
    taxed$: 324900,
    usage: '110',
    use: 'R1'
  },
  '14-18': {
    address: '124 HARRISON RD',
    area: 1.12,
    building$: 111500,
    centers: [
      {
        lat: 43.16287382581099,
        lon: -72.15357295883749
      }
    ],
    cu$: 0,
    land$: 194600,
    owner: 'RUGGIERO, ROCCO R',
    taxed$: 306100,
    usage: '110',
    use: 'R1'
  },
  '14-19': {
    address: '126 HARRISON RD',
    area: 1.19,
    building$: 89600,
    centers: [
      {
        lat: 43.162526541925516,
        lon: -72.15403558886906
      }
    ],
    cu$: 0,
    land$: 199700,
    owner: 'WHITNEY, MILTON R. TRUST AGRMT',
    taxed$: 289300,
    usage: '110',
    use: 'R1'
  },
  '14-51': {
    address: '69 TAYLOR CIR',
    area: 1.23,
    building$: 139300,
    centers: [
      {
        lat: 43.16711915561875,
        lon: -72.14938987470813
      }
    ],
    cu$: 0,
    land$: 40800,
    owner: 'BRERETON, BRUCE',
    taxed$: 180100,
    usage: '110',
    use: 'R1'
  },
  '14-76': {
    address: '189 STOWELL RD',
    area: 1.11,
    building$: 156700,
    centers: [
      {
        lat: 43.16342729384511,
        lon: -72.14743327665734
      }
    ],
    cu$: 5000,
    land$: 40700,
    owner: 'PERRY, ANTHONY C',
    taxed$: 202400,
    usage: '110',
    use: 'R1'
  },
  '14-156': {
    address: '357 ASHUELOT DR',
    area: 0.66,
    building$: 166100,
    centers: [
      {
        lat: 43.158156515199366,
        lon: -72.15096246515776
      }
    ],
    cu$: 5600,
    land$: 203500,
    owner: 'BERUBE, HENRY',
    taxed$: 375200,
    usage: '110',
    use: 'R1W'
  },
  '14-196': {
    address: '123 MCKINLEY DR',
    area: 1.51,
    building$: 89700,
    centers: [
      {
        lat: 43.153482498180864,
        lon: -72.14178597876487
      }
    ],
    cu$: 30200,
    land$: 226300,
    owner: 'ZERJAV, JOHN',
    taxed$: 346200,
    usage: '110',
    use: 'R1W'
  },
  '14-207': {
    address: '66 TAFT RD',
    area: 0.82,
    building$: 142600,
    centers: [
      {
        lat: 43.15620153722233,
        lon: -72.1487897002611
      }
    ],
    cu$: 4800,
    land$: 39400,
    owner: 'DUNN FAMILY TRUST',
    taxed$: 186800,
    usage: '110',
    use: 'R1'
  },
  '14-237': {
    address: '66 ASHUELOT DR',
    area: 1.7,
    building$: 132100,
    centers: [
      {
        lat: 43.15589966268981,
        lon: -72.14322132895305
      }
    ],
    cu$: 9700,
    land$: 45700,
    owner: 'GERBER, CHRISTOPHER M.',
    taxed$: 187500,
    usage: '110',
    use: 'R1'
  },
  '14-303': {
    address: '13 CLEVELAND CIR',
    area: 1.47,
    building$: 70100,
    centers: [
      {
        lat: 43.15797804285559,
        lon: -72.14209745963002
      }
    ],
    cu$: 10100,
    land$: 41200,
    owner: 'GUNDECK, STANLEY R',
    taxed$: 121400,
    usage: '110',
    use: 'R1'
  },
  '14-375': {
    address: '187 COOLIDGE DR',
    area: 3.72,
    building$: 104200,
    centers: [
      {
        lat: 43.16160545518911,
        lon: -72.1384533304305
      }
    ],
    cu$: 0,
    land$: 44600,
    owner: 'BOMBARD, MARIA M',
    taxed$: 148800,
    usage: '110',
    use: 'R1'
  },
  '14-384': {
    address: '42 BUCHANAN CIR',
    area: 2.73,
    building$: 137700,
    centers: [
      {
        lat: 43.16304258272571,
        lon: -72.13944965725375
      }
    ],
    cu$: 1300,
    land$: 43100,
    owner: 'SANDFORD, WAYNE E & CHRISTINE',
    taxed$: 182100,
    usage: '110',
    use: 'R1'
  },
  '14-410': {
    address: '50 ASHUELOT ACRE RD',
    area: 0.15,
    building$: 239500,
    centers: [
      {
        lat: 43.15258736640587,
        lon: -72.15807137667366
      }
    ],
    cu$: 12300,
    land$: 177500,
    owner: 'TAYLOR, JAMES S REV TRUST',
    taxed$: 429300,
    usage: '110',
    use: 'R1W'
  },
  '14-411': {
    address: '42 ASHUELOT ACRE RD',
    area: 0.17,
    building$: 101300,
    centers: [
      {
        lat: 43.15233781128694,
        lon: -72.15793855398988
      }
    ],
    cu$: 0,
    land$: 159400,
    owner: 'STROSCIO, DANIEL',
    taxed$: 260700,
    usage: '110',
    use: 'R1W'
  },
  '14-412': {
    address: '32 ASHUELOT ACRE RD',
    area: 0.3,
    building$: 58300,
    centers: [
      {
        lat: 43.15214167702718,
        lon: -72.15784117296761
      }
    ],
    cu$: 3400,
    land$: 178800,
    owner: 'RUSSELL, RAYMOND F',
    taxed$: 240500,
    usage: '110',
    use: 'R1W'
  },
  '14-413': {
    address: '24 ASHUELOT ACRE RD',
    area: 0.28,
    building$: 19200,
    centers: [
      {
        lat: 43.151856145992824,
        lon: -72.1577007116961
      }
    ],
    cu$: 0,
    land$: 178600,
    owner: 'SANDERS JR, GEORGE N',
    taxed$: 197800,
    usage: '110',
    use: 'R1W'
  },
  '14-414': {
    address: '14 ASHUELOT ACRE RD',
    area: 0.17,
    building$: 67900,
    centers: [
      {
        lat: 43.151673654314756,
        lon: -72.15757282751447
      }
    ],
    cu$: 1700,
    land$: 164300,
    owner: 'WASHALOT REALTY TRUST, DETOUR ',
    taxed$: 233900,
    usage: '110',
    use: 'R1'
  },
  '14-401': {
    address: '154 ASHUELOT ACRE RD',
    area: 0.34,
    building$: 118200,
    centers: [
      {
        lat: 43.15498283468841,
        lon: -72.15770614859909
      }
    ],
    cu$: 27900,
    land$: 182300,
    owner: 'BOUMA, JODY M',
    taxed$: 328400,
    usage: '110',
    use: 'R1W'
  },
  '14-402': {
    address: '142 ASHUELOT ACRE RD',
    area: 0.34,
    building$: 24600,
    centers: [
      {
        lat: 43.1547644605985,
        lon: -72.15787756629145
      }
    ],
    cu$: 1300,
    land$: 182300,
    owner: 'BOUMA, BRETT AND JODY',
    taxed$: 208200,
    usage: '110',
    use: 'R1W'
  },
  '14-403': {
    address: '136 ASHUELOT ACRE RD',
    area: 0.34,
    building$: 14100,
    centers: [
      {
        lat: 43.15452489804222,
        lon: -72.15800080200881
      }
    ],
    cu$: 600,
    land$: 175800,
    owner: 'MARTIN, BONNIE',
    taxed$: 190500,
    usage: '110',
    use: 'R1W'
  },
  '14-404': {
    address: '130 ASHUELOT ACRE RD',
    area: 0.12,
    building$: 90100,
    centers: [
      {
        lat: 43.15438425322334,
        lon: -72.15821561992195
      }
    ],
    cu$: 0,
    land$: 159800,
    owner: 'BROWN, FRANK J',
    taxed$: 249900,
    usage: '110',
    use: 'R1W'
  },
  '14-405': {
    address: '124 ASHUELOT ACRE RD',
    area: 0.22,
    building$: 64800,
    centers: [
      {
        lat: 43.15423350889736,
        lon: -72.15837479794651
      }
    ],
    cu$: 4600,
    land$: 178800,
    owner: 'COLPITTS JOINT REV TRUST',
    taxed$: 248200,
    usage: '110',
    use: 'R1W'
  },
  '14-406': {
    address: '104 ASHUELOT ACRE RD',
    area: 0.4,
    building$: 45800,
    centers: [
      {
        lat: 43.15404157422722,
        lon: -72.15864339590277
      }
    ],
    cu$: 2400,
    land$: 172900,
    owner: 'PLUMRIDGE, JAMES A.',
    taxed$: 221100,
    usage: '110',
    use: 'R1W'
  },
  '14-434': {
    address: '579 MARLOW RD',
    area: 0.25,
    building$: 75100,
    centers: [
      {
        lat: 43.15144315917415,
        lon: -72.1590360174893
      }
    ],
    cu$: 1800,
    land$: 31500,
    owner: 'GROVER, SUZANNE',
    taxed$: 108400,
    usage: '110',
    use: 'R1'
  },
  '14-407': {
    address: '88 ASHUELOT ACRE RD',
    area: 0.16,
    building$: 25300,
    centers: [
      {
        lat: 43.1537207617429,
        lon: -72.15887558392862
      }
    ],
    cu$: 3800,
    land$: 162200,
    owner: 'BRAGG, MARK A',
    taxed$: 191300,
    usage: '110',
    use: 'R1W'
  },
  '14-408': {
    address: '82 ASHUELOT ACRE RD',
    area: 0.13,
    building$: 38100,
    centers: [
      {
        lat: 43.15357090357488,
        lon: -72.15863592869866
      }
    ],
    cu$: 0,
    land$: 167500,
    owner: 'WRIGHT, PAMELA J',
    taxed$: 205600,
    usage: '110',
    use: 'R1W'
  },
  '14-417': {
    address: '2 ASHUELOT ACRE RD',
    area: 0.48,
    building$: 32300,
    centers: [
      {
        lat: 43.151358194907644,
        lon: -72.15727499935392
      }
    ],
    cu$: 2400,
    land$: 173600,
    owner: 'HESKETH, TODD S.',
    taxed$: 208300,
    usage: '110',
    use: 'R1'
  },
  '14-418': {
    address: '637 MARLOW RD',
    area: 0.28,
    building$: 68300,
    centers: [
      {
        lat: 43.15111399923177,
        lon: -72.15723073370123
      }
    ],
    cu$: 2100,
    land$: 188600,
    owner: 'DAVIS REVOCABLE TRUST',
    taxed$: 259000,
    usage: '110',
    use: 'R1W'
  },
  '14-419': {
    address: '646 MARLOW RD',
    area: 10.89,
    building$: 159900,
    centers: [
      {
        lat: 43.14933777068174,
        lon: -72.15974816184838
      }
    ],
    cu$: 2800,
    land$: 69540,
    owner: 'LITTLE, WARREN J IRREV R P TR',
    taxed$: 232240,
    usage: '110',
    use: 'R1'
  },
  '14-420': {
    address: '15 ASHUELOT ACRE RD',
    area: 0.21,
    building$: 13900,
    centers: [
      {
        lat: 43.151424974472896,
        lon: -72.15802895527419
      }
    ],
    cu$: 0,
    land$: 19800,
    owner: 'DANCAUSE, SALLY',
    taxed$: 33700,
    usage: '110',
    use: 'R1A'
  },
  '14-421': {
    address: '27 ASHUELOT ACRE RD',
    area: 0.23,
    building$: 47200,
    centers: [
      {
        lat: 43.151721153338656,
        lon: -72.15820318602864
      }
    ],
    cu$: 1600,
    land$: 26400,
    owner: 'LAPPEN, SCOTT C.',
    taxed$: 75200,
    usage: '110',
    use: 'R1A'
  },
  '14-422': {
    address: '35 ASHUELOT ACRE RD',
    area: 0.23,
    building$: 35800,
    centers: [
      {
        lat: 43.15197995568219,
        lon: -72.15834330478404
      }
    ],
    cu$: 1700,
    land$: 26400,
    owner: 'DLUGOSZ, JOSEPH',
    taxed$: 63900,
    usage: '110',
    use: 'R1A'
  },
  '14-423': {
    address: '51 ASHUELOT ACRE RD',
    area: 0.23,
    building$: 57100,
    centers: [
      {
        lat: 43.15238527522503,
        lon: -72.15852141121222
      }
    ],
    cu$: 0,
    land$: 26400,
    owner: 'KALASKY, JAMES G',
    taxed$: 83500,
    usage: '110',
    use: 'R1A'
  },
  '14-424': {
    address: '61 ASHUELOT ACRE RD',
    area: 0.23,
    building$: 145900,
    centers: [
      {
        lat: 43.15265622466423,
        lon: -72.15866885952633
      }
    ],
    cu$: 2700,
    land$: 49500,
    owner: 'WALDRON, JAMES',
    taxed$: 198100,
    usage: '110',
    use: 'R1A'
  },
  '14-425': {
    address: 'ASHUELOT ACRE RD',
    area: 0.69,
    building$: 86400,
    centers: [
      {
        lat: 43.153354680579376,
        lon: -72.15905143832619
      }
    ],
    cu$: 0,
    land$: 43500,
    owner: 'OPERARIO, DON',
    taxed$: 129900,
    usage: '110',
    use: 'R1'
  },
  '14-433': {
    address: '603 MARLOW RD',
    area: 0.52,
    building$: 129300,
    centers: [
      {
        lat: 43.15150285063248,
        lon: -72.15853267128864
      }
    ],
    cu$: 18400,
    land$: 33900,
    owner: 'GILMORE FAMILY REV LIVING TRUS',
    taxed$: 181600,
    usage: '110',
    use: 'R1A'
  },
  '14-435': {
    address: '569 MARLOW RD',
    area: 0.68,
    building$: 66600,
    centers: [
      {
        lat: 43.15170989834449,
        lon: -72.15939693307591
      }
    ],
    cu$: 2200,
    land$: 30900,
    owner: 'MANN, EILEEN',
    taxed$: 99700,
    usage: '110',
    use: 'R1A'
  },
  '14-458': {
    address: '97 HUNTLEY MT RD',
    area: 1,
    building$: 67500,
    centers: [
      {
        lat: 43.15441896935518,
        lon: -72.16444985261467
      }
    ],
    cu$: 1000,
    land$: 28400,
    owner: 'HEBERT, JOHN W',
    taxed$: 96900,
    usage: '110',
    use: 'R1'
  },
  '14-459': {
    address: '87 HUNTLEY MT RD',
    area: 1,
    building$: 85500,
    centers: [
      {
        lat: 43.15387890258103,
        lon: -72.16408850886859
      }
    ],
    cu$: 9200,
    land$: 28400,
    owner: 'KEITH, AARON',
    taxed$: 123100,
    usage: '110',
    use: 'R1'
  },
  '14-460': {
    address: '65 HUNTLEY MT RD',
    area: 1,
    building$: 87400,
    centers: [
      {
        lat: 43.153373126777815,
        lon: -72.16375433923423
      }
    ],
    cu$: 3400,
    land$: 26900,
    owner: 'WILLIAMS, DANIEL S.',
    taxed$: 117700,
    usage: '110',
    use: 'R1'
  },
  '14-461': {
    address: '49 HUNTLEY MT RD',
    area: 1,
    building$: 18100,
    centers: [
      {
        lat: 43.15289055772308,
        lon: -72.16350667992825
      }
    ],
    cu$: 0,
    land$: 19800,
    owner: 'KIRCHNER, JOAN',
    taxed$: 37900,
    usage: '110',
    use: 'R1'
  },
  '14-463': {
    address: '15 HUNTLEY MT RD',
    area: 0.34,
    building$: 97300,
    centers: [
      {
        lat: 43.15246117648903,
        lon: -72.16318564329984
      }
    ],
    cu$: 20500,
    land$: 25100,
    owner: 'CROSS, THOMAS E',
    taxed$: 142900,
    usage: '110',
    use: 'R1'
  },
  '14-464': {
    address: '7 HUNTLEY MT RD',
    area: 0.34,
    building$: 0,
    centers: [
      {
        lat: 43.15208174620616,
        lon: -72.16315629671064
      }
    ],
    cu$: 4100,
    land$: 20100,
    owner: 'CROSS, THOMAS E',
    taxed$: 24200,
    usage: '110',
    use: 'R1'
  },
  '14-467': {
    address: '419 MARLOW RD',
    area: 20,
    building$: 186100,
    centers: [
      {
        lat: 43.149349611416596,
        lon: -72.16478128838656
      }
    ],
    cu$: 15000,
    land$: 33523,
    owner: 'TURNER, EDWARD J',
    taxed$: 234623,
    usage: '110',
    use: 'R1'
  },
  '14-468': {
    address: '317 MARLOW RD',
    area: 3.1417,
    building$: 11000,
    centers: [
      {
        lat: 43.14867384461305,
        lon: -72.16345180502269
      }
    ],
    cu$: 1000,
    land$: 0,
    owner: 'SOUZA, PAUL J',
    taxed$: 12000,
    usage: '110',
    use: 'R1'
  },
  '14-468-01': {
    address: '363 MARLOW RD',
    area: 2.83,
    building$: 25500,
    centers: [
      {
        lat: 43.14881806114798,
        lon: -72.16240452575346
      }
    ],
    cu$: 14900,
    land$: 34600,
    owner: 'SOUZA, PAUL J',
    taxed$: 75000,
    usage: '110',
    use: 'R1'
  },
  '14-493': {
    address: '228 MARLOW RD',
    area: 6.3,
    building$: 17200,
    centers: [
      {
        lat: 43.14747903090954,
        lon: -72.16697082058266
      }
    ],
    cu$: 9700,
    land$: 35900,
    owner: 'FIRTH, DAVID',
    taxed$: 62800,
    usage: '110',
    use: 'R1'
  },
  '14-494': {
    address: '234 MARLOW RD',
    area: 8.4,
    building$: 162000,
    centers: [
      {
        lat: 43.146496807626434,
        lon: -72.16569055505198
      }
    ],
    cu$: 16900,
    land$: 40800,
    owner: 'CHAMBERLAIN, JON D',
    taxed$: 219700,
    usage: '110',
    use: 'R1'
  },
  '15-23': {
    address: '1065 VALLEY RD',
    area: 5.2,
    building$: 79900,
    centers: [
      {
        lat: 43.14721340572425,
        lon: -72.09839401423412
      }
    ],
    cu$: 0,
    land$: 42300,
    owner: 'RICHARD, ANNA',
    taxed$: 122200,
    usage: '110',
    use: 'R1'
  },
  '15-27': {
    address: '930 VALLEY RD',
    area: 47.08994,
    building$: 0,
    centers: [
      {
        lat: 43.150514569582334,
        lon: -72.10366696931698
      }
    ],
    cu$: 2000,
    land$: 0,
    owner: 'BEAUDREAULT, RICHARD P',
    taxed$: 2000,
    usage: '260',
    use: 'CI'
  },
  '15-40': {
    address: '1574 VALLEY RD',
    area: 18,
    building$: 0,
    centers: [
      {
        lat: 43.16414201155473,
        lon: -72.10483438889784
      }
    ],
    cu$: 0,
    land$: 950,
    owner: 'HALVERSON, KIRSTEN',
    taxed$: 950,
    usage: '190',
    use: 'CUUH'
  },
  '15-80': {
    address: '869 MILLEN POND RD',
    area: 0.2,
    building$: 41100,
    centers: [
      {
        lat: 43.16508458160026,
        lon: -72.1269098485329
      }
    ],
    cu$: 10800,
    land$: 172400,
    owner: 'JASSEN, DARYL J & TURNER, J C ',
    taxed$: 224300,
    usage: '110',
    use: 'R1W'
  },
  '15-81': {
    address: '881 MILLEN POND RD',
    area: 0.13,
    building$: 43900,
    centers: [
      {
        lat: 43.16478314711575,
        lon: -72.12694654643005
      }
    ],
    cu$: 5400,
    land$: 174800,
    owner: 'FLOCK, DONALD P',
    taxed$: 224100,
    usage: '110',
    use: 'R1W'
  },
  '15-93': {
    address: '1230 FAXON HILL RD',
    area: 0.9,
    building$: 124600,
    centers: [
      {
        lat: 43.160116710532336,
        lon: -72.12734689668125
      }
    ],
    cu$: 14100,
    land$: 178900,
    owner: 'KIMBALL, ADAM G',
    taxed$: 317600,
    usage: '110',
    use: 'R1W'
  },
  '15-94': {
    address: '1168 FAXON HILL RD',
    area: 0.37,
    building$: 0,
    centers: [
      {
        lat: 43.15906281262853,
        lon: -72.12754043975971
      }
    ],
    cu$: 1100,
    land$: 94900,
    owner: 'REYNOLDS, ALAN P',
    taxed$: 96000,
    usage: '110',
    use: 'R1W'
  },
  '15-109': {
    address: '854 MILLEN POND RD',
    area: 2.11,
    building$: 57400,
    centers: [
      {
        lat: 43.166106030926485,
        lon: -72.12779095955283
      }
    ],
    cu$: 500,
    land$: 50100,
    owner: 'WYAND, ROBERT C',
    taxed$: 108000,
    usage: '110',
    use: 'R1'
  },
  '15-162': {
    address: '704 VALLEY RD',
    area: 0.67,
    building$: 31800,
    centers: [
      {
        lat: 43.15623892745189,
        lon: -72.10104397754418
      }
    ],
    cu$: 3400,
    land$: 24300,
    owner: 'BLANCHETTE, MATTHEW',
    taxed$: 59500,
    usage: '110',
    use: 'R1'
  },
  '16-1': {
    address: '163 VALLEY RD',
    area: 64,
    building$: 38400,
    centers: [
      {
        lat: 43.165628475095005,
        lon: -72.09201142454293
      }
    ],
    cu$: 3000,
    land$: 36691,
    owner: 'CHARETTE, JOHN',
    taxed$: 78091,
    usage: '110',
    use: 'R1'
  },
  '16-23': {
    address: '18 MAPLE WAY',
    area: 0.7,
    building$: 80000,
    centers: [
      {
        lat: 43.147240489031084,
        lon: -72.08740077583123
      }
    ],
    cu$: 0,
    land$: 34800,
    owner: 'MANCINI, CARL W INTER VIVOS TR',
    taxed$: 114800,
    usage: '110',
    use: 'R1A'
  },
  '16-27': {
    address: '573 HIGHLAND HAVEN RD',
    area: 0.4,
    building$: 35800,
    centers: [
      {
        lat: 43.1480051781534,
        lon: -72.0885200544174
      }
    ],
    cu$: 0,
    land$: 45600,
    owner: 'BELL, KENNETH S.',
    taxed$: 81400,
    usage: '110',
    use: 'R1A'
  },
  '16-29': {
    address: '541 HIGHLAND HAVEN RD',
    area: 0.7,
    building$: 0,
    centers: [
      {
        lat: 43.14842036824741,
        lon: -72.08819973614145
      }
    ],
    cu$: 0,
    land$: 20900,
    owner: 'BROWN, BRIAN',
    taxed$: 20900,
    usage: '110',
    use: 'R1A'
  },
  '16-58': {
    address: '1429 SO MAIN ST',
    area: 0.75,
    building$: 29200,
    centers: [
      {
        lat: 43.14918600501892,
        lon: -72.06183176925737
      }
    ],
    cu$: 0,
    land$: 35100,
    owner: 'PAPPAS, CHARLES F',
    taxed$: 64300,
    usage: '110',
    use: 'R1'
  },
  '16-59': {
    address: '1415 SO MAIN ST',
    area: 0.36,
    building$: 23300,
    centers: [
      {
        lat: 43.149148539368305,
        lon: -72.0622856562894
      }
    ],
    cu$: 200,
    land$: 30700,
    owner: 'GIANNELLI LIVING TRUST, G & M',
    taxed$: 54200,
    usage: '110',
    use: 'R1'
  },
  '16-77-11': {
    address: '4644 E WASHINGTON RD',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.16893362075449,
        lon: -72.07927068842882
      }
    ],
    cu$: 7000,
    land$: 30595,
    owner: 'BOREY, LOUIS J',
    taxed$: 37595,
    usage: '110',
    use: 'R1'
  },
  '16-85': {
    address: '152 WASHINGTON DR',
    area: 3.8,
    building$: 113800,
    centers: [
      {
        lat: 43.16903221215437,
        lon: -72.06136921695699
      }
    ],
    cu$: 19000,
    land$: 44700,
    owner: 'COTE, TIMOTHY G',
    taxed$: 177500,
    usage: '110',
    use: 'R1'
  },
  '16-94': {
    address: '4200 E WASHINGTON RD',
    area: 2.86,
    building$: 77300,
    centers: [
      {
        lat: 43.165910042549136,
        lon: -72.06085103310843
      }
    ],
    cu$: 0,
    land$: 39000,
    owner: 'OFMAN, PETER',
    taxed$: 116300,
    usage: '110',
    use: 'R1'
  },
  '16-102': {
    address: '4078 E WASHINGTON RD',
    area: 7.1,
    building$: 0,
    centers: [
      {
        lat: 43.16502813577428,
        lon: -72.05723335299257
      }
    ],
    cu$: 1000,
    land$: 29900,
    owner: 'VINCIGUERRA, ANTHONY S.',
    taxed$: 30900,
    usage: '110',
    use: 'R1'
  },
  '16-103': {
    address: '3996 E WASHINGTON RD',
    area: 3,
    building$: 0,
    centers: [
      {
        lat: 43.16535246135712,
        lon: -72.05648457541965
      }
    ],
    cu$: 5000,
    land$: 26100,
    owner: 'GALLAGHER, STEPHEN & TRACIE',
    taxed$: 31100,
    usage: '110',
    use: 'R1'
  },
  '16-105': {
    address: '3964 E WASHINGTON RD',
    area: 3.2,
    building$: 96300,
    centers: [
      {
        lat: 43.165758656357255,
        lon: -72.05557199911755
      }
    ],
    cu$: 9000,
    land$: 39400,
    owner: 'SEAVEY, EARL REAL ESTATE TRUST',
    taxed$: 144700,
    usage: '110',
    use: 'R1'
  },
  '17-30': {
    address: '201 WILD ACRE DR',
    area: 0.21,
    building$: 43100,
    centers: [
      {
        lat: 43.15289419301625,
        lon: -72.02946875048293
      }
    ],
    cu$: 2500,
    land$: 126500,
    owner: 'CARUSO, JESSIE',
    taxed$: 172100,
    usage: '110',
    use: 'R1W'
  },
  '17-31': {
    address: '197 WILD ACRE DR',
    area: 0.25,
    building$: 73000,
    centers: [
      {
        lat: 43.15279907657326,
        lon: -72.0297796390989
      }
    ],
    cu$: 0,
    land$: 131500,
    owner: 'ALLAN JR, JAMES M',
    taxed$: 204500,
    usage: '110',
    use: 'R1W'
  },
  '19-4': {
    address: '1428 VALLEY RD',
    area: 278,
    building$: 0,
    centers: [
      {
        lat: 43.136734277085765,
        lon: -72.09450363398793
      }
    ],
    cu$: 0,
    land$: 14695,
    owner: 'WILD LAKE ASSOCIATION, INC',
    taxed$: 14695,
    usage: '190',
    use: 'CUUO'
  },
  '19-22': {
    address: '1066 VALLEY RD',
    area: 5.9,
    building$: 300,
    centers: [
      {
        lat: 43.14609269622918,
        lon: -72.10301073166163
      }
    ],
    cu$: 500,
    land$: 29900,
    owner: 'CLARKE, JEFFREY REID',
    taxed$: 30700,
    usage: '110',
    use: 'R1'
  },
  '20-35': {
    address: '419 BAILEY RD',
    area: 0.94,
    building$: 136700,
    centers: [
      {
        lat: 43.14030642975186,
        lon: -72.06537776720396
      }
    ],
    cu$: 0,
    land$: 40100,
    owner: 'MACKERT, LYNN',
    taxed$: 176800,
    usage: '110',
    use: 'R1'
  },
  '20-37': {
    address: '451 BAILEY RD',
    area: 1.1,
    building$: 0,
    centers: [
      {
        lat: 43.139493645718225,
        lon: -72.06517067008508
      }
    ],
    cu$: 0,
    land$: 16300,
    owner: 'KARRMANN, MICHAEL K',
    taxed$: 16300,
    usage: '110',
    use: 'R1'
  },
  '20-40': {
    address: '405 BAILEY RD',
    area: 3,
    building$: 1500,
    centers: [
      {
        lat: 43.1404768438462,
        lon: -72.06386360057226
      },
      {
        lat: 43.140678505479066,
        lon: -72.06285106312545
      }
    ],
    cu$: 100,
    land$: 17400,
    owner: 'ARMEEN, BENEDICT',
    taxed$: 19000,
    usage: '110',
    use: 'R1'
  },
  '20-50': {
    address: '482 BAILEY RD',
    area: 11.4,
    building$: 113100,
    centers: [
      {
        lat: 43.13751211290744,
        lon: -72.06505433303865
      }
    ],
    cu$: 1800,
    land$: 57000,
    owner: 'LINCOLN, MICHELLE',
    taxed$: 171900,
    usage: '110',
    use: 'R1'
  },
  '20-93': {
    address: '400 BAILEY RD',
    area: 6,
    building$: 152100,
    centers: [
      {
        lat: 43.139714944489576,
        lon: -72.06693880591999
      }
    ],
    cu$: 0,
    land$: 45800,
    owner: 'KENDALL, JANE',
    taxed$: 197900,
    usage: '110',
    use: 'R1'
  },
  '20-112': {
    address: '37 WOODPECKER RD',
    area: 3.3,
    building$: 31300,
    centers: [
      {
        lat: 43.14362084526648,
        lon: -72.07143477096204
      }
    ],
    cu$: 0,
    land$: 35600,
    owner: 'REYNHOUT, DAVID',
    taxed$: 66900,
    usage: '110',
    use: 'R1'
  },
  '20-116': {
    address: '178 DOLE SCHOOL HOUSE RD',
    area: 5.07,
    building$: 0,
    centers: [
      {
        lat: 43.14296659981248,
        lon: -72.05292275664534
      }
    ],
    cu$: 0,
    land$: 21900,
    owner: 'TEBO, DAVID M',
    taxed$: 21900,
    usage: '110',
    use: 'R1'
  },
  '20-132': {
    address: '22 WOODPECKER RD',
    area: 3.9,
    building$: 68400,
    centers: [
      {
        lat: 43.1446606962602,
        lon: -72.07173827108743
      }
    ],
    cu$: 9000,
    land$: 28300,
    owner: 'SPITZ, ROBERT A',
    taxed$: 105700,
    usage: '110',
    use: 'R1'
  },
  '20-136': {
    address: '622 HIGHLAND HAVEN RD',
    area: 0.77,
    building$: 104000,
    centers: [
      {
        lat: 43.14652751744502,
        lon: -72.08819811596915
      }
    ],
    cu$: 5000,
    land$: 199100,
    owner: 'PRINCIPE, JOHN F',
    taxed$: 308100,
    usage: '110',
    use: 'R1W'
  },
  '20-184': {
    address: '137 BEAVER BROOK RD',
    area: 7.77,
    building$: 0,
    centers: [
      {
        lat: 43.1454008546067,
        lon: -72.07874011872943
      }
    ],
    cu$: 12300,
    land$: 44700,
    owner: 'KOTFER, KATRINA D',
    taxed$: 57000,
    usage: '110',
    use: 'R1A'
  },
  '22-7': {
    address: '98 NO MAIN ST',
    area: 2.1,
    building$: 151900,
    centers: [
      {
        lat: 43.17854825038362,
        lon: -72.09829494554822
      }
    ],
    cu$: 3000,
    land$: 36557,
    owner: 'CILLEY, DONNA J',
    taxed$: 191457,
    usage: '110',
    use: 'R1'
  },
  '22-8': {
    address: '62 NO MAIN ST',
    area: 2.36,
    building$: 0,
    centers: [
      {
        lat: 43.17787231791899,
        lon: -72.0981618913952
      }
    ],
    cu$: 4500,
    land$: 38300,
    owner: 'WASHINGTON, TOWN OF - LIBRARY ',
    taxed$: 42800,
    usage: '110',
    use: 'R1'
  },
  '22-28': {
    address: '74 HALFMOON PD RD',
    area: 2.97,
    building$: 144300,
    centers: [
      {
        lat: 43.17474284147729,
        lon: -72.09408659580782
      }
    ],
    cu$: 2000,
    land$: 40200,
    owner: 'WILSON, RANDALL AND REBECCA TR',
    taxed$: 186500,
    usage: '110',
    use: 'R1'
  },
  '22-57': {
    address: '31 LEMPSTER MT RD',
    area: 0.48,
    building$: 84800,
    centers: [
      {
        lat: 43.17761031041664,
        lon: -72.10007472793103
      }
    ],
    cu$: 600,
    land$: 37300,
    owner: 'JACKSON, ROBERT S',
    taxed$: 122700,
    usage: '110',
    use: 'R1'
  },
  '22-58': {
    address: '75 LEMPSTER MT RD',
    area: 2.27,
    building$: 270000,
    centers: [
      {
        lat: 43.17871238732566,
        lon: -72.10173985866281
      }
    ],
    cu$: 11000,
    land$: 63600,
    owner: 'WASHINGTON, TOWN OF - FIRE',
    taxed$: 344600,
    usage: '300',
    use: 'EX-M'
  },
  '24-35': {
    address: '1479 VALLEY RD',
    area: 0.35,
    building$: 0,
    centers: [
      {
        lat: 43.14044802092604,
        lon: -72.0916467868287
      }
    ],
    cu$: 0,
    land$: 18000,
    owner: 'MCCULLA, THOMAS BENJAMIN',
    taxed$: 18000,
    usage: '110',
    use: 'R1A'
  },
  '24-54': {
    address: '94 LOOKOUT POINT RD',
    area: 0.11,
    building$: 0,
    centers: [
      {
        lat: 43.14150631912783,
        lon: -72.08868050674393
      }
    ],
    cu$: 1200,
    land$: 38400,
    owner: 'SABINE, ROBIN',
    taxed$: 39600,
    usage: '110',
    use: 'R1W'
  },
  '24-55': {
    address: '90 LOOKOUT POINT RD',
    area: 0.26,
    building$: 32600,
    centers: [
      {
        lat: 43.14130974998186,
        lon: -72.08864099216665
      }
    ],
    cu$: 1800,
    land$: 175300,
    owner: 'MANDIROLA, THERESA Y REV TRUST',
    taxed$: 209700,
    usage: '110',
    use: 'R1W'
  },
  '24-56': {
    address: '80 LOOKOUT POINT RD',
    area: 0.34,
    building$: 38000,
    centers: [
      {
        lat: 43.141036973352,
        lon: -72.08866650682859
      }
    ],
    cu$: 2500,
    land$: 182300,
    owner: 'SMITH, TIMOTHY J',
    taxed$: 222800,
    usage: '110',
    use: 'R1W'
  },
  '24-57': {
    address: '70 LOOKOUT POINT RD',
    area: 0.38,
    building$: 82500,
    centers: [
      {
        lat: 43.14078730407107,
        lon: -72.08856785387823
      }
    ],
    cu$: 4600,
    land$: 182700,
    owner: 'SKOWRONSKI, EUGENE & WIESLAWA',
    taxed$: 269800,
    usage: '110',
    use: 'R1W'
  },
  '24-63': {
    address: '22 LOOKOUT POINT RD',
    area: 0.25,
    building$: 40800,
    centers: [
      {
        lat: 43.14016669015692,
        lon: -72.08705672313147
      }
    ],
    cu$: 2600,
    land$: 166500,
    owner: 'BURLAMACHI, TRACY',
    taxed$: 209900,
    usage: '110',
    use: 'R1W'
  },
  '24-65': {
    address: '14 LOOKOUT POINT RD',
    area: 0.21,
    building$: 82700,
    centers: [
      {
        lat: 43.139909472598745,
        lon: -72.08698692410252
      }
    ],
    cu$: 700,
    land$: 162900,
    owner: 'DEFOSSE, DAVID R',
    taxed$: 246300,
    usage: '110',
    use: 'R1W'
  },
  '24-66': {
    address: '2 LOOKOUT POINT RD',
    area: 0.5,
    building$: 0,
    centers: [
      {
        lat: 43.1397062578442,
        lon: -72.08693696424142
      }
    ],
    cu$: 0,
    land$: 173600,
    owner: 'FIORAVANTI, MARY E.',
    taxed$: 173600,
    usage: '110',
    use: 'R1W'
  },
  '24-68': {
    address: '26 LAKEVIEW TERR',
    area: 1.6,
    building$: 0,
    centers: [
      {
        lat: 43.14156796210034,
        lon: -72.09036092110979
      }
    ],
    cu$: 0,
    land$: 103200,
    owner: 'HOGAN, ARTHUR & STACEY',
    taxed$: 103200,
    usage: '110',
    use: 'R1W'
  },
  '24-70': {
    address: '40 LAKEVIEW TERR',
    area: 2.2,
    building$: 75400,
    centers: [
      {
        lat: 43.14243050704889,
        lon: -72.08974654717333
      }
    ],
    cu$: 15400,
    land$: 213800,
    owner: 'LACASSE, TAKODA TAMARA LIVING ',
    taxed$: 304600,
    usage: '110',
    use: 'R1'
  },
  '24-72': {
    address: '54 LAKEVIEW TERR',
    area: 0.28,
    building$: 64900,
    centers: [
      {
        lat: 43.142720766985704,
        lon: -72.09013399728761
      }
    ],
    cu$: 600,
    land$: 163200,
    owner: 'DEMORE, W G & DEMORE JR, W G',
    taxed$: 228700,
    usage: '110',
    use: 'R1W'
  },
  '24-74': {
    address: '62 LAKEVIEW TERR',
    area: 0.46,
    building$: 84000,
    centers: [
      {
        lat: 43.143000838999065,
        lon: -72.08996359436955
      }
    ],
    cu$: 11000,
    land$: 176700,
    owner: 'MASENG REV TRUST, BERYL M',
    taxed$: 271700,
    usage: '110',
    use: 'R1W'
  },
  '24-75': {
    address: '70 LAKEVIEW TERR',
    area: 0.23,
    building$: 127400,
    centers: [
      {
        lat: 43.14320853204169,
        lon: -72.08996545004203
      }
    ],
    cu$: 5200,
    land$: 158800,
    owner: 'MURRAY, FRANCIS AND RANDI',
    taxed$: 291400,
    usage: '110',
    use: 'R1W'
  },
  '24-76': {
    address: '74 LAKEVIEW TERR',
    area: 0.3,
    building$: 30800,
    centers: [
      {
        lat: 43.14338873418065,
        lon: -72.08989009074685
      }
    ],
    cu$: 4900,
    land$: 183400,
    owner: 'BAKER, DAVID',
    taxed$: 219100,
    usage: '110',
    use: 'R1W'
  },
  '24-91': {
    address: '54 BIRCH POINT WAY',
    area: 0.22,
    building$: 105900,
    centers: [
      {
        lat: 43.14558034394902,
        lon: -72.09003181398467
      }
    ],
    cu$: 0,
    land$: 155600,
    owner: 'BOLOGNA, ALFRED',
    taxed$: 261500,
    usage: '110',
    use: 'R1W'
  },
  '24-94': {
    address: '51 BIRCH POINT WAY',
    area: 0.72,
    building$: 110800,
    centers: [
      {
        lat: 43.14553040954072,
        lon: -72.0908005935839
      }
    ],
    cu$: 0,
    land$: 206100,
    owner: 'DUMAS, DAVID J',
    taxed$: 316900,
    usage: '110',
    use: 'R1W'
  },
  '24-96': {
    address: '21 BIRCH POINT WAY',
    area: 0.31,
    building$: 25200,
    centers: [
      {
        lat: 43.14523381514684,
        lon: -72.09116589576752
      }
    ],
    cu$: 3100,
    land$: 157800,
    owner: "WALLY'S WORLD 2021 FAMILY TRUS",
    taxed$: 186100,
    usage: '110',
    use: 'R1W'
  },
  '24-99': {
    address: '11 BIRCH POINT WAY',
    area: 0.31,
    building$: 133500,
    centers: [
      {
        lat: 43.14515382415934,
        lon: -72.09152908486493
      }
    ],
    cu$: 2500,
    land$: 147800,
    owner: 'COBLEIGH COVE TRUST',
    taxed$: 283800,
    usage: '110',
    use: 'R1W'
  },
  '24-100': {
    address: '48 COVE RD',
    area: 0.12,
    building$: 65400,
    centers: [
      {
        lat: 43.145347636704386,
        lon: -72.09168993708803
      }
    ],
    cu$: 0,
    land$: 149100,
    owner: 'SHATNEY, GARY AND PAMELA',
    taxed$: 214500,
    usage: '110',
    use: 'R1W'
  },
  '24-101': {
    address: '52 COVE RD',
    area: 0.12,
    building$: 51600,
    centers: [
      {
        lat: 43.145480827704056,
        lon: -72.09172525071122
      }
    ],
    cu$: 900,
    land$: 150800,
    owner: 'BEARCE JR, WILLIAM',
    taxed$: 203300,
    usage: '110',
    use: 'R1W'
  },
  '24-102': {
    address: '58 COVE RD',
    area: 0.13,
    building$: 29000,
    centers: [
      {
        lat: 43.14559987220705,
        lon: -72.0917863562093
      }
    ],
    cu$: 900,
    land$: 153400,
    owner: 'HOWES, DAVID W',
    taxed$: 183300,
    usage: '110',
    use: 'R1W'
  },
  '24-103': {
    address: '62 COVE RD',
    area: 0.12,
    building$: 18400,
    centers: [
      {
        lat: 43.14574162336173,
        lon: -72.09185372542058
      }
    ],
    cu$: 500,
    land$: 143800,
    owner: 'DOYLE, JAMES M.',
    taxed$: 162700,
    usage: '110',
    use: 'R1W'
  },
  '24-104': {
    address: '70 COVE RD',
    area: 0.16,
    building$: 30700,
    centers: [
      {
        lat: 43.1459351703451,
        lon: -72.09191360445568
      }
    ],
    cu$: 4000,
    land$: 151600,
    owner: 'WEAVER, ANN',
    taxed$: 186300,
    usage: '110',
    use: 'R1W'
  },
  '24-105': {
    address: '80 COVE RD',
    area: 0.1,
    building$: 39400,
    centers: [
      {
        lat: 43.14616189605665,
        lon: -72.09189928785564
      }
    ],
    cu$: 0,
    land$: 147800,
    owner: 'BUCHANAN, KEVIN J',
    taxed$: 187200,
    usage: '110',
    use: 'R1W'
  },
  '24-109': {
    address: '140 COVE RD',
    area: 0.45,
    building$: 42100,
    centers: [
      {
        lat: 43.14702281897864,
        lon: -72.09332535983839
      }
    ],
    cu$: 8500,
    land$: 173700,
    owner: 'MANDARANO, ANTHONY P',
    taxed$: 224300,
    usage: '110',
    use: 'R1W'
  },
  '24-110': {
    address: '146 COVE RD',
    area: 0.2,
    building$: 55500,
    centers: [
      {
        lat: 43.147193137442066,
        lon: -72.09319735195443
      }
    ],
    cu$: 2100,
    land$: 154200,
    owner: 'SCHULTZ, KENNETH',
    taxed$: 211800,
    usage: '110',
    use: 'R1W'
  },
  '24-111': {
    address: '156 COVE RD',
    area: 0.43,
    building$: 157800,
    centers: [
      {
        lat: 43.147480628934204,
        lon: -72.09341738958855
      }
    ],
    cu$: 4500,
    land$: 189400,
    owner: 'REVANE, DONALD W',
    taxed$: 351700,
    usage: '110',
    use: 'R1W'
  },
  '24-112': {
    address: '166 COVE RD',
    area: 0.23,
    building$: 84100,
    centers: [
      {
        lat: 43.14778803817021,
        lon: -72.09353354320713
      }
    ],
    cu$: 15200,
    land$: 179700,
    owner: 'KROCHUNE, JAMES J',
    taxed$: 279000,
    usage: '110',
    use: 'R1W'
  },
  '24-113': {
    address: '178 COVE RD',
    area: 0.17,
    building$: 99900,
    centers: [
      {
        lat: 43.14798236457101,
        lon: -72.09351920224273
      }
    ],
    cu$: 0,
    land$: 179700,
    owner: 'MAYNARD, KAREN D REVOCABLE TRU',
    taxed$: 279600,
    usage: '110',
    use: 'R1W'
  },
  '24-118': {
    address: '175 COVE RD',
    area: 0.52,
    building$: 0,
    centers: [
      {
        lat: 43.148038414788836,
        lon: -72.09413995320767
      }
    ],
    cu$: 0,
    land$: 15000,
    owner: 'REVANE, DONALD W',
    taxed$: 15000,
    usage: '110',
    use: 'R1A'
  },
  '24-124': {
    address: '53 COVE RD',
    area: 0.34,
    building$: 0,
    centers: [
      {
        lat: 43.145224596664264,
        lon: -72.0922553397699
      }
    ],
    cu$: 2600,
    land$: 20100,
    owner: 'BEARCE JR, WILLIAM',
    taxed$: 22700,
    usage: '110',
    use: 'R1A'
  },
  '24-125': {
    address: '3 POINT ISLAND',
    area: 0.31,
    building$: 29400,
    centers: [
      {
        lat: 43.145555771604954,
        lon: -72.0885828472269
      }
    ],
    cu$: 1500,
    land$: 121400,
    owner: 'NADEAU FAMILY TRUST, R & L',
    taxed$: 152300,
    usage: '110',
    use: 'R1W'
  },
  '24-126': {
    address: '2 POINT ISLAND',
    area: 0.29,
    building$: 20400,
    centers: [
      {
        lat: 43.145207308141366,
        lon: -72.08873254357167
      }
    ],
    cu$: 1000,
    land$: 121200,
    owner: 'BARNES, DEBORAH',
    taxed$: 142600,
    usage: '110',
    use: 'R1'
  },
  '24-127': {
    address: '1 POINT ISLAND',
    area: 0.48,
    building$: 28600,
    centers: [
      {
        lat: 43.144873557590756,
        lon: -72.08860319899655
      }
    ],
    cu$: 800,
    land$: 122400,
    owner: 'FLETCHER, EDWARD THOMAS',
    taxed$: 151800,
    usage: '110',
    use: 'R1'
  },
  '25-9': {
    address: '1652 VALLEY RD',
    area: 0.28,
    building$: 12800,
    centers: [
      {
        lat: 43.139113109788305,
        lon: -72.08787380752987
      }
    ],
    cu$: 1100,
    land$: 35300,
    owner: 'DELOTTINVILLE, DON',
    taxed$: 49200,
    usage: '110',
    use: 'R1A'
  },
  '25-30': {
    address: '1854 VALLEY RD',
    area: 0.46,
    building$: 0,
    centers: [
      {
        lat: 43.135096614431625,
        lon: -72.08833119827369
      }
    ],
    cu$: 0,
    land$: 18600,
    owner: 'DURIS, ROBERT A',
    taxed$: 18600,
    usage: '110',
    use: 'R1A'
  },
  '25-36': {
    address: '2020 VALLEY RD',
    area: 0.33,
    building$: 17100,
    centers: [
      {
        lat: 43.13036512793403,
        lon: -72.08820434793147
      }
    ],
    cu$: 1900,
    land$: 35800,
    owner: 'PROCTOR FAMILY TRUST',
    taxed$: 54800,
    usage: '110',
    use: 'R1A'
  },
  '25-40': {
    address: '2060 VALLEY RD',
    area: 0.63,
    building$: 41000,
    centers: [
      {
        lat: 43.130165838358025,
        lon: -72.08702870826228
      }
    ],
    cu$: 1700,
    land$: 38300,
    owner: "O'ROURKE FAMILY TRUST",
    taxed$: 81000,
    usage: '110',
    use: 'R1A'
  },
  '25-41': {
    address: '2078 VALLEY RD',
    area: 0.35,
    building$: 0,
    centers: [
      {
        lat: 43.13028157453683,
        lon: -72.08656067337857
      }
    ],
    cu$: 3900,
    land$: 18000,
    owner: 'MORRISON, RONALD',
    taxed$: 21900,
    usage: '110',
    use: 'R1A'
  },
  '25-42': {
    address: '24 HEMLOCK CIR',
    area: 0.955,
    building$: 34800,
    centers: [
      {
        lat: 43.13007866855237,
        lon: -72.08589182964216
      }
    ],
    cu$: 1100,
    land$: 36200,
    owner: 'KAMON, MATTAN',
    taxed$: 72100,
    usage: '110',
    use: 'R1A'
  },
  '25-46': {
    address: '2183 VALLEY RD',
    area: 0.24,
    building$: 48000,
    centers: [
      {
        lat: 43.13014918172435,
        lon: -72.08413336972598
      }
    ],
    cu$: 5700,
    land$: 169000,
    owner: 'VADNEY FAMILY IRREVOCABLE TRUS',
    taxed$: 222700,
    usage: '110',
    use: 'R1W'
  },
  '25-49': {
    address: '2167 VALLEY RD',
    area: 0.28,
    building$: 22800,
    centers: [
      {
        lat: 43.13052853032707,
        lon: -72.08393692819092
      }
    ],
    cu$: 2100,
    land$: 181800,
    owner: 'DIONNE, SANDRA, TRUSTEE',
    taxed$: 206700,
    usage: '110',
    use: 'R1W'
  },
  '25-57': {
    address: '2127 VALLEY RD',
    area: 0.16,
    building$: 11900,
    centers: [
      {
        lat: 43.13166076508705,
        lon: -72.08483759369685
      }
    ],
    cu$: 2900,
    land$: 158400,
    owner: 'NIMBLETT, MARY A',
    taxed$: 173200,
    usage: '110',
    use: 'R1W'
  },
  '25-72': {
    address: '49 HEMLOCK CIR',
    area: 0.17,
    building$: 7600,
    centers: [
      {
        lat: 43.13092430055819,
        lon: -72.0853107136012
      }
    ],
    cu$: 0,
    land$: 21600,
    owner: 'BEAN, HARLAN R.',
    taxed$: 29200,
    usage: '110',
    use: 'R1A'
  },
  '25-73': {
    address: '41 HEMLOCK CIR',
    area: 0.17,
    building$: 88100,
    centers: [
      {
        lat: 43.13076655330223,
        lon: -72.08547641028778
      }
    ],
    cu$: 3500,
    land$: 27000,
    owner: 'BEAN, HARLAN R.',
    taxed$: 118600,
    usage: '110',
    use: 'R1A'
  },
  '25-84': {
    address: '2027 VALLEY RD',
    area: 0.26,
    building$: 77300,
    centers: [
      {
        lat: 43.130858611552846,
        lon: -72.0879523452402
      }
    ],
    cu$: 4800,
    land$: 38600,
    owner: 'BERRY, HELEN REVOCABLE TRUST',
    taxed$: 120700,
    usage: '110',
    use: 'R1A'
  },
  '25-85': {
    address: '2017 VALLEY RD',
    area: 1.09,
    building$: 36400,
    centers: [
      {
        lat: 43.131368703433814,
        lon: -72.0876516070705
      }
    ],
    cu$: 5100,
    land$: 212500,
    owner: 'SCARNEO, COLLEEN E. REVOCABLE ',
    taxed$: 254000,
    usage: '110',
    use: 'R1'
  },
  '25-93': {
    address: '1901 VALLEY RD',
    area: 0.86,
    building$: 87500,
    centers: [
      {
        lat: 43.13355122813885,
        lon: -72.08805847178225
      }
    ],
    cu$: 3500,
    land$: 174700,
    owner: 'JOHNSON, STEWART',
    taxed$: 265700,
    usage: '110',
    use: 'R1W'
  },
  '25-94': {
    address: '1891 VALLEY RD',
    area: 1.18,
    building$: 83700,
    centers: [
      {
        lat: 43.1338333657484,
        lon: -72.08788127390747
      }
    ],
    cu$: 18000,
    land$: 225800,
    owner: 'SEYFFERT, ANNE',
    taxed$: 327500,
    usage: '110',
    use: 'R1W'
  },
  '25-95': {
    address: '1883 VALLEY RD',
    area: 0.37,
    building$: 48700,
    centers: [
      {
        lat: 43.13414747555468,
        lon: -72.0882402187149
      }
    ],
    cu$: 2100,
    land$: 151200,
    owner: 'ALLARD, RONALD E',
    taxed$: 202000,
    usage: '110',
    use: 'R1'
  },
  '25-97': {
    address: '1853 VALLEY RD',
    area: 0.25,
    building$: 55500,
    centers: [
      {
        lat: 43.13466328232053,
        lon: -72.08776570209054
      }
    ],
    cu$: 9200,
    land$: 165000,
    owner: 'DURIS, ROBERT A',
    taxed$: 229700,
    usage: '110',
    use: 'R1W'
  },
  '25-98': {
    address: '1841 VALLEY RD',
    area: 0.13,
    building$: 39800,
    centers: [
      {
        lat: 43.13487173778931,
        lon: -72.08748117747442
      }
    ],
    cu$: 0,
    land$: 153000,
    owner: 'KUNTZ, JAMES R.',
    taxed$: 192800,
    usage: '110',
    use: 'R1'
  },
  '25-118': {
    address: '2133 VALLEY RD',
    area: 0.13,
    building$: 0,
    centers: [
      {
        lat: 43.13158710559082,
        lon: -72.08466484047841
      }
    ],
    cu$: 0,
    land$: 91900,
    owner: 'TREPANIER, MARCEL',
    taxed$: 91900,
    usage: '110',
    use: 'R1W'
  },
  '11-49': {
    address: '660 MILLEN POND RD',
    area: 0.95,
    building$: 27200,
    centers: [
      {
        lat: 43.16986663441058,
        lon: -72.12256614597727
      }
    ],
    cu$: 1100,
    land$: 165200,
    owner: 'FRATEA JR, FRANK A',
    taxed$: 193500,
    usage: '110',
    use: 'R1W'
  },
  '14-89': {
    address: 'JEFFERSON DR',
    area: 0.7,
    building$: 0,
    centers: [
      {
        lat: 43.16096489505745,
        lon: -72.14820500906012
      }
    ],
    cu$: 0,
    land$: 10800,
    owner: 'WYNNE, DAVID D',
    taxed$: 10800,
    usage: '110',
    use: 'R1'
  },
  '14-456': {
    address: 'HUNTLEY MT RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.154148436352216,
        lon: -72.1632321397392
      }
    ],
    cu$: 0,
    land$: 19800,
    owner: 'HEBERT, MICHELLE E',
    taxed$: 19800,
    usage: '110',
    use: 'R1'
  },
  '6-3': {
    address: 'AYERS POND RD',
    area: 42,
    building$: 0,
    centers: [
      {
        lat: 43.22122920153929,
        lon: -72.04118589889134
      }
    ],
    cu$: 0,
    land$: 3358,
    owner: 'BIBBO, G EDWARD',
    taxed$: 3358,
    usage: '190',
    use: 'CUUW'
  },
  '6-7': {
    address: 'AYERS POND RD',
    area: 53,
    building$: 0,
    centers: [
      {
        lat: 43.21402661525643,
        lon: -72.03591657635977
      }
    ],
    cu$: 0,
    land$: 2218,
    owner: 'COHEN, HARVEY',
    taxed$: 2218,
    usage: '190',
    use: 'CUUO'
  },
  '7-10': {
    address: 'TWIN BRIDGE RD',
    area: 55,
    building$: 0,
    centers: [
      {
        lat: 43.20156609934848,
        lon: -72.12031746550993
      },
      {
        lat: 43.199707296119065,
        lon: -72.11833807001223
      }
    ],
    cu$: 0,
    land$: 3200,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 3200,
    usage: '501',
    use: 'EX-M'
  },
  '7-8': {
    address: 'LEMPSTER MT RD',
    area: 13.5,
    building$: 0,
    centers: [
      {
        lat: 43.19609388986348,
        lon: -72.12151489296906
      }
    ],
    cu$: 0,
    land$: 1338,
    owner: 'LABORE, ANDRE',
    taxed$: 1338,
    usage: '190',
    use: 'CUUW'
  },
  '7-20': {
    address: 'WASHINGTON HGTS RD',
    area: 9.3,
    building$: 0,
    centers: [
      {
        lat: 43.19820275187199,
        lon: -72.1172756255556
      }
    ],
    cu$: 0,
    land$: 26900,
    owner: 'JARZOMBEK, ANTHONY P TRUSTEE',
    taxed$: 26900,
    usage: '110',
    use: 'R1'
  },
  '7-30': {
    address: 'MARYS LN',
    area: 2.4,
    building$: 0,
    centers: [
      {
        lat: 43.19141224362086,
        lon: -72.11559529712385
      }
    ],
    cu$: 1400,
    land$: 22200,
    owner: 'SHAMALY, JANE ELLEN',
    taxed$: 23600,
    usage: '110',
    use: 'R1'
  },
  '7-38': {
    address: 'WASHINGTON HGTS RD',
    area: 6.3,
    building$: 0,
    centers: [
      {
        lat: 43.19565850638292,
        lon: -72.11343215057218
      }
    ],
    cu$: 0,
    land$: 22400,
    owner: 'KUTRUBES, DORIA',
    taxed$: 22400,
    usage: '110',
    use: 'R1'
  },
  '7-54': {
    address: 'NO MAIN ST',
    area: 35,
    building$: 0,
    centers: [
      {
        lat: 43.19559812457468,
        lon: -72.10308063050546
      }
    ],
    cu$: 0,
    land$: 1588,
    owner: 'MALLARD, KENNETH A',
    taxed$: 1588,
    usage: '190',
    use: 'CUUH'
  },
  '7-60': {
    address: 'LEMPSTER MT RD',
    area: 16,
    building$: 0,
    centers: [
      {
        lat: 43.19446530876391,
        lon: -72.11994086653098
      }
    ],
    cu$: 0,
    land$: 1610,
    owner: 'THIBAULT, JON',
    taxed$: 1610,
    usage: '190',
    use: 'CUUW'
  },
  '7-62': {
    address: 'LEMPSTER MT RD',
    area: 3,
    building$: 0,
    centers: [
      {
        lat: 43.19176245939578,
        lon: -72.11902547270452
      }
    ],
    cu$: 0,
    land$: 26100,
    owner: 'UTH, CHAMROEUN',
    taxed$: 26100,
    usage: '110',
    use: 'R1'
  },
  '8-12': {
    address: 'HALFMOON PD RD',
    area: 10.7,
    building$: 0,
    centers: [
      {
        lat: 43.20312628780452,
        lon: -72.0759067422913
      }
    ],
    cu$: 0,
    land$: 24429,
    owner: 'WEST TRUST, KATHLEEN M REV',
    taxed$: 24429,
    usage: '110',
    use: 'R1'
  },
  '8-13': {
    address: 'HALFMOON PD RD',
    area: 13,
    building$: 0,
    centers: [
      {
        lat: 43.20408581535744,
        lon: -72.07560853482488
      }
    ],
    cu$: 300,
    land$: 583,
    owner: 'BRIDSCHGE, MARK A',
    taxed$: 883,
    usage: '190',
    use: 'CUUO'
  },
  '8-19': {
    address: '11 MARTIN RD',
    area: 5.5,
    building$: 69600,
    centers: [
      {
        lat: 43.20853358289098,
        lon: -72.07606704939613
      }
    ],
    cu$: 13800,
    land$: 38800,
    owner: 'PUTNAM, BRUCE',
    taxed$: 122200,
    usage: '110',
    use: 'R1'
  },
  '8-20': {
    address: 'HALFMOON PD RD',
    area: 7,
    building$: 0,
    centers: [
      {
        lat: 43.20952281696984,
        lon: -72.07684082440115
      }
    ],
    cu$: 0,
    land$: 23400,
    owner: 'DUFOE, DAVID L. TRUSTEE DUFOE ',
    taxed$: 23400,
    usage: '110',
    use: 'R1'
  },
  '8-21': {
    address: 'MARTIN RD',
    area: 13,
    building$: 0,
    centers: [
      {
        lat: 43.21022971724146,
        lon: -72.07411438167239
      }
    ],
    cu$: 0,
    land$: 608,
    owner: 'PUTNAM, BRUCE',
    taxed$: 608,
    usage: '110',
    use: 'R1'
  },
  '8-29': {
    address: 'MARTIN RD',
    area: 11.8,
    building$: 0,
    centers: [
      {
        lat: 43.2114455012112,
        lon: -72.06365318431286
      }
    ],
    cu$: 0,
    land$: 19853,
    owner: 'MILLER, PETER J',
    taxed$: 19853,
    usage: '110',
    use: 'R1'
  },
  '8-44': {
    address: 'LOVELL MT RD',
    area: 82,
    building$: 0,
    centers: [
      {
        lat: 43.19198488276666,
        lon: -72.0556504939639
      }
    ],
    cu$: 0,
    land$: 2497,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 2497,
    usage: '190',
    use: 'CUMH'
  },
  '8-45': {
    address: 'LOVELL MT RD',
    area: 132,
    building$: 0,
    centers: [
      {
        lat: 43.19248873157289,
        lon: -72.07103483516514
      }
    ],
    cu$: 0,
    land$: 10453,
    owner: 'BATES III, JOHN',
    taxed$: 10453,
    usage: '190',
    use: 'CUUW'
  },
  '9-4': {
    address: 'AYERS POND RD',
    area: 60,
    building$: 0,
    centers: [
      {
        lat: 43.21050873183969,
        lon: -72.03281188452641
      }
    ],
    cu$: 0,
    land$: 4095,
    owner: 'SULLIVAN REV TRUST, ANDREA',
    taxed$: 4095,
    usage: '190',
    use: 'CUUW'
  },
  '9-5': {
    address: 'AYERS POND RD',
    area: 12.5,
    building$: 0,
    centers: [
      {
        lat: 43.207841996890316,
        lon: -72.03520680091714
      }
    ],
    cu$: 0,
    land$: 547,
    owner: 'PHILLIPS, DAVID',
    taxed$: 547,
    usage: '190',
    use: 'CUUO'
  },
  '9-8': {
    address: 'AYERS POND RD',
    area: 11.38,
    building$: 0,
    centers: [
      {
        lat: 43.198940073971436,
        lon: -72.02791647546117
      }
    ],
    cu$: 0,
    land$: 498,
    owner: 'PORTER, BENJAMIN C',
    taxed$: 498,
    usage: '190',
    use: 'CUUO'
  },
  '9-15': {
    address: 'AYERS POND RD',
    area: 18.65,
    building$: 0,
    centers: [
      {
        lat: 43.19716540388846,
        lon: -72.02917693831198
      }
    ],
    cu$: 0,
    land$: 3377,
    owner: 'ROBINSON, SANDRA J REV TRUST',
    taxed$: 3377,
    usage: '190',
    use: 'CUFL'
  },
  '9-17': {
    address: '54 AYERS POND RD',
    area: 8.5,
    building$: 0,
    centers: [
      {
        lat: 43.19426570596048,
        lon: -72.0297856666256
      }
    ],
    cu$: 13100,
    land$: 31568,
    owner: 'FRANCE, PETER',
    taxed$: 44668,
    usage: '110',
    use: 'R1'
  },
  '9-22': {
    address: 'E WASHINGTON RD',
    area: 2,
    building$: 0,
    centers: [
      {
        lat: 43.191269845754675,
        lon: -72.0329379473092
      }
    ],
    cu$: 0,
    land$: 697,
    owner: 'GARVIN, MARIANNE AND JAMES',
    taxed$: 697,
    usage: '190',
    use: 'CUFL'
  },
  '9-24': {
    address: 'E WASHINGTON RD',
    area: 17.5,
    building$: 0,
    centers: [
      {
        lat: 43.19325566793145,
        lon: -72.03238119338184
      }
    ],
    cu$: 22200,
    land$: 36651,
    owner: 'GARVIN, MARIANNE AND JAMES',
    taxed$: 58851,
    usage: '110',
    use: 'R1'
  },
  '9-25': {
    address: 'AYERS POND RD',
    area: 15.75,
    building$: 0,
    centers: [
      {
        lat: 43.19897079930749,
        lon: -72.03167736278674
      }
    ],
    cu$: 0,
    land$: 1058,
    owner: 'MCGRANAHAN, DAVID',
    taxed$: 1058,
    usage: '190',
    use: 'CUUH'
  },
  '9-27': {
    address: 'AYERS POND RD',
    area: 11.2,
    building$: 0,
    centers: [
      {
        lat: 43.20209736157347,
        lon: -72.0312128131856
      }
    ],
    cu$: 0,
    land$: 1483,
    owner: 'SPROUL, JOHN B',
    taxed$: 1483,
    usage: '190',
    use: 'CUUW'
  },
  '9-28': {
    address: '487 AYERS POND RD',
    area: 22,
    building$: 0,
    centers: [
      {
        lat: 43.203888077423464,
        lon: -72.03336151697978
      }
    ],
    cu$: 20000,
    land$: 7736,
    owner: 'MARSHALL, THOMAS & LINDA  REVO',
    taxed$: 27736,
    usage: '110',
    use: 'R1'
  },
  '9-31': {
    address: 'OFF SUGAR HOUSE RD',
    area: 122,
    building$: 0,
    centers: [
      {
        lat: 43.204049642608666,
        lon: -72.04897242184897
      }
    ],
    cu$: 0,
    land$: 3900,
    owner: 'BUTLER MOUNTAIN HOLDINGS, LLC',
    taxed$: 3900,
    usage: '190',
    use: 'CUMW'
  },
  '9-32': {
    address: 'SUGAR HOUSE RD',
    area: 4.75,
    building$: 0,
    centers: [
      {
        lat: 43.196328860775274,
        lon: -72.04707626741558
      }
    ],
    cu$: 0,
    land$: 34900,
    owner: 'WASHINGTON, TOWN OF - DPWH',
    taxed$: 34900,
    usage: '300',
    use: 'EX-M'
  },
  '9-45': {
    address: 'LOVELL MT RD',
    area: 55,
    building$: 0,
    centers: [
      {
        lat: 43.191145006346304,
        lon: -72.04942484786251
      }
    ],
    cu$: 0,
    land$: 3303,
    owner: 'BLAKNEY, KAREN A',
    taxed$: 3303,
    usage: '190',
    use: 'CUUH'
  },
  '9-46': {
    address: '211 LOVELL MT RD',
    area: 4,
    building$: 46500,
    centers: [
      {
        lat: 43.192069243184136,
        lon: -72.04424769728212
      }
    ],
    cu$: 0,
    land$: 36000,
    owner: 'DANTAS, CYNTHIA',
    taxed$: 82500,
    usage: '110',
    use: 'R1'
  },
  '9-55': {
    address: 'SUGAR HOUSE RD',
    area: 7.1,
    building$: 0,
    centers: [
      {
        lat: 43.19815063277776,
        lon: -72.04670655252919
      }
    ],
    cu$: 0,
    land$: 449,
    owner: 'BLAKNEY, JOHN G, LOIS, & SUSAN',
    taxed$: 449,
    usage: '190',
    use: 'CUUH'
  },
  '9-64': {
    address: 'AYERS POND RD',
    area: 18.86,
    building$: 0,
    centers: [
      {
        lat: 43.198160262142046,
        lon: -72.02547332843255
      }
    ],
    cu$: 0,
    land$: 1955,
    owner: 'PORTER, WILLIAM G',
    taxed$: 1955,
    usage: '190',
    use: 'CUUW'
  },
  '10-7': {
    address: 'ASHUELOT DR',
    area: 1.21,
    building$: 0,
    centers: [
      {
        lat: 43.17534701190174,
        lon: -72.14609972870575
      }
    ],
    cu$: 0,
    land$: 17100,
    owner: 'BONO,JEREMY L & JACQUELINE A',
    taxed$: 17100,
    usage: '110',
    use: 'R1'
  },
  '10-14': {
    address: 'ASHUELOT DR',
    area: 0.97,
    building$: 0,
    centers: [
      {
        lat: 43.1756863220932,
        lon: -72.14979506004092
      }
    ],
    cu$: 0,
    land$: 44400,
    owner: 'THOMPSON, EDWARD',
    taxed$: 44400,
    usage: '110',
    use: 'R1'
  },
  '10-17': {
    address: 'ASHUELOT DR',
    area: 2.5,
    building$: 0,
    centers: [
      {
        lat: 43.17567096515815,
        lon: -72.15169013651769
      }
    ],
    cu$: 0,
    land$: 73100,
    owner: 'ANDERSON REVOCABLE TRUST',
    taxed$: 73100,
    usage: '110',
    use: 'R1'
  },
  '10-24': {
    address: 'MCKINNON RD',
    area: 2.4,
    building$: 0,
    centers: [
      {
        lat: 43.17333983356194,
        lon: -72.15399650037745
      }
    ],
    cu$: 0,
    land$: 57,
    owner: 'SCHNEIDER FAMILY REVOCABLE TRU',
    taxed$: 57,
    usage: '190',
    use: 'CUMO'
  },
  '10-25': {
    address: 'MCKINNON RD',
    area: 14.5,
    building$: 0,
    centers: [
      {
        lat: 43.17551153424276,
        lon: -72.1548276963496
      }
    ],
    cu$: 0,
    land$: 1261,
    owner: 'SCHNEIDER FAMILY REVOCABLE TRU',
    taxed$: 1261,
    usage: '190',
    use: 'CUMO'
  },
  '10-26': {
    address: 'MCKINNON RD',
    area: 19.5,
    building$: 0,
    centers: [
      {
        lat: 43.17489913033046,
        lon: -72.15857079717301
      }
    ],
    cu$: 0,
    land$: 1248,
    owner: 'THOMPSON, ROBERT',
    taxed$: 1248,
    usage: '190',
    use: 'CUUW'
  },
  '10-27': {
    address: 'MCKINNON RD',
    area: 77.6,
    building$: 0,
    centers: [
      {
        lat: 43.170345015456014,
        lon: -72.159226800825
      }
    ],
    cu$: 0,
    land$: 2790,
    owner: 'SCHNEIDER FAMILY REVOCABLE TRU',
    taxed$: 2790,
    usage: '190',
    use: 'CUMH'
  },
  '10-28': {
    address: 'MCKINNON RD',
    area: 1.9,
    building$: 0,
    centers: [
      {
        lat: 43.17193817977273,
        lon: -72.15254381117504
      }
    ],
    cu$: 0,
    land$: 95100,
    owner: 'SCHNEIDER FAMILY REVOCABLE TRU',
    taxed$: 95100,
    usage: '110',
    use: 'R1A'
  },
  '10-49': {
    address: 'ASHUELOT DR',
    area: 1.66,
    building$: 0,
    centers: [
      {
        lat: 43.171311790342514,
        lon: -72.14989243441363
      }
    ],
    cu$: 0,
    land$: 23700,
    owner: 'HALL, RICHARD GARY',
    taxed$: 23700,
    usage: '110',
    use: 'R1A'
  },
  '11-1': {
    address: '324 OLD BURBANK RD',
    area: 12,
    building$: 0,
    centers: [
      {
        lat: 43.18851983543927,
        lon: -72.12012112791831
      }
    ],
    cu$: 700,
    land$: 17746,
    owner: 'KLOHS, JEROME D',
    taxed$: 18446,
    usage: '110',
    use: 'R1'
  },
  '11-2': {
    address: 'OLD BURBANK RD',
    area: 24,
    building$: 0,
    centers: [
      {
        lat: 43.186010588520624,
        lon: -72.119962320866
      }
    ],
    cu$: 0,
    land$: 910,
    owner: 'GRAHAM, R L',
    taxed$: 910,
    usage: '190',
    use: 'CUUH'
  },
  '11-9': {
    address: 'OLD MARLOW RD',
    area: 244.45,
    building$: 0,
    centers: [
      {
        lat: 43.18120179859135,
        lon: -72.1293900369632
      }
    ],
    cu$: 0,
    land$: 8116,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 8116,
    usage: '190',
    use: 'CUMH'
  },
  '11-12': {
    address: 'OLD MARLOW RD',
    area: 10,
    building$: 0,
    centers: [
      {
        lat: 43.17181779806993,
        lon: -72.12669104904991
      }
    ],
    cu$: 0,
    land$: 1325,
    owner: 'CUMMINGS, ADAM G',
    taxed$: 1325,
    usage: '190',
    use: 'CUUW'
  },
  '11-16': {
    address: 'OLD MARLOW RD',
    area: 19,
    building$: 0,
    centers: [
      {
        lat: 43.18031940098089,
        lon: -72.11704111057216
      }
    ],
    cu$: 0,
    land$: 2245,
    owner: 'MACNEIL FARM',
    taxed$: 2245,
    usage: '190',
    use: 'CUFL'
  },
  '11-29': {
    address: 'NO MAIN ST',
    area: 20.22,
    building$: 0,
    centers: [
      {
        lat: 43.18447398054397,
        lon: -72.10528854455092
      }
    ],
    cu$: 0,
    land$: 1118,
    owner: 'TWEEDY, MEGHAN',
    taxed$: 1118,
    usage: '190',
    use: 'CUUH'
  },
  '11-32': {
    address: '398 NO MAIN ST',
    area: 41.8,
    building$: 21400,
    centers: [
      {
        lat: 43.18731756847721,
        lon: -72.10096359595582
      }
    ],
    cu$: 3200,
    land$: 33770,
    owner: 'VAN PRAAGH, ANDREW',
    taxed$: 58370,
    usage: '110',
    use: 'R1'
  },
  '11-36': {
    address: '121 OLD MARLOW RD',
    area: 2.5,
    building$: 0,
    centers: [
      {
        lat: 43.17835915068321,
        lon: -72.10401047163018
      }
    ],
    cu$: 0,
    land$: 25700,
    owner: 'PIATT, ROBERT L',
    taxed$: 25700,
    usage: '110',
    use: 'R1'
  },
  '11-41': {
    address: 'MILLEN POND RD',
    area: 23,
    building$: 0,
    centers: [
      {
        lat: 43.177485759761026,
        lon: -72.11529376549998
      }
    ],
    cu$: 0,
    land$: 57200,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 57200,
    usage: '300',
    use: 'EX-M'
  },
  '11-68': {
    address: 'FAXON HILL RD',
    area: 27,
    building$: 0,
    centers: [
      {
        lat: 43.171651066158404,
        lon: -72.11010535059552
      }
    ],
    cu$: 0,
    land$: 1462,
    owner: 'HALVERSON, KIRSTEN',
    taxed$: 1462,
    usage: '190',
    use: 'CUUH'
  },
  '11-74': {
    address: 'SYMONDS LN',
    area: 60,
    building$: 0,
    centers: [
      {
        lat: 43.170518044566904,
        lon: -72.10006038004308
      }
    ],
    cu$: 0,
    land$: 3691,
    owner: 'BARKER, PHILIP A. & LINDA K. I',
    taxed$: 3691,
    usage: '190',
    use: 'CUUH'
  },
  '11-78': {
    address: 'AMES RD',
    area: 72.1,
    building$: 0,
    centers: [
      {
        lat: 43.19125520215435,
        lon: -72.09574500072439
      }
    ],
    cu$: 0,
    land$: 4759,
    owner: 'KELLOGG, RANDOLPH W',
    taxed$: 4759,
    usage: '190',
    use: 'CUUH'
  },
  '11-79': {
    address: 'OLD MARLOW RD',
    area: 1.82,
    building$: 0,
    centers: [
      {
        lat: 43.177516379417476,
        lon: -72.10381137457756
      }
    ],
    cu$: 0,
    land$: 2700,
    owner: 'PIATT, ROBERT L',
    taxed$: 2700,
    usage: '110',
    use: 'R1'
  },
  '11-84': {
    address: '690 OLD MARLOW RD',
    area: 5.8,
    building$: 0,
    centers: [
      {
        lat: 43.18189650138616,
        lon: -72.10741701059817
      }
    ],
    cu$: 0,
    land$: 254,
    owner: 'KELLOGG, RANDOLPH W',
    taxed$: 254,
    usage: '190',
    use: 'CUUO'
  },
  '11-86': {
    address: 'LEMPSTER MT RD',
    area: 23.1,
    building$: 0,
    centers: [
      {
        lat: 43.18787777524095,
        lon: -72.11563729187247
      }
    ],
    cu$: 0,
    land$: 1547,
    owner: 'JOYAL, RICHARD M',
    taxed$: 1547,
    usage: '190',
    use: 'CUUW'
  },
  '12-5': {
    address: 'LOVELL MT RD',
    area: 19.5,
    building$: 0,
    centers: [
      {
        lat: 43.18790417949388,
        lon: -72.06263539384513
      }
    ],
    cu$: 0,
    land$: 1191,
    owner: 'WHEELER, VIRGINIA',
    taxed$: 1191,
    usage: '190',
    use: 'CUUH'
  },
  '12-7': {
    address: 'HALFMOON PD RD',
    area: 0.5,
    building$: 0,
    centers: [
      {
        lat: 43.17229276328746,
        lon: -72.08638154314538
      }
    ],
    cu$: 0,
    land$: 9400,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 9400,
    usage: '300',
    use: 'EX-M'
  },
  '12-14': {
    address: '667 HALFMOON PD RD',
    area: 8.3,
    building$: 38200,
    centers: [
      {
        lat: 43.178983706045415,
        lon: -72.0844736326314
      }
    ],
    cu$: 1900,
    land$: 52200,
    owner: 'LUCAS, ANTHONLY ANDREW',
    taxed$: 92300,
    usage: '110',
    use: 'R1A'
  },
  '12-25': {
    address: '693 HALFMOON PD RD',
    area: 0.25,
    building$: 13800,
    centers: [
      {
        lat: 43.180528205205405,
        lon: -72.0822771442859
      }
    ],
    cu$: 0,
    land$: 123600,
    owner: 'KRYGERIS REVOCABLE FAMILY TRST',
    taxed$: 137400,
    usage: '110',
    use: 'R1W'
  },
  '12-26': {
    address: 'HALFMOON PD RD',
    area: 0.3,
    building$: 0,
    centers: [
      {
        lat: 43.181010578433,
        lon: -72.0822808755493
      }
    ],
    cu$: 0,
    land$: 71300,
    owner: 'FIDLER, DAVID C.',
    taxed$: 71300,
    usage: '110',
    use: 'R1W'
  },
  '12-36': {
    address: 'HALFMOON PD RD',
    area: 90,
    building$: 0,
    centers: [
      {
        lat: 43.186731581786965,
        lon: -72.07523981660277
      }
    ],
    cu$: 0,
    land$: 4547,
    owner: 'BLENKHORN, ETHEL ESTATE',
    taxed$: 4547,
    usage: '190',
    use: 'CUUH'
  },
  '12-41': {
    address: '684 HALFMOON PD RD',
    area: 20.53,
    building$: 154200,
    centers: [
      {
        lat: 43.18042660832152,
        lon: -72.07968371545499
      }
    ],
    cu$: 11800,
    land$: 44461,
    owner: 'KRYGERIS REVOCABLE FAMILY TRST',
    taxed$: 210461,
    usage: '110',
    use: 'R1'
  },
  '12-42': {
    address: 'HALFMOON PD RD',
    area: 34,
    building$: 0,
    centers: [
      {
        lat: 43.177611127134455,
        lon: -72.08099875287068
      }
    ],
    cu$: 0,
    land$: 2244,
    owner: 'OTTERSON FAM REV TRUST,G R&S',
    taxed$: 2244,
    usage: '190',
    use: 'CUUH'
  },
  '12-63': {
    address: 'LOVELL MT RD',
    area: 125,
    building$: 0,
    centers: [
      {
        lat: 43.186451361958326,
        lon: -72.05726491088122
      }
    ],
    cu$: 0,
    land$: 3699,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 3699,
    usage: '190',
    use: 'CUMH'
  },
  '12-107': {
    address: 'WASHINGTON DR',
    area: 1.5,
    building$: 0,
    centers: [
      {
        lat: 43.17321598016825,
        lon: -72.05776394671993
      }
    ],
    cu$: 0,
    land$: 144800,
    owner: 'MORSS, WATSON S - ESTATE OF',
    taxed$: 144800,
    usage: '110',
    use: 'R1W'
  },
  '12-118': {
    address: 'WASHINGTON DR',
    area: 4.27,
    building$: 0,
    centers: [
      {
        lat: 43.16957681751369,
        lon: -72.06117625222852
      }
    ],
    cu$: 0,
    land$: 493,
    owner: 'JOHNSON, JEFFREY',
    taxed$: 493,
    usage: '110',
    use: 'R1A'
  },
  '12-132': {
    address: 'WASHINGTON DR',
    area: 4,
    building$: 0,
    centers: [
      {
        lat: 43.1748629846175,
        lon: -72.05710041838775
      }
    ],
    cu$: 0,
    land$: 33100,
    owner: 'ROMANO III, CHARLES RICHARD',
    taxed$: 33100,
    usage: '110',
    use: 'R1A'
  },
  '12-137-01': {
    address: 'WASHINGTON DR',
    area: 3.49,
    building$: 0,
    centers: [
      {
        lat: 43.17583449963501,
        lon: -72.05853558449456
      }
    ],
    cu$: 0,
    land$: 33000,
    owner: 'PARNAS, J P, B L & D R',
    taxed$: 33000,
    usage: '110',
    use: 'R1'
  },
  '12-144': {
    address: 'WASHINGTON DR',
    area: 3.8,
    building$: 0,
    centers: [
      {
        lat: 43.179339863885815,
        lon: -72.05939973686394
      }
    ],
    cu$: 0,
    land$: 33000,
    owner: 'VINCIGUERRA, ANTHONY S.',
    taxed$: 33000,
    usage: '110',
    use: 'R1A'
  },
  '12-146': {
    address: 'WASHINGTON DR',
    area: 3.35,
    building$: 0,
    centers: [
      {
        lat: 43.180305519261466,
        lon: -72.05927067742958
      }
    ],
    cu$: 0,
    land$: 32900,
    owner: 'PARNAS, JEAN-PIERRE',
    taxed$: 32900,
    usage: '110',
    use: 'R1'
  },
  '12-150': {
    address: '808 WASHINGTON DR',
    area: 4.84,
    building$: 57000,
    centers: [
      {
        lat: 43.1824807582538,
        lon: -72.05811473343908
      }
    ],
    cu$: 7700,
    land$: 64065,
    owner: 'KITTREDGE, KAREN J.',
    taxed$: 128765,
    usage: '110',
    use: 'R1'
  },
  '12-155': {
    address: 'E WASHINGTON RD',
    area: 9.1,
    building$: 0,
    centers: [
      {
        lat: 43.168695296622836,
        lon: -72.06911288646599
      }
    ],
    cu$: 0,
    land$: 154300,
    owner: 'LYNCH REVOCABLE TRUST',
    taxed$: 154300,
    usage: '110',
    use: 'R1W'
  },
  '12-156': {
    address: 'E WASHINGTON RD',
    area: 6.7,
    building$: 0,
    centers: [
      {
        lat: 43.169442747258934,
        lon: -72.06961452600453
      }
    ],
    cu$: 0,
    land$: 112200,
    owner: 'GRAHAM FAM REAL ESTATE TRUST',
    taxed$: 112200,
    usage: '110',
    use: 'R1W'
  },
  '12-160': {
    address: 'ISLAND POND RD',
    area: 0.02,
    building$: 0,
    centers: [
      {
        lat: 43.169027924203625,
        lon: -72.07266093353108
      }
    ],
    cu$: 5300,
    land$: 23000,
    owner: 'WHITING, THOMAS',
    taxed$: 28300,
    usage: '110',
    use: 'R1W'
  },
  '12-174': {
    address: 'HALFMOON PD RD',
    area: 0.5,
    building$: 0,
    centers: [
      {
        lat: 43.17192175941072,
        lon: -72.08543327920734
      }
    ],
    cu$: 0,
    land$: 18800,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 18800,
    usage: '300',
    use: 'EX-M'
  },
  '12-169': {
    address: 'ISLAND POND RD',
    area: 0.02,
    building$: 0,
    centers: [
      {
        lat: 43.17043744600231,
        lon: -72.07169728612615
      }
    ],
    cu$: 11000,
    land$: 22700,
    owner: 'ALLEN, LAWRENCE R',
    taxed$: 33700,
    usage: '110',
    use: 'R1W'
  },
  '12-176': {
    address: '230 HALFMOON PD RD',
    area: 7.5,
    building$: 0,
    centers: [
      {
        lat: 43.17241943820364,
        lon: -72.08858542831126
      }
    ],
    cu$: 2200,
    land$: 16707,
    owner: 'SHIFFLETT, AMBER J.',
    taxed$: 18907,
    usage: '110',
    use: 'R1'
  },
  '12-182': {
    address: 'SO MAIN ST',
    area: 21.4,
    building$: 0,
    centers: [
      {
        lat: 43.16867741711853,
        lon: -72.08982465370555
      }
    ],
    cu$: 0,
    land$: 633,
    owner: 'ATKINS, SHAWN L',
    taxed$: 633,
    usage: '190',
    use: 'CUUW'
  },
  '12-195': {
    address: 'ISLAND POND BOAT ACC',
    area: 0.06,
    building$: 0,
    centers: [
      {
        lat: 43.168845946766396,
        lon: -72.07277045394665
      }
    ],
    cu$: 0,
    land$: 26000,
    owner: 'CHACE,JODIE ET AL',
    taxed$: 26000,
    usage: '110',
    use: 'R1'
  },
  '12-207': {
    address: 'BULMAN ISLAND',
    area: 0.03,
    building$: 0,
    centers: [
      {
        lat: 43.17549139974169,
        lon: -72.06472149942823
      }
    ],
    cu$: 0,
    land$: 10500,
    owner: 'BULMAN, RICHARD B',
    taxed$: 10500,
    usage: '110',
    use: 'R1'
  },
  '12-208': {
    address: 'HELENS ISLAND',
    area: 0.11,
    building$: 0,
    centers: [
      {
        lat: 43.175498097803626,
        lon: -72.06277096805894
      }
    ],
    cu$: 0,
    land$: 11300,
    owner: 'VAN PRAAGH, DR RICHARD',
    taxed$: 11300,
    usage: '110',
    use: 'R1'
  },
  '13-3': {
    address: 'E WASHINGTON RD',
    area: 4,
    building$: 0,
    centers: [
      {
        lat: 43.184055903602214,
        lon: -72.0392521811925
      }
    ],
    cu$: 0,
    land$: 21600,
    owner: 'TERANI, STEPHEN J & GAYLE  REV',
    taxed$: 21600,
    usage: '110',
    use: 'R1'
  },
  '13-7': {
    address: 'E WASHINGTON RD',
    area: 14,
    building$: 0,
    centers: [
      {
        lat: 43.176356685136376,
        lon: -72.04783396822519
      }
    ],
    cu$: 0,
    land$: 546,
    owner: 'FRANCE, DAVID',
    taxed$: 546,
    usage: '190',
    use: 'CUMH'
  },
  '13-31': {
    address: 'KINGSBURY HILL RD',
    area: 50,
    building$: 0,
    centers: [
      {
        lat: 43.170998712625575,
        lon: -72.03743648171448
      }
    ],
    cu$: 0,
    land$: 1751,
    owner: 'WILLIAMS, THOMAS EDWARD',
    taxed$: 1751,
    usage: '190',
    use: 'CUUO'
  },
  '13-36': {
    address: 'KINGSBURY HILL RD',
    area: 22.7,
    building$: 0,
    centers: [
      {
        lat: 43.17459303295429,
        lon: -72.03405871365557
      }
    ],
    cu$: 0,
    land$: 1640,
    owner: 'VERRILL CORNELIUSEN, INC',
    taxed$: 1640,
    usage: '190',
    use: 'CUUW'
  },
  '14-17': {
    address: 'HARRISON RD',
    area: 1.15,
    building$: 0,
    centers: [
      {
        lat: 43.16321303884291,
        lon: -72.15364917408695
      }
    ],
    cu$: 2000,
    land$: 22,
    owner: 'LAMOY, ROBERT C',
    taxed$: 2022,
    usage: '110',
    use: 'R1W'
  },
  '14-44': {
    address: '306 STOWELL RD',
    area: 1.29,
    building$: 0,
    centers: [
      {
        lat: 43.16636220505052,
        lon: -72.15022828311248
      }
    ],
    cu$: 0,
    land$: 10300,
    owner: 'J & W TRUST',
    taxed$: 10300,
    usage: '110',
    use: 'R1'
  },
  '14-48': {
    address: 'ASHUELOT DR',
    area: 1.14,
    building$: 0,
    centers: [
      {
        lat: 43.16847399518672,
        lon: -72.15028448879143
      }
    ],
    cu$: 0,
    land$: 11400,
    owner: 'ZEMAN, DANIEL',
    taxed$: 11400,
    usage: '110',
    use: 'R1A'
  },
  '14-53': {
    address: 'TAYLOR CIR',
    area: 1.11,
    building$: 0,
    centers: [
      {
        lat: 43.16592431758722,
        lon: -72.14963165458735
      }
    ],
    cu$: 0,
    land$: 11400,
    owner: 'DEROSSI, CHARLES',
    taxed$: 11400,
    usage: '110',
    use: 'R1'
  },
  '14-55': {
    address: 'TAYLOR CIR',
    area: 2.09,
    building$: 0,
    centers: [
      {
        lat: 43.168091845308254,
        lon: -72.14793632560983
      }
    ],
    cu$: 0,
    land$: 11800,
    owner: 'MCLAUGHLIN, CATLIN HOPE',
    taxed$: 11800,
    usage: '110',
    use: 'R1'
  },
  '14-56': {
    address: 'TAYLOR CIR',
    area: 1.98,
    building$: 0,
    centers: [
      {
        lat: 43.16747257485546,
        lon: -72.14782500675258
      }
    ],
    cu$: 0,
    land$: 11800,
    owner: 'MILLER, TODD REALTY TRUST',
    taxed$: 11800,
    usage: '110',
    use: 'R1A'
  },
  '14-67': {
    address: 'GRANT RD',
    area: 1.38,
    building$: 0,
    centers: [
      {
        lat: 43.16282794242849,
        lon: -72.14906754095664
      }
    ],
    cu$: 0,
    land$: 11500,
    owner: 'ONOFRIO, MARCELLO',
    taxed$: 11500,
    usage: '110',
    use: 'R1'
  },
  '14-73': {
    address: 'GRANT RD',
    area: 1.55,
    building$: 0,
    centers: [
      {
        lat: 43.16191565669449,
        lon: -72.14796908939236
      }
    ],
    cu$: 0,
    land$: 11600,
    owner: 'FERREIRA, ELIO',
    taxed$: 11600,
    usage: '110',
    use: 'R1'
  },
  '14-74': {
    address: 'GRANT RD',
    area: 1.32,
    building$: 0,
    centers: [
      {
        lat: 43.16241971344065,
        lon: -72.14779019427942
      }
    ],
    cu$: 0,
    land$: 11500,
    owner: 'ROY, JASON T',
    taxed$: 11500,
    usage: '110',
    use: 'R1'
  },
  '14-75': {
    address: 'GRANT RD',
    area: 1.54,
    building$: 0,
    centers: [
      {
        lat: 43.16282946275135,
        lon: -72.14759377444003
      }
    ],
    cu$: 0,
    land$: 41300,
    owner: 'MANA, STEPHEN M.',
    taxed$: 41300,
    usage: '110',
    use: 'R1'
  },
  '14-81': {
    address: 'STOWELL RD',
    area: 1.17,
    building$: 0,
    centers: [
      {
        lat: 43.16203240132754,
        lon: -72.14518583608367
      }
    ],
    cu$: 0,
    land$: 11400,
    owner: 'TUTINO, RAYMOND',
    taxed$: 11400,
    usage: '110',
    use: 'R1'
  },
  '14-87': {
    address: 'OFF JEFFERSON DR',
    area: 0.65025,
    building$: 0,
    centers: [
      {
        lat: 43.16170610757973,
        lon: -72.14718576635315
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-88': {
    address: 'JEFFERSON DR',
    area: 0.7,
    building$: 0,
    centers: [
      {
        lat: 43.16106669486774,
        lon: -72.14762523760373
      }
    ],
    cu$: 0,
    land$: 10800,
    owner: 'LANGLOIS, ROBERT R JR',
    taxed$: 10800,
    usage: '110',
    use: 'R1'
  },
  '14-90': {
    address: 'GRANT RD',
    area: 2.12,
    building$: 0,
    centers: [
      {
        lat: 43.16140762378899,
        lon: -72.14859720927078
      }
    ],
    cu$: 0,
    land$: 14200,
    owner: 'LANZILLO, DOMENIC',
    taxed$: 14200,
    usage: '110',
    use: 'R1'
  },
  '14-91': {
    address: '150 JEFFERSON DR',
    area: 2.1,
    building$: 75000,
    centers: [
      {
        lat: 43.160676206131306,
        lon: -72.14987576887513
      }
    ],
    cu$: 0,
    land$: 37900,
    owner: 'SZYMANSKI JR, JOSEPH P',
    taxed$: 112900,
    usage: '110',
    use: 'R1'
  },
  '14-108': {
    address: 'MADISON DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.16045295189222,
        lon: -72.14371337499878
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'CURTIN, JAMES',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-112': {
    address: 'MADISON DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.16007225122162,
        lon: -72.14623371363103
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'HAGUE, CHRISTOPHER J',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-119': {
    address: 'MADISON DR',
    area: 0.71,
    building$: 0,
    centers: [
      {
        lat: 43.159350786972894,
        lon: -72.15024377363287
      }
    ],
    cu$: 0,
    land$: 10900,
    owner: 'MORRIS, FRANK IV',
    taxed$: 10900,
    usage: '110',
    use: 'R1'
  },
  '14-130': {
    address: 'MADISON DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.15974932688165,
        lon: -72.14428175406027
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'WPB HOLDINGS, LLC',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-131': {
    address: 'MADISON DR',
    area: 1.6,
    building$: 0,
    centers: [
      {
        lat: 43.159441293883546,
        lon: -72.14378674665076
      }
    ],
    cu$: 0,
    land$: 11600,
    owner: 'CHONTOS, LEE ELLEN',
    taxed$: 11600,
    usage: '110',
    use: 'R1'
  },
  '14-133': {
    address: 'PRESIDENTIAL DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.159079265044724,
        lon: -72.14478395705076
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'WASHIINGTON, TOWN OF - TC DEED',
    taxed$: 11000,
    usage: '300',
    use: 'EX-M'
  },
  '14-227': {
    address: 'HARDING RD',
    area: 0.771,
    building$: 0,
    centers: [
      {
        lat: 43.158230100391705,
        lon: -72.14602174740602
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-148': {
    address: 'ASHUELOT DR',
    area: 1.8,
    building$: 0,
    centers: [
      {
        lat: 43.159387087933105,
        lon: -72.152685810263
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'L A E ASSOCIATION',
    taxed$: 0,
    usage: '260',
    use: 'CI'
  },
  '14-149': {
    address: 'ASHUELOT DR',
    area: 1.1,
    building$: 0,
    centers: [
      {
        lat: 43.15993352507319,
        lon: -72.15157864066985
      }
    ],
    cu$: 0,
    land$: 124200,
    owner: 'MILES, JOHN E',
    taxed$: 124200,
    usage: '110',
    use: 'R1W'
  },
  '14-150': {
    address: '417 ASHUELOT DR',
    area: 0.89,
    building$: 133800,
    centers: [
      {
        lat: 43.159688618773814,
        lon: -72.15141126385369
      }
    ],
    cu$: 1000,
    land$: 204800,
    owner: 'FROST, MARY LOU 2017 REVOCABLE',
    taxed$: 339600,
    usage: '110',
    use: 'R1W'
  },
  '14-151': {
    address: '407 ASHUELOT DR',
    area: 0.68,
    building$: 92400,
    centers: [
      {
        lat: 43.15947788839606,
        lon: -72.15122704588734
      }
    ],
    cu$: 18200,
    land$: 203600,
    owner: 'GINN, ROBERT A',
    taxed$: 314200,
    usage: '110',
    use: 'R1W'
  },
  '14-184': {
    address: 'ASHUELOT DR',
    area: 0.93,
    building$: 0,
    centers: [
      {
        lat: 43.15408649307851,
        lon: -72.14457242658355
      }
    ],
    cu$: 0,
    land$: 139000,
    owner: 'CALABRO, JOHN R',
    taxed$: 139000,
    usage: '110',
    use: 'R1W'
  },
  '14-202': {
    address: 'GARFIELD DR',
    area: 0.89,
    building$: 0,
    centers: [
      {
        lat: 43.15283623512576,
        lon: -72.1397392318305
      }
    ],
    cu$: 0,
    land$: 138900,
    owner: 'QUINN, BRIAN E',
    taxed$: 138900,
    usage: '110',
    use: 'R1W'
  },
  '14-222': {
    address: '587 PRESIDENTIAL DR',
    area: 1.41,
    building$: 54500,
    centers: [
      {
        lat: 43.15814291131864,
        lon: -72.14676492934095
      }
    ],
    cu$: 3000,
    land$: 41100,
    owner: 'TILTON-WAHLERT, ELIZABETH',
    taxed$: 98600,
    usage: '110',
    use: 'R1'
  },
  '14-224': {
    address: 'HAYES RD',
    area: 0.72,
    building$: 0,
    centers: [
      {
        lat: 43.15736930803352,
        lon: -72.14651539243044
      }
    ],
    cu$: 0,
    land$: 10900,
    owner: 'ZUBER, STEPHEN S',
    taxed$: 10900,
    usage: '110',
    use: 'R1'
  },
  '14-233': {
    address: 'HARDING RD',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.156966453291666,
        lon: -72.14481351645658
      }
    ],
    cu$: 0,
    land$: 9900,
    owner: 'SULLIVAN, PHILIP KEVIN',
    taxed$: 9900,
    usage: '110',
    use: 'R1'
  },
  '14-254': {
    address: 'MCKINLEY DR',
    area: 0.93,
    building$: 0,
    centers: [
      {
        lat: 43.15480010895089,
        lon: -72.1387051174758
      }
    ],
    cu$: 0,
    land$: 11200,
    owner: 'PISCIOTTA, RICHARD',
    taxed$: 11200,
    usage: '110',
    use: 'R1'
  },
  '14-257': {
    address: 'GARFIELD DR',
    area: 0.82,
    building$: 0,
    centers: [
      {
        lat: 43.153929201920654,
        lon: -72.13932156753386
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'COTE, JEFFREY B',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-258': {
    address: 'MONROE CIR',
    area: 1.61,
    building$: 0,
    centers: [
      {
        lat: 43.15407390664111,
        lon: -72.13880326500285
      }
    ],
    cu$: 0,
    land$: 17400,
    owner: 'JOHNSON, CARL',
    taxed$: 17400,
    usage: '110',
    use: 'R1'
  },
  '14-269': {
    address: 'PIERCE RD',
    area: 0.78,
    building$: 0,
    centers: [
      {
        lat: 43.152232892690655,
        lon: -72.13812522478655
      }
    ],
    cu$: 0,
    land$: 12600,
    owner: 'VISINSKI, ANDREW',
    taxed$: 12600,
    usage: '110',
    use: 'R1'
  },
  '14-267': {
    address: 'PIERCE RD',
    area: 0.78,
    building$: 0,
    centers: [
      {
        lat: 43.15296308991622,
        lon: -72.13716756999888
      }
    ],
    cu$: 0,
    land$: 12100,
    owner: 'LEBLOND, DAVID J',
    taxed$: 12100,
    usage: '110',
    use: 'R1'
  },
  '14-273': {
    address: 'LINCOLN DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.15592055261662,
        lon: -72.13955635160762
      }
    ],
    cu$: 0,
    land$: 12100,
    owner: 'MULREADY, CAROL J',
    taxed$: 12100,
    usage: '110',
    use: 'R1'
  },
  '14-298': {
    address: 'JACKSON DR',
    area: 0.74078,
    building$: 0,
    centers: [
      {
        lat: 43.157237547059985,
        lon: -72.13970298770751
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-300': {
    address: 'JACKSON DR',
    area: 0.79,
    building$: 0,
    centers: [
      {
        lat: 43.1570764483826,
        lon: -72.14089073632157
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'BURGESS, WILLIAM E. JR',
    taxed$: 11000,
    usage: '110',
    use: 'R1A'
  },
  '14-304': {
    address: 'CLEVELAND CIR',
    area: 1.06,
    building$: 0,
    centers: [
      {
        lat: 43.158324715532345,
        lon: -72.14276990337055
      }
    ],
    cu$: 0,
    land$: 10200,
    owner: 'SCHANDER, CAROL',
    taxed$: 10200,
    usage: '110',
    use: 'R1'
  },
  '14-305': {
    address: 'PRESIDENTIAL DR',
    area: 0.79,
    building$: 0,
    centers: [
      {
        lat: 43.15877057524618,
        lon: -72.1433775420071
      }
    ],
    cu$: 0,
    land$: 9900,
    owner: 'MELAGRANO, JOSEPH F.',
    taxed$: 9900,
    usage: '110',
    use: 'R1'
  },
  '14-307': {
    address: '475 PRESIDENTIAL DR',
    area: 2.3,
    building$: 46600,
    centers: [
      {
        lat: 43.1594912515486,
        lon: -72.14266451364685
      }
    ],
    cu$: 3800,
    land$: 42500,
    owner: 'ZAHRT, SIGRID MC NAIR',
    taxed$: 92900,
    usage: '110',
    use: 'R1'
  },
  '14-320': {
    address: 'JACKSON DR',
    area: 0.75,
    building$: 0,
    centers: [
      {
        lat: 43.157699923085126,
        lon: -72.13823471922922
      }
    ],
    cu$: 0,
    land$: 10900,
    owner: 'LALIOTS, THOMAS',
    taxed$: 10900,
    usage: '110',
    use: 'R1'
  },
  '14-324': {
    address: 'ADAMS DR',
    area: 0.86,
    building$: 0,
    centers: [
      {
        lat: 43.15722767128882,
        lon: -72.13722788370102
      }
    ],
    cu$: 0,
    land$: 11100,
    owner: 'CARDINAL, LEONARD',
    taxed$: 11100,
    usage: '110',
    use: 'R1'
  },
  '14-325': {
    address: 'ADAMS DR',
    area: 0.82,
    building$: 0,
    centers: [
      {
        lat: 43.15756546350465,
        lon: -72.13708873704621
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'DAVIS, GLENN A',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-328': {
    address: 'PRESIDENTIAL DR',
    area: 1.5,
    building$: 0,
    centers: [
      {
        lat: 43.15815208190738,
        lon: -72.1385405969986
      }
    ],
    cu$: 0,
    land$: 27300,
    owner: 'REYNOLDS, ALAN P',
    taxed$: 27300,
    usage: '110',
    use: 'R1A'
  },
  '14-333': {
    address: 'PRESIDENTIAL DR',
    area: 1.15,
    building$: 0,
    centers: [
      {
        lat: 43.1592289705788,
        lon: -72.13906227277225
      }
    ],
    cu$: 0,
    land$: 11400,
    owner: 'BENNETT PROPERTIES, LLC',
    taxed$: 11400,
    usage: '110',
    use: 'R1A'
  },
  '14-334': {
    address: 'PRESIDENTIAL DR',
    area: 1.1,
    building$: 0,
    centers: [
      {
        lat: 43.159455123756146,
        lon: -72.13969381949886
      }
    ],
    cu$: 0,
    land$: 10200,
    owner: 'FOWLER, CLAIRE B.',
    taxed$: 10200,
    usage: '110',
    use: 'R1A'
  },
  '14-348': {
    address: 'COOLIDGE DR',
    area: 3.1,
    building$: 0,
    centers: [
      {
        lat: 43.163501062151916,
        lon: -72.13798226510276
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'BACOTTI, MICHAEL J',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-354': {
    address: 'COOLIDGE DR',
    area: 3.18,
    building$: 0,
    centers: [
      {
        lat: 43.16521929375257,
        lon: -72.14102434357184
      }
    ],
    cu$: 0,
    land$: 13500,
    owner: 'MOHR, CHRISTOPHER',
    taxed$: 13500,
    usage: '110',
    use: 'R1'
  },
  '14-355': {
    address: '400 COOLIDGE DR',
    area: 1.25,
    building$: 124100,
    centers: [
      {
        lat: 43.165236799215286,
        lon: -72.14249667228347
      }
    ],
    cu$: 14500,
    land$: 38800,
    owner: 'BULLDOG REVOCABLE TRUST',
    taxed$: 177400,
    usage: '110',
    use: 'R1'
  },
  '14-374': {
    address: 'COOLIDGE DR',
    area: 0.98,
    building$: 0,
    centers: [
      {
        lat: 43.16064130097108,
        lon: -72.13812354216259
      }
    ],
    cu$: 0,
    land$: 11300,
    owner: 'ROBERT REVOCABLE TRUST',
    taxed$: 11300,
    usage: '110',
    use: 'R1'
  },
  '14-383': {
    address: 'BUCHANAN CIR',
    area: 1.63,
    building$: 0,
    centers: [
      {
        lat: 43.16305483539859,
        lon: -72.14054901017417
      }
    ],
    cu$: 0,
    land$: 11600,
    owner: 'SANDFORD, WAYNE E',
    taxed$: 11600,
    usage: '110',
    use: 'R1'
  },
  '14-499': {
    address: 'LANG RD',
    area: 0.52,
    building$: 0,
    centers: [
      {
        lat: 43.15310329450148,
        lon: -72.16075169953174
      }
    ],
    cu$: 0,
    land$: 18100,
    owner: 'GILLIGAN, JENNY M',
    taxed$: 18100,
    usage: '110',
    use: 'R1'
  },
  '14-510': {
    address: 'MARLOW RD',
    area: 0.35,
    building$: 0,
    centers: [
      {
        lat: 43.150584931455754,
        lon: -72.15711931608527
      }
    ],
    cu$: 0,
    land$: 10100,
    owner: 'SANDERS, GEORGE',
    taxed$: 10100,
    usage: '110',
    use: 'R1'
  },
  '14-512': {
    address: 'MARLOW RD',
    area: 0.6,
    building$: 0,
    centers: [
      {
        lat: 43.149780500775385,
        lon: -72.15768061735741
      }
    ],
    cu$: 0,
    land$: 30500,
    owner: 'BRITTON, RAYMOND F.',
    taxed$: 30500,
    usage: '110',
    use: 'R1W'
  },
  '15-3': {
    address: 'VALLEY RD',
    area: 12.8,
    building$: 0,
    centers: [
      {
        lat: 43.16527075820541,
        lon: -72.09585565620566
      }
    ],
    cu$: 0,
    land$: 3107,
    owner: 'BARTEVIAN, PATRICIA REV TRUST',
    taxed$: 3107,
    usage: '190',
    use: 'CUUH'
  },
  '15-4': {
    address: 'VALLEY RD',
    area: 80,
    building$: 0,
    centers: [
      {
        lat: 43.16143163470105,
        lon: -72.09622939072136
      }
    ],
    cu$: 0,
    land$: 4670,
    owner: 'BARTEVIAN, PATRICIA',
    taxed$: 4670,
    usage: '190',
    use: 'CUUO'
  },
  '15-16': {
    address: 'VALLEY RD',
    area: 5.2,
    building$: 107800,
    centers: [
      {
        lat: 43.151173244659496,
        lon: -72.0989041470946
      }
    ],
    cu$: 0,
    land$: 92300,
    owner: 'BARKIE, DAVID',
    taxed$: 200100,
    usage: '110',
    use: 'R1'
  },
  '15-20': {
    address: 'VALLEY RD',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.14878050680484,
        lon: -72.09905706994363
      }
    ],
    cu$: 0,
    land$: 26100,
    owner: 'RICHARD, DONALD',
    taxed$: 26100,
    usage: '110',
    use: 'R1'
  },
  '15-22': {
    address: 'VALLEY RD',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.14767962825293,
        lon: -72.09879994644942
      }
    ],
    cu$: 0,
    land$: 26100,
    owner: 'RICHARD, DONALD',
    taxed$: 26100,
    usage: '110',
    use: 'R1'
  },
  '15-28': {
    address: 'VALLEY RD',
    area: 6.9,
    building$: 0,
    centers: [
      {
        lat: 43.15269811100205,
        lon: -72.10395650016544
      }
    ],
    cu$: 0,
    land$: 708,
    owner: 'BEAUDREAULT, RICHARD P.',
    taxed$: 708,
    usage: '110',
    use: 'R1'
  },
  '15-37': {
    address: 'VALLEY RD',
    area: 22,
    building$: 0,
    centers: [
      {
        lat: 43.1642673773706,
        lon: -72.10261479217337
      }
    ],
    cu$: 1400,
    land$: 23382,
    owner: 'HALVERSON, KIRSTEN',
    taxed$: 24782,
    usage: '110',
    use: 'R1'
  },
  '15-38': {
    address: '290 VALLEY RD',
    area: 52.66,
    building$: 262800,
    centers: [
      {
        lat: 43.16687589441524,
        lon: -72.09964406854203
      }
    ],
    cu$: 11100,
    land$: 41709,
    owner: 'BARTEVIAN, PATRICIA REV TRUST',
    taxed$: 315609,
    usage: '110',
    use: 'R1'
  },
  '15-48': {
    address: '935 FAXON HILL RD',
    area: 25.97,
    building$: 0,
    centers: [
      {
        lat: 43.157344652303415,
        lon: -72.12060066456486
      }
    ],
    cu$: 0,
    land$: 1758,
    owner: 'NEW ENGLAND FORESTRY FNDTN',
    taxed$: 1758,
    usage: '190',
    use: 'CUUH'
  },
  '15-58-01': {
    address: 'FAXON HILL RD',
    area: 4,
    building$: 0,
    centers: [
      {
        lat: 43.15868722113572,
        lon: -72.12594624870462
      }
    ],
    cu$: 0,
    land$: 272,
    owner: 'JAKE REALTY TRUST',
    taxed$: 272,
    usage: '110',
    use: 'R1W'
  },
  '15-82': {
    address: '1 ANDERSON ISLAND',
    area: 0.07,
    building$: 14000,
    centers: [
      {
        lat: 43.164958223087545,
        lon: -72.12293668268214
      }
    ],
    cu$: 0,
    land$: 102000,
    owner: 'ANDERSON, PETER K',
    taxed$: 116000,
    usage: '110',
    use: 'R1W'
  },
  '15-95': {
    address: '1183 FAXON HILL RD',
    area: 0.58,
    building$: 13000,
    centers: [
      {
        lat: 43.158515583376,
        lon: -72.1282366074748
      }
    ],
    cu$: 2400,
    land$: 37600,
    owner: 'REYNOLDS, ALAN P',
    taxed$: 53000,
    usage: '110',
    use: 'R1'
  },
  '15-97': {
    address: '1139 FAXON HILL RD',
    area: 40.18317,
    building$: 33000,
    centers: [
      {
        lat: 43.1564255123559,
        lon: -72.13033816091664
      }
    ],
    cu$: 1500,
    land$: 0,
    owner: 'ZERJAV, JOHN',
    taxed$: 34500,
    usage: '110',
    use: 'R1'
  },
  '15-104': {
    address: 'FARNSWORTH HILL RD',
    area: 100.6,
    building$: 14700,
    centers: [
      {
        lat: 43.16259204025515,
        lon: -72.133012148494
      }
    ],
    cu$: 300,
    land$: 28125,
    owner: 'BRIGHTON FAMILY TRUST',
    taxed$: 43125,
    usage: '110',
    use: 'R1'
  },
  '15-107-01': {
    address: 'MILLEN POND RD',
    area: 0.02,
    building$: 0,
    centers: [
      {
        lat: 43.164293915798424,
        lon: -72.127001868148
      }
    ],
    cu$: 0,
    land$: 45800,
    owner: 'CARTER, STEPHEN C',
    taxed$: 45800,
    usage: '110',
    use: 'R1W'
  },
  '15-117': {
    address: '112 FARNSWORTH HILL RD',
    area: 0.66,
    building$: 20100,
    centers: [
      {
        lat: 43.16566677903789,
        lon: -72.12785008795592
      }
    ],
    cu$: 0,
    land$: 17300,
    owner: 'SMITH, WILLIAM T',
    taxed$: 37400,
    usage: '110',
    use: 'R1'
  },
  '15-119': {
    address: 'COOLIDGE DR',
    area: 7.2,
    building$: 0,
    centers: [
      {
        lat: 43.16022444115022,
        lon: -72.1362830608411
      }
    ],
    cu$: 0,
    land$: 329,
    owner: 'BRIGHTON FAMILY TRUST',
    taxed$: 329,
    usage: '190',
    use: 'CUUH'
  },
  '15-135': {
    address: 'ADAMS DR',
    area: 0.75,
    building$: 0,
    centers: [
      {
        lat: 43.154419863159404,
        lon: -72.13638379023737
      }
    ],
    cu$: 0,
    land$: 7600,
    owner: 'DEVLIN, JAMES A',
    taxed$: 7600,
    usage: '110',
    use: 'R1'
  },
  '15-136': {
    address: 'ADAMS DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.15399586458141,
        lon: -72.13598910016717
      }
    ],
    cu$: 0,
    land$: 7700,
    owner: 'MEIER, DONNA',
    taxed$: 7700,
    usage: '110',
    use: 'R1A'
  },
  '15-154': {
    address: '153 KING ST',
    area: 18.3,
    building$: 81700,
    centers: [
      {
        lat: 43.15305136479386,
        lon: -72.12332347528557
      }
    ],
    cu$: 27200,
    land$: 84300,
    owner: 'N. N. E. CONF. OF SEVENTH DAY',
    taxed$: 193200,
    usage: '260',
    use: 'CI'
  },
  '15-147': {
    address: 'PIERCE RD',
    area: 0.75,
    building$: 0,
    centers: [
      {
        lat: 43.152322701605456,
        lon: -72.13680541399444
      }
    ],
    cu$: 0,
    land$: 10900,
    owner: 'WICKENS REVOCABLE TRUST',
    taxed$: 10900,
    usage: '110',
    use: 'R1'
  },
  '15-153': {
    address: 'PINE POINT RD',
    area: 0.5,
    building$: 0,
    centers: [
      {
        lat: 43.1649737593407,
        lon: -72.12093925287418
      }
    ],
    cu$: 0,
    land$: 132500,
    owner: 'ABREU, SHARON ROBINSON',
    taxed$: 132500,
    usage: '110',
    use: 'R1'
  },
  '15-155': {
    address: 'COVE RD',
    area: 11,
    building$: 0,
    centers: [
      {
        lat: 43.148366250465834,
        lon: -72.09568044225533
      }
    ],
    cu$: 0,
    land$: 34300,
    owner: 'REVANE, DONALD W',
    taxed$: 34300,
    usage: '110',
    use: 'R1A'
  },
  '16-4': {
    address: '744 SO MAIN ST',
    area: 4,
    building$: 70500,
    centers: [
      {
        lat: 43.15960597494504,
        lon: -72.08163510062883
      }
    ],
    cu$: 7800,
    land$: 45000,
    owner: 'BUKER JR, CLAYTON A',
    taxed$: 123300,
    usage: '110',
    use: 'R1'
  },
  '16-18': {
    address: 'OAK TERR',
    area: 0.74,
    building$: 0,
    centers: [
      {
        lat: 43.1468172596753,
        lon: -72.08702975002518
      }
    ],
    cu$: 0,
    land$: 15600,
    owner: 'THOMAS, STEVE',
    taxed$: 15600,
    usage: '110',
    use: 'R1A'
  },
  '16-19': {
    address: 'OAK TERR',
    area: 0.93,
    building$: 0,
    centers: [
      {
        lat: 43.14728243049672,
        lon: -72.08636152405819
      }
    ],
    cu$: 0,
    land$: 16000,
    owner: 'SARAFIAN, EDWARD GERALD',
    taxed$: 16000,
    usage: '110',
    use: 'R1A'
  },
  '16-41': {
    address: 'HIGHLAND HAVEN RD',
    area: 2.72,
    building$: 0,
    centers: [
      {
        lat: 43.149398878262815,
        lon: -72.08539922718099
      }
    ],
    cu$: 0,
    land$: 17200,
    owner: 'MORRIS, MARY',
    taxed$: 17200,
    usage: '110',
    use: 'R1A'
  },
  '16-42': {
    address: 'HIGHLAND HAVEN RD',
    area: 4.43,
    building$: 0,
    centers: [
      {
        lat: 43.149979968099196,
        lon: -72.0854932696994
      }
    ],
    cu$: 0,
    land$: 18600,
    owner: 'TYLER, JAMES',
    taxed$: 18600,
    usage: '110',
    use: 'R1A'
  },
  '16-47': {
    address: 'HIGHLAND HAVEN RD',
    area: 0.14,
    building$: 0,
    centers: [
      {
        lat: 43.14869205968925,
        lon: -72.08877995435446
      }
    ],
    cu$: 0,
    land$: 9600,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 9600,
    usage: '300',
    use: 'EX-M'
  },
  '16-50': {
    address: '952 SO MAIN ST',
    area: 3.04,
    building$: 0,
    centers: [
      {
        lat: 43.15628392476329,
        lon: -72.07541849499712
      }
    ],
    cu$: 0,
    land$: 3900,
    owner: 'WASHINGTON, TOWN OF - TRANS ST',
    taxed$: 3900,
    usage: '300',
    use: 'EX-M'
  },
  '16-65': {
    address: 'E WASHINGTON RD',
    area: 22.3,
    building$: 0,
    centers: [
      {
        lat: 43.16877188106572,
        lon: -72.05009638483853
      }
    ],
    cu$: 0,
    land$: 530,
    owner: 'PALUDI, DAMON TRUST',
    taxed$: 530,
    usage: '190',
    use: 'CUMO'
  },
  '16-70-13': {
    address: 'E WASHINGTON RD',
    area: 12.1,
    building$: 0,
    centers: [
      {
        lat: 43.16528088992768,
        lon: -72.07804804159103
      }
    ],
    cu$: 0,
    land$: 404,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 404,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-20': {
    address: 'E WASHINGTON RD',
    area: 5.6,
    building$: 0,
    centers: [
      {
        lat: 43.165666427263325,
        lon: -72.07166031257158
      }
    ],
    cu$: 0,
    land$: 181,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 181,
    usage: '190',
    use: 'CUUO'
  },
  '16-74': {
    address: '4773 E WASHINGTON RD',
    area: 4,
    building$: 23100,
    centers: [
      {
        lat: 43.166328339153225,
        lon: -72.080908980776
      }
    ],
    cu$: 1000,
    land$: 40500,
    owner: 'POOLER, W & D',
    taxed$: 64600,
    usage: '110',
    use: 'R1'
  },
  '16-77': {
    address: 'MILL ST',
    area: 2.33,
    building$: 0,
    centers: [
      {
        lat: 43.16887429371991,
        lon: -72.08699930551568
      }
    ],
    cu$: 0,
    land$: 238,
    owner: 'BOREY, LOUIS J',
    taxed$: 238,
    usage: '190',
    use: 'CUUW'
  },
  '16-77-06': {
    address: 'E WASHINGTON RD',
    area: 5.031,
    building$: 0,
    centers: [
      {
        lat: 43.16771128544812,
        lon: -72.08249104668202
      }
    ],
    cu$: 0,
    land$: 545,
    owner: 'BOREY, LOUIS J',
    taxed$: 545,
    usage: '190',
    use: 'CUUW'
  },
  '16-77-07': {
    address: 'E WASHINGTON RD',
    area: 5.18,
    building$: 0,
    centers: [
      {
        lat: 43.16855604488268,
        lon: -72.0819929377562
      }
    ],
    cu$: 0,
    land$: 561,
    owner: 'BOREY, LOUIS J',
    taxed$: 561,
    usage: '190',
    use: 'CUUW'
  },
  '16-82': {
    address: 'ISLAND POND RD',
    area: 0.09,
    building$: 0,
    centers: [
      {
        lat: 43.16869710024551,
        lon: -72.07285719970704
      }
    ],
    cu$: 5700,
    land$: 12800,
    owner: 'MCLAUGHLIN, JEFFREY  REV TRUST',
    taxed$: 18500,
    usage: '110',
    use: 'R1'
  },
  '16-83': {
    address: 'E WASHINGTON RD',
    area: 1.69,
    building$: 0,
    centers: [
      {
        lat: 43.16542145811275,
        lon: -72.08446505174352
      },
      {
        lat: 43.165967558989756,
        lon: -72.0850352534177
      }
    ],
    cu$: 0,
    land$: 10000,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 10000,
    usage: '300',
    use: 'EX-M'
  },
  '16-84': {
    address: '81 WASHINGTON DR',
    area: 4.5,
    building$: 123000,
    centers: [
      {
        lat: 43.16737656768504,
        lon: -72.06355981009058
      }
    ],
    cu$: 26500,
    land$: 45800,
    owner: 'LEIZURE, STEPHANIE W',
    taxed$: 195300,
    usage: '110',
    use: 'R1'
  },
  '16-89': {
    address: 'WASHINGTON DR',
    area: 1.9,
    building$: 0,
    centers: [
      {
        lat: 43.16740302888665,
        lon: -72.06172304671401
      }
    ],
    cu$: 0,
    land$: 25100,
    owner: 'LEIZURE, LARRY',
    taxed$: 25100,
    usage: '110',
    use: 'R1'
  },
  '16-90': {
    address: 'WASHINGTON DR',
    area: 3.3,
    building$: 0,
    centers: [
      {
        lat: 43.16692888089764,
        lon: -72.0612930325516
      }
    ],
    cu$: 0,
    land$: 26400,
    owner: 'FERNANDES, ORLANDO S',
    taxed$: 26400,
    usage: '110',
    use: 'R1'
  },
  '16-99': {
    address: 'E WASHINGTON RD',
    area: 3.1,
    building$: 0,
    centers: [
      {
        lat: 43.16465953663872,
        lon: -72.0587775816959
      }
    ],
    cu$: 0,
    land$: 13100,
    owner: 'WASHINGTON, TOWN OF - TC DEED',
    taxed$: 13100,
    usage: '300',
    use: 'EX-M'
  },
  '16-108': {
    address: 'E WASHINGTON RD',
    area: 2.8,
    building$: 0,
    centers: [
      {
        lat: 43.16638843600722,
        lon: -72.05415920099517
      }
    ],
    cu$: 0,
    land$: 20700,
    owner: 'KNOWLTON, GLENN R',
    taxed$: 20700,
    usage: '110',
    use: 'R1'
  },
  '16-109': {
    address: 'E WASHINGTON RD',
    area: 2.46,
    building$: 0,
    centers: [
      {
        lat: 43.16660779527966,
        lon: -72.05369807797815
      }
    ],
    cu$: 0,
    land$: 20500,
    owner: 'BUCCINO, MATTHEW',
    taxed$: 20500,
    usage: '110',
    use: 'R1'
  },
  '16-110': {
    address: 'E WASHINGTON RD',
    area: 2.75,
    building$: 0,
    centers: [
      {
        lat: 43.16701286404969,
        lon: -72.05360631451103
      }
    ],
    cu$: 0,
    land$: 20700,
    owner: 'LEMIRE, LOUIS P',
    taxed$: 20700,
    usage: '110',
    use: 'R1'
  },
  '16-113': {
    address: 'E WASHINGTON RD',
    area: 4.2,
    building$: 0,
    centers: [
      {
        lat: 43.16843358907129,
        lon: -72.05380348372836
      }
    ],
    cu$: 0,
    land$: 26000,
    owner: 'YOUNG SR, MARK EDWIN',
    taxed$: 26000,
    usage: '110',
    use: 'R1'
  },
  '16-115': {
    address: 'E WASHINGTON RD',
    area: 20.67,
    building$: 0,
    centers: [
      {
        lat: 43.16788619035028,
        lon: -72.0582568558603
      }
    ],
    cu$: 0,
    land$: 1435,
    owner: 'JOHNSON, JEFFREY',
    taxed$: 1435,
    usage: '190',
    use: 'CUUW'
  },
  '16-120': {
    address: 'BEAVER BROOK RD',
    area: 2.19,
    building$: 0,
    centers: [
      {
        lat: 43.147012222203394,
        lon: -72.08408060551946
      }
    ],
    cu$: 0,
    land$: 25400,
    owner: 'COYNE, EDWARD J',
    taxed$: 25400,
    usage: '110',
    use: 'R1A'
  },
  '16-122': {
    address: '28 DOLE SCHOOL HOUSE RD',
    area: 6.4,
    building$: 73700,
    centers: [
      {
        lat: 43.14695833321861,
        lon: -72.05715466751936
      }
    ],
    cu$: 8400,
    land$: 44100,
    owner: 'LAWRENCE, JOAN C',
    taxed$: 126200,
    usage: '110',
    use: 'R1'
  },
  '16-131-02': {
    address: 'BAILEY RD',
    area: 5.01,
    building$: 0,
    centers: [
      {
        lat: 43.14693757500036,
        lon: -72.070316307226
      }
    ],
    cu$: 0,
    land$: 28500,
    owner: 'SNELL, SCOTT J',
    taxed$: 28500,
    usage: '110',
    use: 'R1'
  },
  '16-127': {
    address: '93 BAILEY RD',
    area: 14.6,
    building$: 85300,
    centers: [
      {
        lat: 43.146941737437366,
        lon: -72.06652662174515
      }
    ],
    cu$: 2400,
    land$: 37448,
    owner: 'DALTO, PATRICIA A',
    taxed$: 125148,
    usage: '110',
    use: 'R1'
  },
  '16-131-01': {
    address: '102 BAILEY RD',
    area: 5.06,
    building$: 89800,
    centers: [
      {
        lat: 43.14789663307837,
        lon: -72.06947626201793
      }
    ],
    cu$: 0,
    land$: 46600,
    owner: 'SMITH, MICHAEL J',
    taxed$: 136400,
    usage: '110',
    use: 'R1'
  },
  '17-5': {
    address: 'KINGSBURY HILL RD',
    area: 100,
    building$: 0,
    centers: [
      {
        lat: 43.162223342740035,
        lon: -72.04442816298598
      }
    ],
    cu$: 0,
    land$: 2277,
    owner: 'SKIPPER, SARA ANNE REV FAM TR',
    taxed$: 2277,
    usage: '190',
    use: 'CUMH'
  },
  '17-6': {
    address: 'KINGSBURY HILL RD',
    area: 35,
    building$: 0,
    centers: [
      {
        lat: 43.162963424331934,
        lon: -72.03707387664461
      }
    ],
    cu$: 0,
    land$: 1570,
    owner: 'SKIPPER, SARA ANNE REV FAM TR',
    taxed$: 1570,
    usage: '190',
    use: 'CUMW'
  },
  '17-7': {
    address: 'KINGSBURY HILL RD',
    area: 26,
    building$: 0,
    centers: [
      {
        lat: 43.160945059227366,
        lon: -72.03467767885395
      }
    ],
    cu$: 0,
    land$: 886,
    owner: 'MATA, CRISTIAN',
    taxed$: 886,
    usage: '190',
    use: 'CUMW'
  },
  '17-9': {
    address: '9 KINGSBURY HILL RD',
    area: 6,
    building$: 81500,
    centers: [
      {
        lat: 43.1559171652567,
        lon: -72.03562773301095
      }
    ],
    cu$: 900,
    land$: 39000,
    owner: 'CARR, JEFFERY',
    taxed$: 121400,
    usage: '110',
    use: 'R1'
  },
  '17-13': {
    address: 'SO MAIN ST',
    area: 100,
    building$: 0,
    centers: [
      {
        lat: 43.151073657477134,
        lon: -72.04738172823512
      }
    ],
    cu$: 0,
    land$: 3502,
    owner: 'WILLIAMS, ANN MARIE',
    taxed$: 3502,
    usage: '190',
    use: 'CUUO'
  },
  '17-14': {
    address: 'SO MAIN ST',
    area: 54.2,
    building$: 0,
    centers: [
      {
        lat: 43.14920232786959,
        lon: -72.04218782113593
      }
    ],
    cu$: 0,
    land$: 1700,
    owner: 'WRIGHT, JOHN P TRUST',
    taxed$: 1700,
    usage: '190',
    use: 'CUUO'
  },
  '17-15': {
    address: 'SMITH POND RD',
    area: 139,
    building$: 0,
    centers: [
      {
        lat: 43.147977799630226,
        lon: -72.03403623441058
      }
    ],
    cu$: 2000,
    land$: 8514,
    owner: 'NIVEN, RICHARD',
    taxed$: 10514,
    usage: '110',
    use: 'R1'
  },
  '17-29': {
    address: 'WILD ACRE DR',
    area: 0.198,
    building$: 0,
    centers: [
      {
        lat: 43.152983582741804,
        lon: -72.02908438829309
      }
    ],
    cu$: 0,
    land$: 51500,
    owner: 'CARUSO, JESSIE',
    taxed$: 51500,
    usage: '110',
    use: 'R1W'
  },
  '18-2': {
    address: 'JEFTS RD',
    area: 26.9,
    building$: 0,
    centers: [
      {
        lat: 43.13707623271611,
        lon: -72.16024723859756
      }
    ],
    cu$: 0,
    land$: 2201,
    owner: 'MURDOCK, RICHARD W. TRUSTEE RE',
    taxed$: 2201,
    usage: '190',
    use: 'CUUW'
  },
  '18-33': {
    address: 'JEFTS RD',
    area: 80,
    building$: 0,
    centers: [
      {
        lat: 43.135564140622265,
        lon: -72.17009854403521
      }
    ],
    cu$: 0,
    land$: 4897,
    owner: 'STERLING QUALITY CLEANERS, INC',
    taxed$: 4897,
    usage: '190',
    use: 'CUUW'
  },
  '22-22': {
    address: 'HALFMOON PD RD',
    area: 0.1,
    building$: 0,
    centers: [
      {
        lat: 43.17491380729864,
        lon: -72.09283788582363
      }
    ],
    cu$: 0,
    land$: 1800,
    owner: 'BRITT, ANDREW W',
    taxed$: 1800,
    usage: '110',
    use: 'R1'
  },
  '20-38': {
    address: 'BAILEY RD',
    area: 2.5,
    building$: 0,
    centers: [
      {
        lat: 43.138995378818905,
        lon: -72.06472163632361
      }
    ],
    cu$: 0,
    land$: 17100,
    owner: 'DEVLIN, NANCY L REVOC TRUST',
    taxed$: 17100,
    usage: '110',
    use: 'R1'
  },
  '20-126': {
    address: '238 WOODPECKER RD',
    area: 1.9,
    building$: 39200,
    centers: [
      {
        lat: 43.142443877185386,
        lon: -72.07795975524598
      }
    ],
    cu$: 1400,
    land$: 33900,
    owner: 'LAFFERTY, ANDREW AND KATHERINE',
    taxed$: 74500,
    usage: '110',
    use: 'R1A'
  },
  '20-122': {
    address: 'FOX RUN RD',
    area: 6.8,
    building$: 0,
    centers: [
      {
        lat: 43.14173800864895,
        lon: -72.0824792489632
      }
    ],
    cu$: 0,
    land$: 548,
    owner: 'BUCHANAN, LORNE R J',
    taxed$: 548,
    usage: '190',
    use: 'CUUW'
  },
  '20-128': {
    address: '192 WOODPECKER RD',
    area: 2.1,
    building$: 16000,
    centers: [
      {
        lat: 43.14297922656794,
        lon: -72.07592675956361
      }
    ],
    cu$: 500,
    land$: 37900,
    owner: 'KILDAY JR, GORDON',
    taxed$: 54400,
    usage: '110',
    use: 'R1A'
  },
  '20-149': {
    address: '530 LONG POND RD',
    area: 1.19,
    building$: 233800,
    centers: [
      {
        lat: 43.13392223273881,
        lon: -72.07923360411303
      }
    ],
    cu$: 3500,
    land$: 174500,
    owner: 'GOODRICH, NANCY N.',
    taxed$: 411800,
    usage: '110',
    use: 'R1W'
  },
  '20-169': {
    address: '700 HIGHLAND HAVEN RD',
    area: 2.58,
    building$: 78900,
    centers: [
      {
        lat: 43.145369838170545,
        lon: -72.08568382664596
      }
    ],
    cu$: 0,
    land$: 246400,
    owner: 'TAGLIERI, WILLIAM C',
    taxed$: 325300,
    usage: '110',
    use: 'R1'
  },
  '20-172': {
    address: 'BEAVER BROOK RD',
    area: 3.72,
    building$: 0,
    centers: [
      {
        lat: 43.14571886850214,
        lon: -72.08398630629853
      }
    ],
    cu$: 0,
    land$: 154400,
    owner: 'COYNE, EDWARD J',
    taxed$: 154400,
    usage: '110',
    use: 'R1W'
  },
  '20-178': {
    address: 'DOLE SCHOOL HOUSE RD',
    area: 9,
    building$: 0,
    centers: [
      {
        lat: 43.144862387538495,
        lon: -72.05462338662129
      }
    ],
    cu$: 0,
    land$: 25900,
    owner: 'PIERCE, STEPHEN C',
    taxed$: 25900,
    usage: '110',
    use: 'R1'
  },
  '20-179': {
    address: 'DOLE SCHOOL HOUSE RD',
    area: 7.6,
    building$: 0,
    centers: [
      {
        lat: 43.14542871327944,
        lon: -72.05686345889623
      }
    ],
    cu$: 0,
    land$: 24400,
    owner: 'HOLM, LORI A',
    taxed$: 24400,
    usage: '110',
    use: 'R1'
  },
  '20-185': {
    address: 'BEAVER BROOK RD',
    area: 8.78,
    building$: 0,
    centers: [
      {
        lat: 43.14592672591195,
        lon: -72.07840591825885
      }
    ],
    cu$: 0,
    land$: 36000,
    owner: 'SMITH-DUFTON',
    taxed$: 36000,
    usage: '110',
    use: 'R1'
  },
  '21-1': {
    address: '1810 SO MAIN ST',
    area: 35.4,
    building$: 107500,
    centers: [
      {
        lat: 43.14588698166257,
        lon: -72.04651551308116
      }
    ],
    cu$: 16200,
    land$: 43612,
    owner: 'NEUBACHER DECLARATION TRST',
    taxed$: 167312,
    usage: '110',
    use: 'R1'
  },
  '21-7': {
    address: 'OLD COUNTY RD',
    area: 49.2,
    building$: 0,
    centers: [
      {
        lat: 43.1308695447204,
        lon: -72.0414444879838
      }
    ],
    cu$: 0,
    land$: 1570,
    owner: 'MAINE, CRAIGEN L T REVC FAM TR',
    taxed$: 1570,
    usage: '190',
    use: 'CUUO'
  },
  '21-10': {
    address: 'OLD COUNTY RD',
    area: 0.5,
    building$: 0,
    centers: [
      {
        lat: 43.13808866799725,
        lon: -72.04611426965363
      }
    ],
    cu$: 0,
    land$: 15800,
    owner: 'BERNARDO, JOHN',
    taxed$: 15800,
    usage: '110',
    use: 'R1'
  },
  '21-15': {
    address: '25 DOLE SCHOOL HOUSE RD',
    area: 55.5,
    building$: 0,
    centers: [
      {
        lat: 43.14416390360058,
        lon: -72.04944597732346
      }
    ],
    cu$: 0,
    land$: 2553,
    owner: 'BELL, CRAIG BARROW REVOC TRUST',
    taxed$: 2553,
    usage: '190',
    use: 'CUUH'
  },
  '22-23': {
    address: 'HALFMOON PD RD',
    area: 0.15,
    building$: 0,
    centers: [
      {
        lat: 43.17495774911296,
        lon: -72.0930884185977
      }
    ],
    cu$: 12300,
    land$: 18000,
    owner: 'WASHINGTON HISTORICAL SOCIETY',
    taxed$: 30300,
    usage: '260',
    use: 'CI'
  },
  '22-27': {
    address: 'HALFMOON PD RD',
    area: 0.09,
    building$: 0,
    centers: [
      {
        lat: 43.17525587237146,
        lon: -72.09409305809073
      }
    ],
    cu$: 0,
    land$: 9900,
    owner: 'SUMSKI, LAWRENCE P',
    taxed$: 9900,
    usage: '110',
    use: 'R1'
  },
  '22-44': {
    address: '126 SYMONDS LN',
    area: 5,
    building$: 58000,
    centers: [
      {
        lat: 43.172217537009544,
        lon: -72.10031564347453
      }
    ],
    cu$: 3200,
    land$: 38000,
    owner: 'BARKER, CARL',
    taxed$: 99200,
    usage: '110',
    use: 'R1'
  },
  '22-45': {
    address: '17 MILLEN POND RD',
    area: 0.5,
    building$: 32500,
    centers: [
      {
        lat: 43.174390366274984,
        lon: -72.10370464325845
      }
    ],
    cu$: 5100,
    land$: 41300,
    owner: 'GLYNN, KATHLEEN M.',
    taxed$: 78900,
    usage: '110',
    use: 'R1'
  },
  '22-47': {
    address: 'FAXON HILL RD',
    area: 7.8,
    building$: 0,
    centers: [
      {
        lat: 43.176198936471394,
        lon: -72.10300947889148
      }
    ],
    cu$: 0,
    land$: 12700,
    owner: 'WASHINGTON, TOWN OF - CEMETERY',
    taxed$: 12700,
    usage: '300',
    use: 'EX-M'
  },
  '22-48': {
    address: 'FAXON HILL RD',
    area: 4.89,
    building$: 0,
    centers: [
      {
        lat: 43.17649213540451,
        lon: -72.10198414494424
      }
    ],
    cu$: 0,
    land$: 376,
    owner: 'STAPLETON, JOSEPH BRIAN',
    taxed$: 376,
    usage: '190',
    use: 'CUUO'
  },
  '22-55': {
    address: 'NO MAIN ST',
    area: 1.848,
    building$: 0,
    centers: [
      {
        lat: 43.176978934203795,
        lon: -72.0988722825155
      }
    ],
    cu$: 0,
    land$: 9400,
    owner: 'WASHINGTON, TOWN OF - WAYSD PK',
    taxed$: 9400,
    usage: '300',
    use: 'EX-M'
  },
  '23-41': {
    address: 'BEAR HILL RD',
    area: 24,
    building$: 0,
    centers: [
      {
        lat: 43.1877078794766,
        lon: -72.02174739700163
      }
    ],
    cu$: 0,
    land$: 2051,
    owner: 'SCHWARTZ REV FAM TRUST',
    taxed$: 2051,
    usage: '190',
    use: 'CUUW'
  },
  '22-68': {
    address: 'NO MAIN ST',
    area: 0.27,
    building$: 0,
    centers: [
      {
        lat: 43.176421540884306,
        lon: -72.09700576321292
      },
      {
        lat: 43.17646039514451,
        lon: -72.09730485606282
      }
    ],
    cu$: 4700,
    land$: 3200,
    owner: 'WASHINGTON, TOWN OF - BANDSTND',
    taxed$: 7900,
    usage: '300',
    use: 'EX-M'
  },
  '23-29': {
    address: 'OLD HILLSBORO RD',
    area: 10.8,
    building$: 0,
    centers: [
      {
        lat: 43.18903763359615,
        lon: -72.01152009057307
      }
    ],
    cu$: 0,
    land$: 1169,
    owner: 'RUSSELL FAMILY TRUST',
    taxed$: 1169,
    usage: '190',
    use: 'CUUW'
  },
  '23-30': {
    address: 'E WASHINGTON RD',
    area: 0.29,
    building$: 0,
    centers: [
      {
        lat: 43.18982749187458,
        lon: -72.01578445677652
      }
    ],
    cu$: 0,
    land$: 8900,
    owner: 'MASLIN, ALBERT J. III',
    taxed$: 8900,
    usage: '110',
    use: 'R1'
  },
  '23-31': {
    address: 'E WASHINGTON RD',
    area: 0.05,
    building$: 0,
    centers: [
      {
        lat: 43.19000716061355,
        lon: -72.01602400300969
      }
    ],
    cu$: 0,
    land$: 2900,
    owner: 'FACCHINA, BAZIL T',
    taxed$: 2900,
    usage: '110',
    use: 'R1'
  },
  '23-34': {
    address: 'E WASHINGTON RD',
    area: 0.05,
    building$: 0,
    centers: [
      {
        lat: 43.19012431445204,
        lon: -72.01853157438084
      }
    ],
    cu$: 0,
    land$: 12800,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 12800,
    usage: '300',
    use: 'EX-M'
  },
  '23-36': {
    address: 'BEAR HILL RD',
    area: 7,
    building$: 0,
    centers: [
      {
        lat: 43.18869303268315,
        lon: -72.01789676936119
      }
    ],
    cu$: 0,
    land$: 300,
    owner: 'HEAVY-LEEDHAM RECREATION TRUST',
    taxed$: 300,
    usage: '190',
    use: 'CUUO'
  },
  '23-37': {
    address: 'BEAR HILL RD',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.188577786984105,
        lon: -72.01924448830282
      }
    ],
    cu$: 0,
    land$: 345,
    owner: 'HEAVY-LEEDHAM RECREATION TRUST',
    taxed$: 345,
    usage: '190',
    use: 'CUUH'
  },
  '24-23': {
    address: 'VALLEY RD',
    area: 0.17,
    building$: 0,
    centers: [
      {
        lat: 43.1437225460534,
        lon: -72.09247379087493
      }
    ],
    cu$: 0,
    land$: 10800,
    owner: 'AIESI, ROCCO P ESTATE',
    taxed$: 10800,
    usage: '110',
    use: 'R1A'
  },
  '24-22': {
    address: 'VALLEY RD',
    area: 0.24,
    building$: 0,
    centers: [
      {
        lat: 43.143850875424405,
        lon: -72.09272815655544
      }
    ],
    cu$: 0,
    land$: 13600,
    owner: 'CRANDALL, WILLIAM C',
    taxed$: 13600,
    usage: '110',
    use: 'R1A'
  },
  '24-26': {
    address: 'VALLEY RD',
    area: 0.23,
    building$: 0,
    centers: [
      {
        lat: 43.14309220882416,
        lon: -72.0921109102011
      }
    ],
    cu$: 0,
    land$: 11600,
    owner: 'FITZGERALD, RANDY H',
    taxed$: 11600,
    usage: '110',
    use: 'R1'
  },
  '24-32': {
    address: 'VALLEY RD',
    area: 0.4,
    building$: 0,
    centers: [
      {
        lat: 43.141896730889556,
        lon: -72.09178949457956
      }
    ],
    cu$: 0,
    land$: 14600,
    owner: 'GIBBS, BARRY',
    taxed$: 14600,
    usage: '110',
    use: 'R1A'
  },
  '24-33': {
    address: 'VALLEY RD',
    area: 0.23,
    building$: 0,
    centers: [
      {
        lat: 43.14073714218623,
        lon: -72.09218399876967
      }
    ],
    cu$: 0,
    land$: 13200,
    owner: 'CORDEIRO, PAUL',
    taxed$: 13200,
    usage: '110',
    use: 'R1A'
  },
  '24-51': {
    address: '79 LOOKOUT POINT RD',
    area: 0.15,
    building$: 15200,
    centers: [
      {
        lat: 43.141002098257566,
        lon: -72.0891603932453
      }
    ],
    cu$: 3300,
    land$: 163000,
    owner: 'OUELLETTE, DONALD L & DOLORES ',
    taxed$: 181500,
    usage: '110',
    use: 'R1W'
  },
  '24-53': {
    address: '104 LOOKOUT POINT RD',
    area: 0.37,
    building$: 66400,
    centers: [
      {
        lat: 43.14164616890684,
        lon: -72.08877301698344
      }
    ],
    cu$: 7900,
    land$: 211100,
    owner: 'BUECHEL, ALAN P',
    taxed$: 285400,
    usage: '110',
    use: 'R1W'
  },
  '24-80': {
    address: 'BEECH WAY',
    area: 0.49,
    building$: 0,
    centers: [
      {
        lat: 43.14405825253017,
        lon: -72.09187047491403
      }
    ],
    cu$: 0,
    land$: 22000,
    owner: 'KARACIUS, DELIA M',
    taxed$: 22000,
    usage: '110',
    use: 'R1A'
  },
  '24-81': {
    address: 'BEECH WAY',
    area: 0.45,
    building$: 0,
    centers: [
      {
        lat: 43.14395042195333,
        lon: -72.09152165165344
      }
    ],
    cu$: 0,
    land$: 21800,
    owner: 'KARACIUS, DELIA M',
    taxed$: 21800,
    usage: '110',
    use: 'R1A'
  },
  '24-88': {
    address: 'BIRCH POINT WAY',
    area: 0.34,
    building$: 0,
    centers: [
      {
        lat: 43.14513010212847,
        lon: -72.09012646442189
      }
    ],
    cu$: 0,
    land$: 104400,
    owner: 'BARTEVIAN, PATRICIA REV TRUST',
    taxed$: 104400,
    usage: '110',
    use: 'R1W'
  },
  '24-108': {
    address: 'COVE RD',
    area: 0.28,
    building$: 66900,
    centers: [
      {
        lat: 43.14660758702392,
        lon: -72.09285341948143
      }
    ],
    cu$: 0,
    land$: 119800,
    owner: 'GINGRAS, NORMAN',
    taxed$: 186700,
    usage: '110',
    use: 'R1W'
  },
  '24-120-02': {
    address: 'COVE RD',
    area: 0.34,
    building$: 0,
    centers: [
      {
        lat: 43.14638724529617,
        lon: -72.09384519097998
      }
    ],
    cu$: 0,
    land$: 11500,
    owner: 'MANDARANO, ANTHONY',
    taxed$: 11500,
    usage: '110',
    use: 'R1A'
  },
  '24-130': {
    address: '1 HERMIT ISLAND',
    area: 0.42,
    building$: 18300,
    centers: [
      {
        lat: 43.14276885242245,
        lon: -72.08741329173756
      }
    ],
    cu$: 0,
    land$: 91000,
    owner: 'HERMIT ISLAND PROPERTY TRUST',
    taxed$: 109300,
    usage: '110',
    use: 'R1'
  },
  '24-131': {
    address: '1 MOODY ISLAND',
    area: 1.18,
    building$: 20200,
    centers: [
      {
        lat: 43.14275796881618,
        lon: -72.08625814570055
      }
    ],
    cu$: 7500,
    land$: 92200,
    owner: 'GRIMES,  CRAIG H.',
    taxed$: 119900,
    usage: '110',
    use: 'R1'
  },
  '25-4': {
    address: 'VALLEY RD',
    area: 0.4,
    building$: 0,
    centers: [
      {
        lat: 43.13841321649237,
        lon: -72.09054221949147
      }
    ],
    cu$: 0,
    land$: 14600,
    owner: 'DEMO, DARRIN',
    taxed$: 14600,
    usage: '110',
    use: 'R1A'
  },
  '25-6': {
    address: 'VALLEY RD',
    area: 0.44,
    building$: 0,
    centers: [
      {
        lat: 43.13834116866384,
        lon: -72.08989779868944
      }
    ],
    cu$: 0,
    land$: 14800,
    owner: 'MCNEILL, ROBERT J JR',
    taxed$: 14800,
    usage: '110',
    use: 'R1A'
  },
  '25-8': {
    address: 'VALLEY RD',
    area: 0.76,
    building$: 0,
    centers: [
      {
        lat: 43.138640958450445,
        lon: -72.08821391910718
      }
    ],
    cu$: 0,
    land$: 15600,
    owner: 'PEABODY, CHARLES L REV TRUST',
    taxed$: 15600,
    usage: '110',
    use: 'R1A'
  },
  '25-15': {
    address: 'MCQUADE RD',
    area: 0.09,
    building$: 0,
    centers: [
      {
        lat: 43.13789663692338,
        lon: -72.0870959078467
      }
    ],
    cu$: 0,
    land$: 8800,
    owner: 'HOULE, MATTHEW',
    taxed$: 8800,
    usage: '110',
    use: 'R1A'
  },
  '25-15-01': {
    address: 'MCQUADE RD',
    area: 0.16,
    building$: 0,
    centers: [
      {
        lat: 43.13778127688478,
        lon: -72.08740286539668
      }
    ],
    cu$: 0,
    land$: 8300,
    owner: 'WASHINGTON, TOWN OF - TC DEED',
    taxed$: 8300,
    usage: '300',
    use: 'EX-M'
  },
  '25-34': {
    address: 'VALLEY RD',
    area: 0.19,
    building$: 0,
    centers: [
      {
        lat: 43.133498698300826,
        lon: -72.08923377163953
      }
    ],
    cu$: 0,
    land$: 11600,
    owner: 'LENZ, ALAN P',
    taxed$: 11600,
    usage: '110',
    use: 'R1A'
  },
  '25-35': {
    address: 'VALLEY RD',
    area: 0.26,
    building$: 0,
    centers: [
      {
        lat: 43.133013746315086,
        lon: -72.08941139637649
      }
    ],
    cu$: 0,
    land$: 14000,
    owner: 'KARPOWSKI JR,THOMAS',
    taxed$: 14000,
    usage: '110',
    use: 'R1A'
  },
  '25-54': {
    address: 'VALLEY RD',
    area: 0.41,
    building$: 0,
    centers: [
      {
        lat: 43.13121169972007,
        lon: -72.08393796682199
      }
    ],
    cu$: 0,
    land$: 118300,
    owner: 'PROCTOR, WILLIAM J',
    taxed$: 118300,
    usage: '110',
    use: 'R1W'
  },
  '25-56': {
    address: 'VALLEY RD',
    area: 0.135,
    building$: 0,
    centers: [
      {
        lat: 43.13144546599863,
        lon: -72.08428437015118
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'HIGHLAND LAKE ASSOC',
    taxed$: 0,
    usage: '260',
    use: 'CI'
  },
  '25-56-01': {
    address: 'VALLEY RD',
    area: 0.135,
    building$: 0,
    centers: [
      {
        lat: 43.13148427533092,
        lon: -72.08455022841774
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'HIGHLAND LAKE ASSOC',
    taxed$: 0,
    usage: '260',
    use: 'CI'
  },
  '25-100': {
    address: 'ISLAND OFF VALLEY RD',
    area: 0.46,
    building$: 0,
    centers: [
      {
        lat: 43.13432333477443,
        lon: -72.08644412360081
      }
    ],
    cu$: 0,
    land$: 91100,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 91100,
    usage: '110',
    use: 'R1W'
  },
  '25-111': {
    address: 'VALLEY RD',
    area: 0.26,
    building$: 0,
    centers: [
      {
        lat: 43.138231593033055,
        lon: -72.08623224916914
      }
    ],
    cu$: 0,
    land$: 107600,
    owner: 'CHICOINE, ROGER G. JR & ANGELA',
    taxed$: 107600,
    usage: '110',
    use: 'R1A'
  },
  '11-27': {
    address: 'LEMPSTER MT RD',
    area: 166.7,
    building$: 0,
    centers: [
      {
        lat: 43.18354379706618,
        lon: -72.10934014840896
      }
    ],
    cu$: 0,
    land$: 7947,
    owner: 'TWEEDY, MEGHAN',
    taxed$: 7947,
    usage: '190',
    use: 'CUUW'
  },
  '11-46': {
    address: 'MILLEN POND RD',
    area: 3.7,
    building$: 0,
    centers: [
      {
        lat: 43.171368909670434,
        lon: -72.12073964368
      }
    ],
    cu$: 10000,
    land$: 76338,
    owner: 'MUGAR, CAROLYN J',
    taxed$: 86338,
    usage: '110',
    use: 'R1W'
  },
  '12-54': {
    address: '378 MCLAUGHLIN RD',
    area: 13,
    building$: 151300,
    centers: [
      {
        lat: 43.175185265472585,
        lon: -72.07019894511458
      }
    ],
    cu$: 3000,
    land$: 184489,
    owner: 'DAVIS, SPENCER W',
    taxed$: 338789,
    usage: '110',
    use: 'R1W'
  },
  '15-60': {
    address: '122 OLD HAYING RD',
    area: 2.03,
    building$: 97400,
    centers: [
      {
        lat: 43.16112330739047,
        lon: -72.12438954449712
      }
    ],
    cu$: 10700,
    land$: 213900,
    owner: 'MANCHESTER, LAURA LINCOLN TRUS',
    taxed$: 322000,
    usage: '110',
    use: 'R1W'
  },
  '19-6': {
    address: 'BARDEN POND RD',
    area: 10.2,
    building$: 0,
    centers: [
      {
        lat: 43.136586893586156,
        lon: -72.10112088502267
      }
    ],
    cu$: 0,
    land$: 30500,
    owner: 'ALLAN, COLLEEN CONLEY &JEFFREY',
    taxed$: 30500,
    usage: '110',
    use: 'R1'
  },
  '1-3': {
    address: 'NO MAIN ST',
    area: 56,
    building$: 0,
    centers: [
      {
        lat: 43.239251135739316,
        lon: -72.12258046603544
      }
    ],
    cu$: 0,
    land$: 103400,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 103400,
    usage: '500',
    use: 'EX-S'
  },
  '4-5': {
    address: 'NO MAIN ST',
    area: 72,
    building$: 0,
    centers: [
      {
        lat: 43.21510684810425,
        lon: -72.12236920462576
      }
    ],
    cu$: 0,
    land$: 4044,
    owner: 'CHAMBERLAIN, ELINOR M',
    taxed$: 4044,
    usage: '110',
    use: 'R1'
  },
  '14-398': {
    address: 'OLD MARLOW RD',
    area: 148,
    building$: 0,
    centers: [
      {
        lat: 43.162941608180155,
        lon: -72.1633158084894
      }
    ],
    cu$: 0,
    land$: 4151,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 4151,
    usage: '190',
    use: 'CUMH'
  },
  '20-64': {
    address: 'E SHORE DR',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.130089913520294,
        lon: -72.07259271738423
      }
    ],
    cu$: 0,
    land$: 19700,
    owner: 'HODGE, STEVEN GERARD',
    taxed$: 19700,
    usage: '110',
    use: 'R1A'
  },
  '8-49': {
    address: 'LOVELL MT RD',
    area: 15,
    building$: 0,
    centers: [
      {
        lat: 43.20195043922726,
        lon: -72.05521328875936
      }
    ],
    cu$: 0,
    land$: 479,
    owner: 'BERNARDO, JOHN',
    taxed$: 479,
    usage: '190',
    use: 'CUUO'
  },
  '9-1': {
    address: 'AYERS POND RD',
    area: 8.7,
    building$: 0,
    centers: [
      {
        lat: 43.21122262445165,
        lon: -72.04737230434199
      }
    ],
    cu$: 0,
    land$: 301,
    owner: 'MCGRANAHAN, DONALD REV TRUST',
    taxed$: 301,
    usage: '190',
    use: 'CUUO'
  },
  '7-18': {
    address: 'WASHINGTON HGTS RD',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.19854346659469,
        lon: -72.11454365227718
      }
    ],
    cu$: 1000,
    land$: 20400,
    owner: 'MCLARNEY, MICHAEL D',
    taxed$: 21400,
    usage: '110',
    use: 'R1'
  },
  '7-44': {
    address: 'NO MAIN ST',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.19855172147168,
        lon: -72.10968486071772
      }
    ],
    cu$: 0,
    land$: 23400,
    owner: 'RODE, ALEXANDER F',
    taxed$: 23400,
    usage: '110',
    use: 'R1'
  },
  '14-452-01': {
    address: 'BRENDA LN',
    area: 0.17,
    building$: 0,
    centers: [
      {
        lat: 43.147746224868385,
        lon: -72.15295406235545
      }
    ],
    cu$: 0,
    land$: 43400,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 43400,
    usage: '110',
    use: 'R1W'
  },
  '6-5': {
    address: 'AYERS POND RD',
    area: 18.8,
    building$: 0,
    centers: [
      {
        lat: 43.21669816715452,
        lon: -72.0380898894278
      }
    ],
    cu$: 0,
    land$: 777,
    owner: 'BIBBO, G EDWARD',
    taxed$: 777,
    usage: '190',
    use: 'CUUO'
  },
  '6-6': {
    address: '960 AYERS POND RD',
    area: 2,
    building$: 14600,
    centers: [
      {
        lat: 43.21678733229406,
        lon: -72.03920387048481
      }
    ],
    cu$: 5400,
    land$: 25200,
    owner: 'WYMAN, BRIAN S',
    taxed$: 45200,
    usage: '110',
    use: 'R1'
  },
  '7-46': {
    address: 'NO MAIN ST',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.19730930607456,
        lon: -72.10914674597909
      }
    ],
    cu$: 0,
    land$: 7000,
    owner: 'PRETA, JOSE C',
    taxed$: 7000,
    usage: '110',
    use: 'R1'
  },
  '6-9': {
    address: 'AYERS POND RD',
    area: 8.7,
    building$: 0,
    centers: [
      {
        lat: 43.221163910021176,
        lon: -72.04475483605219
      }
    ],
    cu$: 0,
    land$: 918,
    owner: 'BIBBO, G EDWARD',
    taxed$: 918,
    usage: '190',
    use: 'CUUW'
  },
  '7-22': {
    address: '179 WASHINGTON HGTS',
    area: 5.4,
    building$: 0,
    centers: [
      {
        lat: 43.196617063946555,
        lon: -72.11806713206246
      }
    ],
    cu$: 0,
    land$: 21000,
    owner: 'WALSH, MALLORY JACOB',
    taxed$: 21000,
    usage: '110',
    use: 'R1'
  },
  '1-1': {
    address: 'NO MAIN ST',
    area: 78,
    building$: 0,
    centers: [
      {
        lat: 43.245061052459334,
        lon: -72.12126913725456
      }
    ],
    cu$: 0,
    land$: 1660,
    owner: 'GOSHEN HILL FARM, LLC',
    taxed$: 1660,
    usage: '190',
    use: 'CUMH'
  },
  '1-2': {
    address: 'NO MAIN ST',
    area: 112,
    building$: 0,
    centers: [
      {
        lat: 43.24636579136597,
        lon: -72.11533421927808
      }
    ],
    cu$: 0,
    land$: 3210,
    owner: 'GOSHEN FOREST, LLC',
    taxed$: 3210,
    usage: '190',
    use: 'CUMH'
  },
  '2-1': {
    address: 'BACK MT RD',
    area: 103,
    building$: 0,
    centers: [
      {
        lat: 43.244391802791725,
        lon: -72.07631605951215
      }
    ],
    cu$: 0,
    land$: 2557,
    owner: 'BUTLER MOUNTAIN HOLDINGS, LLC',
    taxed$: 2557,
    usage: '190',
    use: 'CUMH'
  },
  '2-2': {
    address: 'BACK MT RD',
    area: 400,
    building$: 0,
    centers: [
      {
        lat: 43.24187593802121,
        lon: -72.06883423232917
      }
    ],
    cu$: 0,
    land$: 10848,
    owner: 'MATA, CRISTIAN',
    taxed$: 10848,
    usage: '190',
    use: 'CUMH'
  },
  '2-3': {
    address: 'BACK MT RD',
    area: 65,
    building$: 0,
    centers: [
      {
        lat: 43.246061373959456,
        lon: -72.05258169739275
      }
    ],
    cu$: 0,
    land$: 76500,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 76500,
    usage: '501',
    use: 'EX-M'
  },
  '6-1': {
    address: 'AYERS POND RD',
    area: 195,
    building$: 0,
    centers: [
      {
        lat: 43.22395139000477,
        lon: -72.05120081369445
      }
    ],
    cu$: 0,
    land$: 4940,
    owner: 'BUTLER MOUNTAIN HOLDINGS, LLC',
    taxed$: 4940,
    usage: '190',
    use: 'CUMH'
  },
  '3-1': {
    address: 'BACK MT RD',
    area: 127,
    building$: 0,
    centers: [
      {
        lat: 43.25147148648234,
        lon: -72.04966065101898
      }
    ],
    cu$: 0,
    land$: 58100,
    owner: 'MCDONALD, CHERYL FORTUNE',
    taxed$: 58100,
    usage: '110',
    use: 'R1'
  },
  '3-2': {
    address: 'BACK MT RD',
    area: 17,
    building$: 0,
    centers: [
      {
        lat: 43.248795143373385,
        lon: -72.04543606454915
      }
    ],
    cu$: 0,
    land$: 570,
    owner: 'BERNARDO, JOHN',
    taxed$: 570,
    usage: '190',
    use: 'CUUO'
  },
  '3-3': {
    address: 'BACK MT RD',
    area: 53.4,
    building$: 0,
    centers: [
      {
        lat: 43.245663194200326,
        lon: -72.04674627583454
      }
    ],
    cu$: 0,
    land$: 2698,
    owner: 'DICKINSON IV, LEON L',
    taxed$: 2698,
    usage: '190',
    use: 'CUUH'
  },
  '4-1': {
    address: 'NO MAIN ST',
    area: 83,
    building$: 0,
    centers: [
      {
        lat: 43.22854987190421,
        lon: -72.12279368891762
      }
    ],
    cu$: 0,
    land$: 126700,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 126700,
    usage: '500',
    use: 'EX-S'
  },
  '4-2': {
    address: '1915 NO MAIN ST',
    area: 6,
    building$: 43200,
    centers: [
      {
        lat: 43.2240802918634,
        lon: -72.11951166111672
      }
    ],
    cu$: 900,
    land$: 43500,
    owner: 'WADLEIGH, MELVIN R',
    taxed$: 87600,
    usage: '110',
    use: 'R1'
  },
  '6-4': {
    address: 'AYERS POND RD',
    area: 93.234,
    building$: 0,
    centers: [
      {
        lat: 43.21877371833291,
        lon: -72.04043747519087
      }
    ],
    cu$: 1500,
    land$: 7560,
    owner: 'DOLE EW TRUST',
    taxed$: 9060,
    usage: '110',
    use: 'R1'
  },
  '4-3': {
    address: '1983 NO MAIN ST',
    area: 75,
    building$: 201200,
    centers: [
      {
        lat: 43.222444667652105,
        lon: -72.1234596591083
      }
    ],
    cu$: 6100,
    land$: 39979,
    owner: 'WOLFE, TIMOTHY & STEPHANIE TR',
    taxed$: 247279,
    usage: '110',
    use: 'R1'
  },
  '4-4': {
    address: 'NO MAIN ST',
    area: 80,
    building$: 0,
    centers: [
      {
        lat: 43.21972988730006,
        lon: -72.12103294315376
      }
    ],
    cu$: 0,
    land$: 118700,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 118700,
    usage: '500',
    use: 'EX-S'
  },
  '7-12': {
    address: '1141 NO MAIN ST',
    area: 55,
    building$: 9600,
    centers: [
      {
        lat: 43.203088912317284,
        lon: -72.11658942374083
      }
    ],
    cu$: 0,
    land$: 50469,
    owner: 'SAUNDERS, BRADFORD O',
    taxed$: 60069,
    usage: '110',
    use: 'R1'
  },
  '7-14': {
    address: 'NO MAIN ST',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.20062580954013,
        lon: -72.11101647540947
      }
    ],
    cu$: 0,
    land$: 16500,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 16500,
    usage: '400',
    use: 'EX-S'
  },
  '7-9': {
    address: 'TWIN BRIDGE RD',
    area: 19.5,
    building$: 0,
    centers: [
      {
        lat: 43.19855271648155,
        lon: -72.12118297431371
      }
    ],
    cu$: 0,
    land$: 1232,
    owner: 'GUNDERSEN, JAMES I',
    taxed$: 1232,
    usage: '190',
    use: 'CUUH'
  },
  '4-6': {
    address: '100 PILLSBURY STATE PARK',
    area: 3503,
    building$: 0,
    centers: [
      {
        lat: 43.22722276162161,
        lon: -72.10076759342373
      }
    ],
    cu$: 0,
    land$: 1920700,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 1920700,
    usage: '500',
    use: 'EX-S'
  },
  '8-17': {
    address: '1704 HALFMOON PD RD',
    area: 5,
    building$: 23100,
    centers: [
      {
        lat: 43.20702216770492,
        lon: -72.07610468837221
      }
    ],
    cu$: 1600,
    land$: 33900,
    owner: 'NADEAU, LIONEL',
    taxed$: 58600,
    usage: '110',
    use: 'R1'
  },
  '5-1': {
    address: 'HALFMOON PD RD',
    area: 909,
    building$: 0,
    centers: [
      {
        lat: 43.22075700808616,
        lon: -72.0804081228361
      }
    ],
    cu$: 0,
    land$: 21520,
    owner: 'BUTLER MOUNTAIN HOLDINGS, LLC',
    taxed$: 21520,
    usage: '190',
    use: 'CUMH'
  },
  '5-3': {
    address: 'AYERS POND RD',
    area: 300,
    building$: 0,
    centers: [
      {
        lat: 43.21823747251323,
        lon: -72.05499478473997
      }
    ],
    cu$: 0,
    land$: 9187,
    owner: 'MATA, CRISTIAN',
    taxed$: 9187,
    usage: '190',
    use: 'CUMH'
  },
  '6-8': {
    address: '919 AYERS POND RD',
    area: 63.344,
    building$: 0,
    centers: [
      {
        lat: 43.21456467358936,
        lon: -72.04306805680065
      }
    ],
    cu$: 0,
    land$: 1924,
    owner: 'DOLE EW TRUST',
    taxed$: 1924,
    usage: '190',
    use: 'CUMH'
  },
  '7-1': {
    address: 'NO MAIN ST',
    area: 122,
    building$: 0,
    centers: [
      {
        lat: 43.208392787441255,
        lon: -72.12239590588278
      }
    ],
    cu$: 0,
    land$: 9791,
    owner: 'CHAMBERLAIN, ELINOR M',
    taxed$: 9791,
    usage: '190',
    use: 'CUUH'
  },
  '7-7-02': {
    address: 'LEMPSTER MT RD',
    area: 19,
    building$: 0,
    centers: [
      {
        lat: 43.19052695390235,
        lon: -72.121098605174
      }
    ],
    cu$: 0,
    land$: 5380,
    owner: 'HUNT II, CHARLES M',
    taxed$: 5380,
    usage: '190',
    use: 'CUUW'
  },
  '7-33': {
    address: 'WASHINGTON HGTS RD',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.19293271776335,
        lon: -72.11512031808424
      }
    ],
    cu$: 0,
    land$: 401,
    owner: 'WILSON, RAYMOND L',
    taxed$: 401,
    usage: '190',
    use: 'CUUW'
  },
  '7-41': {
    address: 'WASHINGTON HGTS RD',
    area: 7.1,
    building$: 0,
    centers: [
      {
        lat: 43.196291395333105,
        lon: -72.11067467168151
      }
    ],
    cu$: 0,
    land$: 23600,
    owner: 'MERVA, JAN',
    taxed$: 23600,
    usage: '110',
    use: 'R1'
  },
  '8-1': {
    address: 'HALFMOON PD RD',
    area: 577.1,
    building$: 0,
    centers: [
      {
        lat: 43.19604221439343,
        lon: -72.09196050811053
      }
    ],
    cu$: 0,
    land$: 18248,
    owner: 'JONES, ANTHONY A',
    taxed$: 18248,
    usage: '190',
    use: 'CUMH'
  },
  '8-30': {
    address: 'MARTIN RD',
    area: 20,
    building$: 0,
    centers: [
      {
        lat: 43.21108267750886,
        lon: -72.06103289456341
      }
    ],
    cu$: 0,
    land$: 1118,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 1118,
    usage: '190',
    use: 'CUUH'
  },
  '8-31': {
    address: 'MARTIN RD',
    area: 170,
    building$: 0,
    centers: [
      {
        lat: 43.20899590490666,
        lon: -72.05434715488967
      }
    ],
    cu$: 0,
    land$: 4332,
    owner: 'BUTLER MOUNTAIN HOLDINGS, LLC',
    taxed$: 4332,
    usage: '190',
    use: 'CUMH'
  },
  '8-32': {
    address: 'MARTIN RD',
    area: 20,
    building$: 0,
    centers: [
      {
        lat: 43.20810728857344,
        lon: -72.06118034842258
      }
    ],
    cu$: 0,
    land$: 944,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 944,
    usage: '190',
    use: 'CUUH'
  },
  '8-39': {
    address: '134 MARTIN RD',
    area: 10,
    building$: 59100,
    centers: [
      {
        lat: 43.20693913750294,
        lon: -72.07198565451233
      }
    ],
    cu$: 0,
    land$: 38600,
    owner: 'BROADLEY, ASHLEY MARIE',
    taxed$: 97700,
    usage: '110',
    use: 'R1'
  },
  '8-40': {
    address: '112 MARTIN RD',
    area: 10.9,
    building$: 0,
    centers: [
      {
        lat: 43.206481696646996,
        lon: -72.07340483146153
      }
    ],
    cu$: 0,
    land$: 19714,
    owner: 'MCHALE, FREDRICK',
    taxed$: 19714,
    usage: '110',
    use: 'R1'
  },
  '8-41': {
    address: 'LOVELL MT RD',
    area: 188,
    building$: 0,
    centers: [
      {
        lat: 43.20167634578769,
        lon: -72.06444994137577
      }
    ],
    cu$: 0,
    land$: 73300,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 73300,
    usage: '500',
    use: 'EX-S'
  },
  '8-42': {
    address: 'LOVELL MT RD',
    area: 300,
    building$: 0,
    centers: [
      {
        lat: 43.19596540355384,
        lon: -72.06513361884062
      }
    ],
    cu$: 0,
    land$: 136200,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 136200,
    usage: '500',
    use: 'EX-S'
  },
  '8-43': {
    address: 'LOVELL MT RD',
    area: 160,
    building$: 0,
    centers: [
      {
        lat: 43.19764391391325,
        lon: -72.05374588474574
      }
    ],
    cu$: 0,
    land$: 6382,
    owner: 'KRUSE, KATRINA',
    taxed$: 6382,
    usage: '190',
    use: 'CUUO'
  },
  '9-2': {
    address: 'AYERS POND RD',
    area: 30.2,
    building$: 0,
    centers: [
      {
        lat: 43.209242739667715,
        lon: -72.04618425211127
      }
    ],
    cu$: 0,
    land$: 646,
    owner: 'MATA, CRISTIAN',
    taxed$: 646,
    usage: '190',
    use: 'CUWL'
  },
  '9-3': {
    address: 'AYERS POND RD',
    area: 6,
    building$: 0,
    centers: [
      {
        lat: 43.210233286192356,
        lon: -72.04361109874488
      }
    ],
    cu$: 0,
    land$: 467,
    owner: 'MCGRANAHAN, DONALD REV TRUST',
    taxed$: 467,
    usage: '190',
    use: 'CUUW'
  },
  '9-11': {
    address: 'DEER VALLEY RD',
    area: 4,
    building$: 0,
    centers: [
      {
        lat: 43.20040186500638,
        lon: -72.02153445419603
      }
    ],
    cu$: 0,
    land$: 18900,
    owner: 'LEIGHTON, RICHARD O',
    taxed$: 18900,
    usage: '110',
    use: 'R1'
  },
  '9-33': {
    address: 'LOVELL MT RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.19427790716058,
        lon: -72.04971786349954
      }
    ],
    cu$: 0,
    land$: 10100,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 10100,
    usage: '300',
    use: 'EX-M'
  },
  '9-34': {
    address: 'LOVELL MT RD',
    area: 13.25,
    building$: 0,
    centers: [
      {
        lat: 43.19524556331957,
        lon: -72.04807413760341
      }
    ],
    cu$: 0,
    land$: 781,
    owner: 'BLAKNEY, KAREN A',
    taxed$: 781,
    usage: '110',
    use: 'R1'
  },
  '9-35': {
    address: 'SANDY KNOLLS RD',
    area: 8,
    building$: 0,
    centers: [
      {
        lat: 43.194376252254386,
        lon: -72.04469541695157
      }
    ],
    cu$: 2100,
    land$: 51000,
    owner: 'WASHINGTON, TOWN OF - DPWH',
    taxed$: 53100,
    usage: '300',
    use: 'EX-M'
  },
  '9-47': {
    address: 'LOVELL MT RD',
    area: 6,
    building$: 0,
    centers: [
      {
        lat: 43.192137817350144,
        lon: -72.04551391247054
      }
    ],
    cu$: 0,
    land$: 23100,
    owner: 'ECCARD, RYAN G',
    taxed$: 23100,
    usage: '110',
    use: 'R1'
  },
  '9-48': {
    address: 'LOVELL MT RD',
    area: 3.7,
    building$: 0,
    centers: [
      {
        lat: 43.19371580445172,
        lon: -72.04548199220137
      }
    ],
    cu$: 0,
    land$: 21400,
    owner: 'GALLAGHER, BETH C',
    taxed$: 21400,
    usage: '110',
    use: 'R1'
  },
  '9-49': {
    address: 'SUGAR HOUSE RD',
    area: 2,
    building$: 0,
    centers: [
      {
        lat: 43.19520484991685,
        lon: -72.04585021626814
      }
    ],
    cu$: 0,
    land$: 20200,
    owner: 'WASHINGTON, TOWN OF - DPWH',
    taxed$: 20200,
    usage: '300',
    use: 'EX-M'
  },
  '9-52': {
    address: 'SUGAR HOUSE RD',
    area: 2.5,
    building$: 0,
    centers: [
      {
        lat: 43.19532474025964,
        lon: -72.04375761712753
      }
    ],
    cu$: 0,
    land$: 20500,
    owner: 'GILLETT, JOSEPH',
    taxed$: 20500,
    usage: '110',
    use: 'R1'
  },
  '9-56': {
    address: 'SUGAR HOUSE RD',
    area: 5.7,
    building$: 0,
    centers: [
      {
        lat: 43.19857783399207,
        lon: -72.04771327808666
      }
    ],
    cu$: 0,
    land$: 352,
    owner: 'BLAKNEY, JOHN G, LOIS, & SUSAN',
    taxed$: 352,
    usage: '190',
    use: 'CUUH'
  },
  '9-57': {
    address: 'SANDY KNOLLS RD',
    area: 2.62,
    building$: 0,
    centers: [
      {
        lat: 43.194813852566156,
        lon: -72.04089038774622
      }
    ],
    cu$: 0,
    land$: 23200,
    owner: 'CIRIELLO, MARGARET M',
    taxed$: 23200,
    usage: '110',
    use: 'R1'
  },
  '9-58': {
    address: '514 AYERS POND RD',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.207080565298824,
        lon: -72.03353354208312
      }
    ],
    cu$: 0,
    land$: 23400,
    owner: 'GARVIN, GREG AND KRISTEN',
    taxed$: 23400,
    usage: '110',
    use: 'R1'
  },
  '9-60': {
    address: 'DEER VALLEY RD',
    area: 10.02,
    building$: 0,
    centers: [
      {
        lat: 43.19730358264486,
        lon: -72.01945413094533
      }
    ],
    cu$: 0,
    land$: 566,
    owner: 'ROSE, JEFFREY D',
    taxed$: 566,
    usage: '110',
    use: 'R1'
  },
  '9-62': {
    address: 'AYERS POND RD',
    area: 2.2,
    building$: 0,
    centers: [
      {
        lat: 43.19365342889577,
        lon: -72.03101756485233
      }
    ],
    cu$: 0,
    land$: 33,
    owner: 'GARVIN, MARIANNE AND JAMES',
    taxed$: 33,
    usage: '190',
    use: 'CUWL'
  },
  '9-65': {
    address: 'LOVELL MT RD',
    area: 4.6,
    building$: 0,
    centers: [
      {
        lat: 43.191775909237386,
        lon: -72.03935012308689
      }
    ],
    cu$: 0,
    land$: 1282,
    owner: 'ECCARDT FARMS INC',
    taxed$: 1282,
    usage: '190',
    use: 'CUFL'
  },
  '9-66': {
    address: 'ULRICH RD',
    area: 15,
    building$: 0,
    centers: [
      {
        lat: 43.199153465588495,
        lon: -72.03884617731815
      }
    ],
    cu$: 0,
    land$: 775,
    owner: 'ECCARDT FARMS INC',
    taxed$: 775,
    usage: '190',
    use: 'CUUH'
  },
  '9-67': {
    address: 'BRADFORD SPRINGS RD',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.197938884410455,
        lon: -72.01883952348187
      }
    ],
    cu$: 0,
    land$: 282,
    owner: 'ROSE, JEFFREY D',
    taxed$: 282,
    usage: '110',
    use: 'R1'
  },
  '10-1': {
    address: '70 SISTERS WAY',
    area: 80,
    building$: 140200,
    centers: [
      {
        lat: 43.179765206080695,
        lon: -72.15473111205537
      }
    ],
    cu$: 0,
    land$: 91765,
    owner: 'GRIFFITH-DOYLE REALTY TRUST',
    taxed$: 231965,
    usage: '110',
    use: 'R1'
  },
  '10-2': {
    address: 'SISTERS WAY',
    area: 47,
    building$: 0,
    centers: [
      {
        lat: 43.18004784434313,
        lon: -72.14982021721949
      }
    ],
    cu$: 0,
    land$: 3143,
    owner: 'GRIFFITH-DOYLE REALTY TRUST',
    taxed$: 3143,
    usage: '190',
    use: 'CUUW'
  },
  '10-4': {
    address: 'ASHUELOT DR',
    area: 40,
    building$: 0,
    centers: [
      {
        lat: 43.18117821065449,
        lon: -72.1446240497102
      }
    ],
    cu$: 0,
    land$: 61400,
    owner: 'GOBIN, WALTER C',
    taxed$: 61400,
    usage: '110',
    use: 'R1'
  },
  '10-5': {
    address: 'OLD MARLOW RD',
    area: 135.12,
    building$: 0,
    centers: [
      {
        lat: 43.17802995465152,
        lon: -72.14026288156816
      }
    ],
    cu$: 0,
    land$: 134800,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 134800,
    usage: '501',
    use: 'EX-M'
  },
  '10-6': {
    address: 'ASHUELOT DR',
    area: 155,
    building$: 0,
    centers: [
      {
        lat: 43.17004842095894,
        lon: -72.14489520661108
      }
    ],
    cu$: 0,
    land$: 5745,
    owner: 'BONO,JEREMY L & JACQUELINE A',
    taxed$: 5745,
    usage: '190',
    use: 'CUMO'
  },
  '10-8': {
    address: 'ASHUELOT DR',
    area: 4.71,
    building$: 0,
    centers: [
      {
        lat: 43.175775181516386,
        lon: -72.14703232856972
      }
    ],
    cu$: 0,
    land$: 45000,
    owner: 'WHARTON, RICHARD M',
    taxed$: 45000,
    usage: '110',
    use: 'R1'
  },
  '10-12': {
    address: 'ASHUELOT DR',
    area: 1.24,
    building$: 0,
    centers: [
      {
        lat: 43.17605564326322,
        lon: -72.1486013152176
      }
    ],
    cu$: 0,
    land$: 44600,
    owner: 'ARBOREAL OASIS, LLC',
    taxed$: 44600,
    usage: '110',
    use: 'R1'
  },
  '10-20': {
    address: 'ASHUELOT DR',
    area: 2.4,
    building$: 0,
    centers: [
      {
        lat: 43.17451727874988,
        lon: -72.15245765879217
      }
    ],
    cu$: 0,
    land$: 95400,
    owner: 'ZIEGLER, ERIC',
    taxed$: 95400,
    usage: '110',
    use: 'R1'
  },
  '10-21': {
    address: 'ASHUELOT DR',
    area: 2.1,
    building$: 0,
    centers: [
      {
        lat: 43.174035747580525,
        lon: -72.15245102157681
      }
    ],
    cu$: 0,
    land$: 95200,
    owner: 'PRENTISS, TIMOTHY S',
    taxed$: 95200,
    usage: '110',
    use: 'R1'
  },
  '10-38': {
    address: 'ASHUELOT DR',
    area: 1.37,
    building$: 0,
    centers: [
      {
        lat: 43.168809388430645,
        lon: -72.15180030674587
      }
    ],
    cu$: 0,
    land$: 100900,
    owner: 'CAMPENELLA, MICHAEL L',
    taxed$: 100900,
    usage: '110',
    use: 'R1W'
  },
  '10-39': {
    address: 'ASHUELOT DR',
    area: 1.68,
    building$: 0,
    centers: [
      {
        lat: 43.16848504805388,
        lon: -72.15131887580682
      }
    ],
    cu$: 0,
    land$: 101200,
    owner: 'BARKIE, DAVID',
    taxed$: 101200,
    usage: '110',
    use: 'R1W'
  },
  '10-41': {
    address: 'TAYLOR CIR',
    area: 1.22,
    building$: 0,
    centers: [
      {
        lat: 43.168831574614345,
        lon: -72.14965145760694
      }
    ],
    cu$: 0,
    land$: 19600,
    owner: 'MAGOUN, PETER',
    taxed$: 19600,
    usage: '110',
    use: 'R1A'
  },
  '10-43': {
    address: 'TAYLOR CIR',
    area: 1.24,
    building$: 0,
    centers: [
      {
        lat: 43.169658646929825,
        lon: -72.14883149373868
      }
    ],
    cu$: 0,
    land$: 10300,
    owner: 'DEVLIN, JAMES A',
    taxed$: 10300,
    usage: '110',
    use: 'R1A'
  },
  '10-44': {
    address: 'TAYLOR CIR',
    area: 1.49,
    building$: 0,
    centers: [
      {
        lat: 43.170083531207254,
        lon: -72.14917677863873
      }
    ],
    cu$: 0,
    land$: 22300,
    owner: 'DEVLIN, JAMES A',
    taxed$: 22300,
    usage: '110',
    use: 'R1A'
  },
  '10-47': {
    address: 'ASHUELOT DR',
    area: 1.85,
    building$: 0,
    centers: [
      {
        lat: 43.170580172894525,
        lon: -72.1498733314764
      }
    ],
    cu$: 0,
    land$: 10500,
    owner: 'ROOMES, JASON C',
    taxed$: 10500,
    usage: '110',
    use: 'R1A'
  },
  '10-48': {
    address: 'ASHUELOT DR',
    area: 1.84,
    building$: 0,
    centers: [
      {
        lat: 43.17096577927697,
        lon: -72.14998505139638
      }
    ],
    cu$: 0,
    land$: 23800,
    owner: 'RHAN, FAMILY REV TRUST',
    taxed$: 23800,
    usage: '110',
    use: 'R1A'
  },
  '10-50': {
    address: 'ASHUELOT DR',
    area: 5.3,
    building$: 0,
    centers: [
      {
        lat: 43.17184686698269,
        lon: -72.15058843767648
      }
    ],
    cu$: 0,
    land$: 27300,
    owner: 'POOPOR, JEFFREY F',
    taxed$: 27300,
    usage: '110',
    use: 'R1A'
  },
  '10-55': {
    address: 'ASHUELOT DR',
    area: 1.61,
    building$: 0,
    centers: [
      {
        lat: 43.173067403251295,
        lon: -72.15015508512066
      }
    ],
    cu$: 0,
    land$: 33000,
    owner: 'REYNOLDS, JOSHUA',
    taxed$: 33000,
    usage: '110',
    use: 'R1A'
  },
  '10-56': {
    address: 'ASHUELOT DR',
    area: 1.65,
    building$: 0,
    centers: [
      {
        lat: 43.17331218207034,
        lon: -72.14979368018368
      }
    ],
    cu$: 0,
    land$: 23700,
    owner: 'REYNOLDS, JOSHUA',
    taxed$: 23700,
    usage: '110',
    use: 'R1A'
  },
  '10-58': {
    address: 'ASHUELOT DR',
    area: 3.68,
    building$: 0,
    centers: [
      {
        lat: 43.17379588055763,
        lon: -72.14967968181531
      }
    ],
    cu$: 0,
    land$: 10000,
    owner: 'LEIBRANDT, JEREMIAH K',
    taxed$: 10000,
    usage: '110',
    use: 'R1A'
  },
  '10-59': {
    address: 'ASHUELOT DR',
    area: 1.85,
    building$: 0,
    centers: [
      {
        lat: 43.174313746754486,
        lon: -72.14949589545799
      }
    ],
    cu$: 0,
    land$: 23800,
    owner: 'MELENDEZ, CRUZ EDWARD',
    taxed$: 23800,
    usage: '110',
    use: 'R1A'
  },
  '14-453': {
    address: '76 ASHUELOT POND',
    area: 0.2,
    building$: 19800,
    centers: [
      {
        lat: 43.14731969909218,
        lon: -72.15313615313035
      }
    ],
    cu$: 0,
    land$: 39400,
    owner: 'SPAULDING, CHRISTOPHER S',
    taxed$: 59200,
    usage: '110',
    use: 'R1W'
  },
  '10-61': {
    address: 'ASHUELOT DR',
    area: 3.57,
    building$: 0,
    centers: [
      {
        lat: 43.17462602681758,
        lon: -72.14869049029022
      }
    ],
    cu$: 0,
    land$: 36900,
    owner: 'DINGMAN, BRIAN J',
    taxed$: 36900,
    usage: '110',
    use: 'R1A'
  },
  '10-62': {
    address: 'ASHUELOT DR',
    area: 0.4,
    building$: 0,
    centers: [
      {
        lat: 43.17602211391968,
        lon: -72.14818403668474
      }
    ],
    cu$: 0,
    land$: 5200,
    owner: 'ARBOREAL OASIS, LLC',
    taxed$: 5200,
    usage: '110',
    use: 'R1A'
  },
  '11-6': {
    address: 'OLD BURBANK RD',
    area: 4,
    building$: 0,
    centers: [
      {
        lat: 43.18863890530472,
        lon: -72.12434232798452
      }
    ],
    cu$: 0,
    land$: 171,
    owner: 'GUERIN, ROBERT L',
    taxed$: 171,
    usage: '190',
    use: 'CUUO'
  },
  '11-7': {
    address: 'OLD BURBANK RD',
    area: 2.32,
    building$: 0,
    centers: [
      {
        lat: 43.183286459918016,
        lon: -72.12011621421681
      }
    ],
    cu$: 7200,
    land$: 25500,
    owner: 'OLIVEIRA, GILBERT L',
    taxed$: 32700,
    usage: '110',
    use: 'R1'
  },
  '11-10': {
    address: 'OLD MARLOW RD',
    area: 107.8,
    building$: 0,
    centers: [
      {
        lat: 43.17533448567119,
        lon: -72.13247584917413
      }
    ],
    cu$: 0,
    land$: 7810,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 7810,
    usage: '190',
    use: 'CUUW'
  },
  '11-15': {
    address: 'OLD MARLOW RD',
    area: 50,
    building$: 0,
    centers: [
      {
        lat: 43.178165668899226,
        lon: -72.11937201613773
      }
    ],
    cu$: 0,
    land$: 5297,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 5297,
    usage: '190',
    use: 'CUUW'
  },
  '11-17': {
    address: '468 OLD MARLOW RD',
    area: 6.3,
    building$: 164800,
    centers: [
      {
        lat: 43.18179461008317,
        lon: -72.11698503338572
      }
    ],
    cu$: 8500,
    land$: 57000,
    owner: 'BRIGHTON, JOHN AND SUSAN',
    taxed$: 230300,
    usage: '110',
    use: 'R1'
  },
  '11-38-01': {
    address: '277 OLD MARLOW RD',
    area: 5.08,
    building$: 43300,
    centers: [
      {
        lat: 43.179193129936984,
        lon: -72.10987659021194
      }
    ],
    cu$: 0,
    land$: 46600,
    owner: 'ROYCE, WILLIAM G',
    taxed$: 89900,
    usage: '110',
    use: 'R1'
  },
  '11-18': {
    address: '426 OLD MARLOW RD',
    area: 54.2,
    building$: 339200,
    centers: [
      {
        lat: 43.18402673931271,
        lon: -72.11523873161433
      }
    ],
    cu$: 203000,
    land$: 197960,
    owner: 'MACNEIL FARM',
    taxed$: 740160,
    usage: '110',
    use: 'R1'
  },
  '11-20': {
    address: '190 OLD MARLOW RD',
    area: 4.33,
    building$: 125700,
    centers: [
      {
        lat: 43.18109411722337,
        lon: -72.10623352544374
      }
    ],
    cu$: 14400,
    land$: 45500,
    owner: 'CLARK, W ROBERT',
    taxed$: 185600,
    usage: '110',
    use: 'R1'
  },
  '11-21': {
    address: '146 OLD MARLOW RD',
    area: 3.9,
    building$: 76900,
    centers: [
      {
        lat: 43.180112377874266,
        lon: -72.10557355098543
      }
    ],
    cu$: 9700,
    land$: 44900,
    owner: 'HENDRICKSON, YVONNE LIVING TRU',
    taxed$: 131500,
    usage: '110',
    use: 'R1'
  },
  '11-28': {
    address: '419 NO MAIN ST',
    area: 4.46,
    building$: 102000,
    centers: [
      {
        lat: 43.186327502102365,
        lon: -72.10428223307552
      }
    ],
    cu$: 14700,
    land$: 36700,
    owner: 'FREDRICKSON-FEZISHIN, KARIN',
    taxed$: 153400,
    usage: '110',
    use: 'R1'
  },
  '11-37': {
    address: '141 OLD MARLOW RD',
    area: 36,
    building$: 25600,
    centers: [
      {
        lat: 43.177429189334134,
        lon: -72.10555141861778
      }
    ],
    cu$: 800,
    land$: 36377,
    owner: 'KARLBERG, KENNETH P & CARL R',
    taxed$: 62777,
    usage: '110',
    use: 'R1'
  },
  '11-38': {
    address: 'OLD MARLOW RD',
    area: 16.41,
    building$: 0,
    centers: [
      {
        lat: 43.17909462206193,
        lon: -72.10816683252199
      }
    ],
    cu$: 0,
    land$: 1271,
    owner: 'DRESSEL, CYNTHIA D.',
    taxed$: 1271,
    usage: '190',
    use: 'CUUO'
  },
  '11-51': {
    address: 'MILLEN POND RD',
    area: 6.38,
    building$: 0,
    centers: [
      {
        lat: 43.170097217429145,
        lon: -72.12497157540308
      }
    ],
    cu$: 0,
    land$: 12000,
    owner: 'SNYDER, DIANE E',
    taxed$: 12000,
    usage: '110',
    use: 'R1'
  },
  '11-54': {
    address: 'MILLEN POND RD',
    area: 0.06,
    building$: 0,
    centers: [
      {
        lat: 43.168268736076435,
        lon: -72.12379687712438
      }
    ],
    cu$: 0,
    land$: 52200,
    owner: 'BLACKWOOD,ROBERT K JR&SUSAN M',
    taxed$: 52200,
    usage: '110',
    use: 'R1W'
  },
  '11-56': {
    address: '699 MILLEN POND RD',
    area: 0.14,
    building$: 46300,
    centers: [
      {
        lat: 43.1687403794478,
        lon: -72.12345262788335
      }
    ],
    cu$: 3000,
    land$: 166400,
    owner: 'SNYDER, JERRY A',
    taxed$: 215700,
    usage: '110',
    use: 'R1W'
  },
  '11-57': {
    address: '689 MILLEN POND RD',
    area: 0.21,
    building$: 40400,
    centers: [
      {
        lat: 43.16895415292109,
        lon: -72.12332002147234
      }
    ],
    cu$: 0,
    land$: 170700,
    owner: 'WINDSOR CIRCUIT, LTD',
    taxed$: 211100,
    usage: '110',
    use: 'R1W'
  },
  '11-58': {
    address: 'MILLEN POND RD',
    area: 0.015,
    building$: 0,
    centers: [
      {
        lat: 43.16919722118612,
        lon: -72.12302992830521
      }
    ],
    cu$: 0,
    land$: 40600,
    owner: 'MINGARY, LLC',
    taxed$: 40600,
    usage: '110',
    use: 'R1W'
  },
  '11-59': {
    address: '685 MILLEN POND RD',
    area: 0.13,
    building$: 49700,
    centers: [
      {
        lat: 43.16927898667558,
        lon: -72.12295258335769
      }
    ],
    cu$: 4400,
    land$: 165200,
    owner: 'WALSH, SUSAN ELISABETH',
    taxed$: 219300,
    usage: '110',
    use: 'R1W'
  },
  '11-60': {
    address: 'MILLEN POND RD',
    area: 0.17,
    building$: 0,
    centers: [
      {
        lat: 43.16949398171456,
        lon: -72.12281775611909
      }
    ],
    cu$: 0,
    land$: 78000,
    owner: 'KERN, AUDREY MARGARET TRUST',
    taxed$: 78000,
    usage: '110',
    use: 'R1W'
  },
  '11-65': {
    address: '611 MILLEN POND RD',
    area: 0.87771,
    building$: 119600,
    centers: [
      {
        lat: 43.17085413719039,
        lon: -72.12157606592828
      }
    ],
    cu$: 4900,
    land$: 0,
    owner: 'MUGAR, CAROLYN J',
    taxed$: 124500,
    usage: '110',
    use: 'R1W'
  },
  '11-66': {
    address: 'MILLEN POND RD',
    area: 0.16,
    building$: 0,
    centers: [
      {
        lat: 43.17130293111505,
        lon: -72.12104963772092
      }
    ],
    cu$: 0,
    land$: 77900,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 77900,
    usage: '400',
    use: 'EX-S'
  },
  '11-69-01': {
    address: 'FAXON HILL RD',
    area: 2.14,
    building$: 0,
    centers: [
      {
        lat: 43.17381739960482,
        lon: -72.10416551477275
      }
    ],
    cu$: 0,
    land$: 138,
    owner: 'BACHAND, YVONNE',
    taxed$: 138,
    usage: '190',
    use: 'CUUH'
  },
  '11-69-02': {
    address: 'FAXON HILL RD',
    area: 2.18,
    building$: 0,
    centers: [
      {
        lat: 43.173161291718806,
        lon: -72.10499054809684
      }
    ],
    cu$: 0,
    land$: 141,
    owner: 'BACHAND, YVONNE',
    taxed$: 141,
    usage: '190',
    use: 'CUUH'
  },
  '14-98': {
    address: 'JEFFERSON DR',
    area: 0.71,
    building$: 0,
    centers: [
      {
        lat: 43.16031737101268,
        lon: -72.14801832683983
      }
    ],
    cu$: 0,
    land$: 10900,
    owner: 'SALAZAR, GEORGE E',
    taxed$: 10900,
    usage: '110',
    use: 'R1'
  },
  '11-80': {
    address: '127 FARNSWORTH HILL RD',
    area: 197.85,
    building$: 0,
    centers: [
      {
        lat: 43.169238095737846,
        lon: -72.13570563432819
      }
    ],
    cu$: 0,
    land$: 11307,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 11307,
    usage: '190',
    use: 'CUUW'
  },
  '11-83': {
    address: '639 MILLEN POND RD',
    area: 0.08,
    building$: 61100,
    centers: [
      {
        lat: 43.170371341578424,
        lon: -72.1220594347335
      }
    ],
    cu$: 0,
    land$: 118300,
    owner: 'MUGAR, CAROLYN J',
    taxed$: 179400,
    usage: '110',
    use: 'R1W'
  },
  '11-87': {
    address: 'OLD MARLOW RD',
    area: 0.043,
    building$: 0,
    centers: [
      {
        lat: 43.17871604059846,
        lon: -72.10369546508312
      }
    ],
    cu$: 0,
    land$: 1600,
    owner: 'WASHINGTON, TOWN OF - TC DEED',
    taxed$: 1600,
    usage: '300',
    use: 'EX-M'
  },
  '12-1': {
    address: 'NO MAIN ST',
    area: 95,
    building$: 0,
    centers: [
      {
        lat: 43.1872824466079,
        lon: -72.09277847826013
      }
    ],
    cu$: 0,
    land$: 3004,
    owner: 'CHESHIRE PROPERTIES, LLC',
    taxed$: 3004,
    usage: '190',
    use: 'CUMH'
  },
  '12-17': {
    address: 'SNOW RD',
    area: 1.22,
    building$: 0,
    centers: [
      {
        lat: 43.179803475325606,
        lon: -72.08502860589797
      }
    ],
    cu$: 1000,
    land$: 26900,
    owner: 'ANDREWS, CAROL K',
    taxed$: 27900,
    usage: '110',
    use: 'R1A'
  },
  '12-18': {
    address: '78 SNOW RD',
    area: 2.7,
    building$: 36600,
    centers: [
      {
        lat: 43.18118696120536,
        lon: -72.08565737027007
      }
    ],
    cu$: 3000,
    land$: 151300,
    owner: 'HAYNES, JANET F',
    taxed$: 190900,
    usage: '110',
    use: 'R1W'
  },
  '12-2-01': {
    address: 'HALFMOON PD RD',
    area: 125,
    building$: 0,
    centers: [
      {
        lat: 43.17955753971259,
        lon: -72.09085240192456
      }
    ],
    cu$: 4900,
    land$: 21374,
    owner: 'SHIFFLETT, AMBER J.',
    taxed$: 26274,
    usage: '110',
    use: 'R1'
  },
  '12-10': {
    address: '507 HALFMOON PD RD',
    area: 1.8,
    building$: 60400,
    centers: [
      {
        lat: 43.17596554761712,
        lon: -72.08546585901742
      }
    ],
    cu$: 3000,
    land$: 41700,
    owner: 'DANFORTH, DEAN A.',
    taxed$: 105100,
    usage: '110',
    use: 'R1'
  },
  '12-15': {
    address: 'SNOW RD',
    area: 0.23,
    building$: 0,
    centers: [
      {
        lat: 43.18014191005881,
        lon: -72.08378151595673
      }
    ],
    cu$: 0,
    land$: 21800,
    owner: 'HOWE, JOSHUAH RYAN',
    taxed$: 21800,
    usage: '110',
    use: 'R1A'
  },
  '12-16': {
    address: '41 SNOW RD',
    area: 1.2,
    building$: 75700,
    centers: [
      {
        lat: 43.179765390406125,
        lon: -72.08437568315355
      }
    ],
    cu$: 3200,
    land$: 44900,
    owner: 'TEWKSBURY, JOHN B',
    taxed$: 123800,
    usage: '110',
    use: 'R1A'
  },
  '24-120-01': {
    address: 'COVE RD',
    area: 0.34,
    building$: 0,
    centers: [
      {
        lat: 43.14622494053533,
        lon: -72.09345019859092
      }
    ],
    cu$: 0,
    land$: 11500,
    owner: 'DEVINE, JAMES',
    taxed$: 11500,
    usage: '110',
    use: 'R1A'
  },
  '12-19': {
    address: '70 SNOW RD',
    area: 0.52,
    building$: 38400,
    centers: [
      {
        lat: 43.180877559521676,
        lon: -72.0848391408914
      }
    ],
    cu$: 0,
    land$: 160100,
    owner: 'BERGERON LIVING TRUST, MABLE B',
    taxed$: 198500,
    usage: '110',
    use: 'R1W'
  },
  '12-20': {
    address: '56 SNOW RD',
    area: 0.3,
    building$: 89800,
    centers: [
      {
        lat: 43.180662463106586,
        lon: -72.08439625606621
      }
    ],
    cu$: 7100,
    land$: 142600,
    owner: 'ANDREWS, CAROL',
    taxed$: 239500,
    usage: '110',
    use: 'R1W'
  },
  '12-21': {
    address: '42 SNOW RD',
    area: 0.37,
    building$: 55700,
    centers: [
      {
        lat: 43.18056790313348,
        lon: -72.08401367948117
      }
    ],
    cu$: 1000,
    land$: 130400,
    owner: 'FATKIN, HARRY W. FAMILY TRUST',
    taxed$: 187100,
    usage: '110',
    use: 'R1W'
  },
  '12-22': {
    address: '36 SNOW RD',
    area: 0.41,
    building$: 34600,
    centers: [
      {
        lat: 43.180487007836504,
        lon: -72.08369703937146
      }
    ],
    cu$: 0,
    land$: 135100,
    owner: 'HOWE, JOSHUAH RYAN',
    taxed$: 169700,
    usage: '110',
    use: 'R1W'
  },
  '12-23': {
    address: '20 SNOW RD',
    area: 0.289,
    building$: 40000,
    centers: [
      {
        lat: 43.180429445253196,
        lon: -72.08323428341824
      }
    ],
    cu$: 1600,
    land$: 134000,
    owner: 'MORRIS, ANDREA J',
    taxed$: 175600,
    usage: '110',
    use: 'R1W'
  },
  '12-24': {
    address: '14 SNOW RD',
    area: 0.6,
    building$: 62700,
    centers: [
      {
        lat: 43.18032539242123,
        lon: -72.08267757211541
      }
    ],
    cu$: 4500,
    land$: 145700,
    owner: 'WPF, LLC',
    taxed$: 212900,
    usage: '110',
    use: 'R1W'
  },
  '12-27': {
    address: '727 HALFMOON PD RD',
    area: 0.25,
    building$: 37600,
    centers: [
      {
        lat: 43.18139700029432,
        lon: -72.08214390968122
      }
    ],
    cu$: 3000,
    land$: 122800,
    owner: 'GARRITY, DANIEL L',
    taxed$: 163400,
    usage: '110',
    use: 'R1W'
  },
  '12-28': {
    address: 'HALFMOON PD RD',
    area: 0.28,
    building$: 0,
    centers: [
      {
        lat: 43.18175119448375,
        lon: -72.08195218840103
      }
    ],
    cu$: 0,
    land$: 79100,
    owner: 'LAPRADE, NORMAN J',
    taxed$: 79100,
    usage: '110',
    use: 'R1W'
  },
  '12-40': {
    address: '696 HALFMOON PD RD',
    area: 2,
    building$: 72400,
    centers: [
      {
        lat: 43.18071837134521,
        lon: -72.08146478104868
      }
    ],
    cu$: 21600,
    land$: 50400,
    owner: 'FIDLER, DAVID C.',
    taxed$: 144400,
    usage: '110',
    use: 'R1A'
  },
  '12-45': {
    address: 'HALFMOON PD RD',
    area: 0.25,
    building$: 0,
    centers: [
      {
        lat: 43.17513625475347,
        lon: -72.08509134202848
      }
    ],
    cu$: 0,
    land$: 6300,
    owner: 'BUFFUM, STANLEY GEORGE',
    taxed$: 6300,
    usage: '110',
    use: 'R1'
  },
  '12-46': {
    address: 'HALFMOON PD RD',
    area: 54.5,
    building$: 0,
    centers: [
      {
        lat: 43.17472741658752,
        lon: -72.07864077159384
      }
    ],
    cu$: 0,
    land$: 3615,
    owner: 'VIBBER, DAVID E',
    taxed$: 3615,
    usage: '110',
    use: 'R1'
  },
  '12-47': {
    address: '390 HALFMOON PD RD',
    area: 59,
    building$: 0,
    centers: [
      {
        lat: 43.1714771485543,
        lon: -72.08000390242586
      }
    ],
    cu$: 0,
    land$: 29980,
    owner: 'HALVE MAAN, LLC',
    taxed$: 29980,
    usage: '110',
    use: 'R1'
  },
  '12-57': {
    address: '105 ISLAND POND',
    area: 25.8,
    building$: 65500,
    centers: [
      {
        lat: 43.177381918810525,
        lon: -72.07423503366418
      }
    ],
    cu$: 4000,
    land$: 134600,
    owner: 'ALLEN, LAWRENCE R',
    taxed$: 204100,
    usage: '110',
    use: 'R1W'
  },
  '12-58': {
    address: '129 ISLAND POND',
    area: 9.24,
    building$: 10100,
    centers: [
      {
        lat: 43.17846161614312,
        lon: -72.0739494137207
      }
    ],
    cu$: 0,
    land$: 130392,
    owner: 'ALLEN, LAWRENCE R',
    taxed$: 140492,
    usage: '110',
    use: 'R1W'
  },
  '12-59': {
    address: '147 ISLAND POND',
    area: 36,
    building$: 55600,
    centers: [
      {
        lat: 43.18023446138548,
        lon: -72.07569287213869
      }
    ],
    cu$: 8100,
    land$: 132190,
    owner: 'ALLEN, LAWRENCE R',
    taxed$: 195890,
    usage: '110',
    use: 'R1W'
  },
  '12-120': {
    address: 'WASHINGTON DR',
    area: 4,
    building$: 0,
    centers: [
      {
        lat: 43.16998123985924,
        lon: -72.05992121563149
      }
    ],
    cu$: 0,
    land$: 217,
    owner: 'JOHNSON, JEFFREY',
    taxed$: 217,
    usage: '110',
    use: 'R1A'
  },
  '12-49': {
    address: '294 MCLAUGHLIN RD',
    area: 65.3,
    building$: 95800,
    centers: [
      {
        lat: 43.17216020287026,
        lon: -72.07349257987136
      }
    ],
    cu$: 0,
    land$: 187125,
    owner: 'MCLAUGHLIN, JEFFREY  REV TRUST',
    taxed$: 282925,
    usage: '110',
    use: 'R1W'
  },
  '12-50': {
    address: '94 MCLAUGHLIN RD',
    area: 1.4,
    building$: 151900,
    centers: [
      {
        lat: 43.17126975394976,
        lon: -72.0725474138905
      }
    ],
    cu$: 20200,
    land$: 212000,
    owner: 'JOHNSON, DALE R. & KAREN V. RE',
    taxed$: 384100,
    usage: '110',
    use: 'R1W'
  },
  '12-51': {
    address: '11 MCLAUGHLIN RD',
    area: 0.52,
    building$: 35600,
    centers: [
      {
        lat: 43.17160549733923,
        lon: -72.07215869817551
      }
    ],
    cu$: 0,
    land$: 111300,
    owner: 'WHITING, THOMAS A',
    taxed$: 146900,
    usage: '110',
    use: 'R1W'
  },
  '12-52': {
    address: '96 MCLAUGHLIN RD',
    area: 1,
    building$: 33700,
    centers: [
      {
        lat: 43.171917160608025,
        lon: -72.07170854244717
      }
    ],
    cu$: 15800,
    land$: 215100,
    owner: 'BLISS FAMILY 2014 TRUST',
    taxed$: 264600,
    usage: '110',
    use: 'R1W'
  },
  '12-53': {
    address: 'ISLAND POND',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.17238286866683,
        lon: -72.07128128330753
      }
    ],
    cu$: 0,
    land$: 84700,
    owner: 'WOOD, JOAN H',
    taxed$: 84700,
    usage: '110',
    use: 'R1W'
  },
  '12-55': {
    address: '379 MCLAUGHLIN RD',
    area: 14.2,
    building$: 70200,
    centers: [
      {
        lat: 43.17607159639603,
        lon: -72.07053188194105
      }
    ],
    cu$: 1300,
    land$: 181073,
    owner: 'NEVILLE LIVING TRUST',
    taxed$: 252573,
    usage: '110',
    use: 'R1W'
  },
  '12-60': {
    address: '221 ISLAND POND',
    area: 10.2,
    building$: 31600,
    centers: [
      {
        lat: 43.18338068114356,
        lon: -72.06701060021946
      }
    ],
    cu$: 6200,
    land$: 226800,
    owner: 'CRAVEN, CHRISTOPHER & KELLY',
    taxed$: 264600,
    usage: '110',
    use: 'R1W'
  },
  '12-61': {
    address: '247 ISLAND POND',
    area: 30.06215,
    building$: 23300,
    centers: [
      {
        lat: 43.18500254592855,
        lon: -72.06457743507214
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'CHACE,JODIE ET AL',
    taxed$: 23300,
    usage: '110',
    use: 'R1W'
  },
  '12-62': {
    address: 'LOVELL MT RD',
    area: 25.5,
    building$: 0,
    centers: [
      {
        lat: 43.186566090547295,
        lon: -72.06747384753069
      }
    ],
    cu$: 0,
    land$: 1776,
    owner: 'CARPENTER REALTY TRUST',
    taxed$: 1776,
    usage: '190',
    use: 'CUUW'
  },
  '12-64': {
    address: '856 WASHINGTON DR',
    area: 0.36,
    building$: 59900,
    centers: [
      {
        lat: 43.18313870865446,
        lon: -72.06048893263487
      }
    ],
    cu$: 3500,
    land$: 158300,
    owner: 'REILLY, PAUL & DIANE',
    taxed$: 221700,
    usage: '110',
    use: 'R1A'
  },
  '12-65': {
    address: 'WASHINGTON DR',
    area: 2.3,
    building$: 0,
    centers: [
      {
        lat: 43.18338991729712,
        lon: -72.06145442681758
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'WASHINGTON LAKE ASSOCIATION',
    taxed$: 0,
    usage: '260',
    use: 'CI'
  },
  '12-119': {
    address: 'WASHINGTON DR',
    area: 2.76,
    building$: 0,
    centers: [
      {
        lat: 43.17019364859091,
        lon: -72.0608923394675
      }
    ],
    cu$: 0,
    land$: 153,
    owner: 'JOHNSON, JEFFREY',
    taxed$: 153,
    usage: '110',
    use: 'R1A'
  },
  '12-121': {
    address: 'WASHINGTON DR',
    area: 3.38,
    building$: 0,
    centers: [
      {
        lat: 43.170263143056076,
        lon: -72.05954447872813
      }
    ],
    cu$: 0,
    land$: 162,
    owner: 'JOHNSON, JEFFREY',
    taxed$: 162,
    usage: '110',
    use: 'R1A'
  },
  '12-122': {
    address: 'WASHINGTON DR',
    area: 7.68,
    building$: 0,
    centers: [
      {
        lat: 43.17023933878842,
        lon: -72.0582514876276
      }
    ],
    cu$: 0,
    land$: 257,
    owner: 'JOHNSON, JEFFREY',
    taxed$: 257,
    usage: '110',
    use: 'R1A'
  },
  '12-153-01': {
    address: '155 WINDRUN RD',
    area: 13.75,
    building$: 460900,
    centers: [
      {
        lat: 43.17103817343497,
        lon: -72.06350772311366
      }
    ],
    cu$: 41800,
    land$: 321257,
    owner: 'DICARLO, JAMES J',
    taxed$: 823957,
    usage: '110',
    use: 'R1W'
  },
  '12-124': {
    address: 'E WASHINGTON RD',
    area: 16.7,
    building$: 0,
    centers: [
      {
        lat: 43.17163597481614,
        lon: -72.05236750167006
      }
    ],
    cu$: 0,
    land$: 893,
    owner: 'BEANE, PETER E',
    taxed$: 893,
    usage: '190',
    use: 'CUUH'
  },
  '12-125': {
    address: 'E WASHINGTON RD',
    area: 4.68,
    building$: 0,
    centers: [
      {
        lat: 43.1694142661169,
        lon: -72.05362769776148
      }
    ],
    cu$: 0,
    land$: 32600,
    owner: 'FITZMORRIS, TRACEY K & DAVID R',
    taxed$: 32600,
    usage: '110',
    use: 'R1A'
  },
  '12-126': {
    address: 'E WASHINGTON RD',
    area: 3.5,
    building$: 0,
    centers: [
      {
        lat: 43.169871883231245,
        lon: -72.0529251564271
      }
    ],
    cu$: 0,
    land$: 36600,
    owner: 'FITZMORRIS, TRACEY K & DAVID R',
    taxed$: 36600,
    usage: '110',
    use: 'R1A'
  },
  '12-128': {
    address: 'WASHINGTON DR',
    area: 4.59,
    building$: 0,
    centers: [
      {
        lat: 43.17204403304266,
        lon: -72.05620432234436
      }
    ],
    cu$: 0,
    land$: 33300,
    owner: 'GEBO LIVING TRUST',
    taxed$: 33300,
    usage: '110',
    use: 'R1A'
  },
  '12-139': {
    address: 'WASHINGTON DR',
    area: 2.73,
    building$: 0,
    centers: [
      {
        lat: 43.17712090435872,
        lon: -72.0578952608825
      }
    ],
    cu$: 0,
    land$: 32800,
    owner: 'BODNAR, BERTRAM J',
    taxed$: 32800,
    usage: '110',
    use: 'R1'
  },
  '12-151': {
    address: 'WASHINGTON DR',
    area: 2.84,
    building$: 0,
    centers: [
      {
        lat: 43.1829103874526,
        lon: -72.0592342026446
      }
    ],
    cu$: 0,
    land$: 119,
    owner: 'KITTREDGE, KAREN J',
    taxed$: 119,
    usage: '190',
    use: 'CUUO'
  },
  '12-152': {
    address: 'WASHINGTON DR',
    area: 53.8,
    building$: 0,
    centers: [
      {
        lat: 43.176924358893686,
        lon: -72.0551537996706
      }
    ],
    cu$: 0,
    land$: 3691,
    owner: 'KAPTEYN, PAUL C',
    taxed$: 3691,
    usage: '190',
    use: 'CUUW'
  },
  '12-154': {
    address: '56 ISLAND POND BOAT ACC',
    area: 24.8,
    building$: 29300,
    centers: [
      {
        lat: 43.17015904055588,
        lon: -72.06590220783022
      }
    ],
    cu$: 0,
    land$: 159824,
    owner: 'HIGHWOODS TRUST',
    taxed$: 189124,
    usage: '110',
    use: 'R1W'
  },
  '12-161': {
    address: 'ISLAND POND RD',
    area: 0.01,
    building$: 0,
    centers: [
      {
        lat: 43.16930647326025,
        lon: -72.07258580285898
      }
    ],
    cu$: 1300,
    land$: 22300,
    owner: 'HUNT, RUSSELL K & CHARLES M',
    taxed$: 23600,
    usage: '110',
    use: 'R1W'
  },
  '12-163': {
    address: 'ISLAND POND RD',
    area: 0.06,
    building$: 0,
    centers: [
      {
        lat: 43.169499337920485,
        lon: -72.07248816350398
      }
    ],
    cu$: 4500,
    land$: 26000,
    owner: 'CRAVEN, CHRISTOPHER & KELLY',
    taxed$: 30500,
    usage: '110',
    use: 'R1W'
  },
  '13-12': {
    address: 'FIELDS WAY',
    area: 0.93,
    building$: 0,
    centers: [
      {
        lat: 43.17418797058919,
        lon: -72.049106444342
      }
    ],
    cu$: 0,
    land$: 77,
    owner: 'GELATT FAMILY TRUST 2011',
    taxed$: 77,
    usage: '190',
    use: 'CUUW'
  },
  '12-165': {
    address: 'ISLAND POND RD',
    area: 0.06,
    building$: 0,
    centers: [
      {
        lat: 43.17000137741327,
        lon: -72.07188431683451
      }
    ],
    cu$: 16700,
    land$: 25300,
    owner: 'BOND, EMERY ALLEN',
    taxed$: 42000,
    usage: '110',
    use: 'R1W'
  },
  '12-166': {
    address: '105 ISLAND POND RD',
    area: 0.05,
    building$: 0,
    centers: [
      {
        lat: 43.17011004733668,
        lon: -72.07180942342087
      }
    ],
    cu$: 11900,
    land$: 24700,
    owner: 'ALLEN, LAWRENCE R',
    taxed$: 36600,
    usage: '110',
    use: 'R1W'
  },
  '12-167': {
    address: '56 ISLAND POND RD',
    area: 0.06,
    building$: 0,
    centers: [
      {
        lat: 43.170225966722036,
        lon: -72.0717514906761
      }
    ],
    cu$: 9400,
    land$: 25300,
    owner: 'HIGHWOODS TRUST',
    taxed$: 34700,
    usage: '110',
    use: 'R1W'
  },
  '12-168': {
    address: 'ISLAND POND RD',
    area: 0.06,
    building$: 0,
    centers: [
      {
        lat: 43.17034358558101,
        lon: -72.07171676322845
      }
    ],
    cu$: 7500,
    land$: 25300,
    owner: 'PARKER, JEFFREY S REVOCABLE TR',
    taxed$: 32800,
    usage: '110',
    use: 'R1W'
  },
  '12-171': {
    address: 'ISLAND POND RD',
    area: 0.03,
    building$: 0,
    centers: [
      {
        lat: 43.170635380191214,
        lon: -72.07159655698638
      }
    ],
    cu$: 5900,
    land$: 23300,
    owner: 'FRANCE, DAVID',
    taxed$: 29200,
    usage: '110',
    use: 'R1W'
  },
  '12-172': {
    address: '125 ISLAND POND RD',
    area: 0.07,
    building$: 0,
    centers: [
      {
        lat: 43.170753666846075,
        lon: -72.07153575956998
      }
    ],
    cu$: 13100,
    land$: 36000,
    owner: 'OEHLSCHLAEGER, F K & SE TRUST',
    taxed$: 49100,
    usage: '110',
    use: 'R1W'
  },
  '12-173': {
    address: 'ISLAND POND RD',
    area: 0.05,
    building$: 0,
    centers: [
      {
        lat: 43.17088586615674,
        lon: -72.07133792758233
      }
    ],
    cu$: 5700,
    land$: 24700,
    owner: 'PARKER, JEFFREY S REVOCABLE TR',
    taxed$: 30400,
    usage: '110',
    use: 'R1W'
  },
  '12-181': {
    address: 'VALLEY RD',
    area: 7.64,
    building$: 0,
    centers: [
      {
        lat: 43.17220359594738,
        lon: -72.09329965636822
      }
    ],
    cu$: 0,
    land$: 1059,
    owner: 'GOLTSOV, GREGORY V',
    taxed$: 1059,
    usage: '190',
    use: 'CUUW'
  },
  '12-181-04': {
    address: 'SO MAIN ST',
    area: 5.05,
    building$: 0,
    centers: [
      {
        lat: 43.17102174974542,
        lon: -72.09206409849807
      }
    ],
    cu$: 0,
    land$: 4700,
    owner: 'LONGVAL, MARC C',
    taxed$: 4700,
    usage: '110',
    use: 'R1'
  },
  '12-191': {
    address: '749 HALFMOON PD RD',
    area: 1.8,
    building$: 10800,
    centers: [
      {
        lat: 43.1834397780208,
        lon: -72.0851831693789
      }
    ],
    cu$: 0,
    land$: 92500,
    owner: 'MADIGAN,SEAN',
    taxed$: 103300,
    usage: '110',
    use: 'R1'
  },
  '12-192': {
    address: 'MILL ST',
    area: 0.5,
    building$: 0,
    centers: [
      {
        lat: 43.170027722275684,
        lon: -72.08633779658429
      }
    ],
    cu$: 0,
    land$: 9,
    owner: 'YEATON, H & E REV TRUST',
    taxed$: 9,
    usage: '190',
    use: 'CUWL'
  },
  '12-189': {
    address: '1 PETERSON ISLAND',
    area: 0.36,
    building$: 0,
    centers: [
      {
        lat: 43.178674036165084,
        lon: -72.06464498747239
      }
    ],
    cu$: 5400,
    land$: 80800,
    owner: 'PETERSON REAL ESTATE TRUST',
    taxed$: 86200,
    usage: '110',
    use: 'R1'
  },
  '12-183': {
    address: 'SO MAIN ST',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.16996252099358,
        lon: -72.08804292461136
      }
    ],
    cu$: 0,
    land$: 5600,
    owner: 'WASHINGTON, TOWN OF - CONSERVA',
    taxed$: 5600,
    usage: '300',
    use: 'EX-M'
  },
  '12-184': {
    address: 'HALFMOON PD RD',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.172452821469754,
        lon: -72.08553717987498
      }
    ],
    cu$: 0,
    land$: 5900,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 5900,
    usage: '300',
    use: 'EX-M'
  },
  '12-186': {
    address: 'HALFMOON PD RD',
    area: 0.75,
    building$: 0,
    centers: [
      {
        lat: 43.17447367788951,
        lon: -72.08501025117161
      }
    ],
    cu$: 0,
    land$: 5900,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 5900,
    usage: '300',
    use: 'EX-M'
  },
  '12-188': {
    address: '1 SPENCERS ISLAND',
    area: 6.33,
    building$: 33400,
    centers: [
      {
        lat: 43.17781447082379,
        lon: -72.06723477183878
      }
    ],
    cu$: 7800,
    land$: 167000,
    owner: 'PARKER, JEFFREY S REVOCABLE TR',
    taxed$: 208200,
    usage: '110',
    use: 'R1'
  },
  '12-190': {
    address: '1 OEHLSCHLAEGER ISLAND',
    area: 0.17,
    building$: 49000,
    centers: [
      {
        lat: 43.174867141209845,
        lon: -72.06502888799794
      }
    ],
    cu$: 2100,
    land$: 108100,
    owner: 'OEHLSCHLAEGER, F K & SE TRUST',
    taxed$: 159200,
    usage: '110',
    use: 'R1'
  },
  '12-193': {
    address: 'MILL ST',
    area: 0.5,
    building$: 0,
    centers: [
      {
        lat: 43.171688732560156,
        lon: -72.08525026576919
      }
    ],
    cu$: 0,
    land$: 9400,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 9400,
    usage: '300',
    use: 'EX-M'
  },
  '12-196': {
    address: 'HALFMOON PD RD',
    area: 0.25,
    building$: 0,
    centers: [
      {
        lat: 43.18201596315856,
        lon: -72.08170497742665
      }
    ],
    cu$: 0,
    land$: 67500,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 67500,
    usage: '400',
    use: 'EX-S'
  },
  '12-197': {
    address: 'ISLAND POND RD',
    area: 0.06,
    building$: 0,
    centers: [
      {
        lat: 43.16962860992693,
        lon: -72.07236631721608
      }
    ],
    cu$: 0,
    land$: 34000,
    owner: 'PARLOW, MARK E',
    taxed$: 34000,
    usage: '110',
    use: 'R1W'
  },
  '12-199': {
    address: 'HALFMOON PD RD',
    area: 10.26,
    building$: 0,
    centers: [
      {
        lat: 43.179255400680695,
        lon: -72.0791170797302
      }
    ],
    cu$: 0,
    land$: 788,
    owner: 'KRYGERIS REVOCABLE FAMILY TRST',
    taxed$: 788,
    usage: '190',
    use: 'CUFL'
  },
  '12-201': {
    address: 'SO MAIN ST',
    area: 12.68,
    building$: 0,
    centers: [
      {
        lat: 43.1721692292458,
        lon: -72.09001794421441
      }
    ],
    cu$: 0,
    land$: 33100,
    owner: 'RHOADES, WILLIAM',
    taxed$: 33100,
    usage: '110',
    use: 'R1'
  },
  '12-205': {
    address: 'ISLAND POND RD',
    area: 0.25,
    building$: 0,
    centers: [
      {
        lat: 43.17094334555382,
        lon: -72.07016963555569
      }
    ],
    cu$: 0,
    land$: 140800,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 140800,
    usage: '400',
    use: 'EX-S'
  },
  '12-206': {
    address: '1 POLLACK ISLAND',
    area: 0.02,
    building$: 0,
    centers: [
      {
        lat: 43.17594268354942,
        lon: -72.06510678415975
      }
    ],
    cu$: 0,
    land$: 10400,
    owner: 'POLLACK, ALAN',
    taxed$: 10400,
    usage: '110',
    use: 'R1'
  },
  '13-2': {
    address: 'E WASHINGTON RD',
    area: 74.5,
    building$: 0,
    centers: [
      {
        lat: 43.18438098083044,
        lon: -72.04316382517678
      }
    ],
    cu$: 900,
    land$: 82200,
    owner: 'WASHINGTON, TOWN OF - TC DEED',
    taxed$: 83100,
    usage: '300',
    use: 'EX-M'
  },
  '13-9': {
    address: 'E WASHINGTON RD',
    area: 28.6,
    building$: 0,
    centers: [
      {
        lat: 43.175489320295966,
        lon: -72.04930020264223
      }
    ],
    cu$: 0,
    land$: 26701,
    owner: 'MANNING, JOHN M',
    taxed$: 26701,
    usage: '110',
    use: 'R1'
  },
  '13-10': {
    address: 'FIELDS WAY',
    area: 15.4,
    building$: 0,
    centers: [
      {
        lat: 43.17431496727544,
        lon: -72.05158495862594
      }
    ],
    cu$: 0,
    land$: 21129,
    owner: 'GELATT FAMILY TRUST',
    taxed$: 21129,
    usage: '110',
    use: 'R1'
  },
  '13-11': {
    address: 'FIELDS WAY',
    area: 0.93,
    building$: 0,
    centers: [
      {
        lat: 43.17422848654786,
        lon: -72.04981634032853
      }
    ],
    cu$: 0,
    land$: 77,
    owner: 'GELATT FAMILY TRUST',
    taxed$: 77,
    usage: '190',
    use: 'CUUW'
  },
  '13-13': {
    address: 'FIELDS WAY',
    area: 0.93,
    building$: 0,
    centers: [
      {
        lat: 43.17415683006709,
        lon: -72.04842121693983
      }
    ],
    cu$: 0,
    land$: 79,
    owner: 'GELATT FAMILY TRUST',
    taxed$: 79,
    usage: '190',
    use: 'CUUW'
  },
  '13-14': {
    address: 'FIELDS WAY',
    area: 0.93,
    building$: 0,
    centers: [
      {
        lat: 43.17412164360708,
        lon: -72.04774245357135
      }
    ],
    cu$: 0,
    land$: 81,
    owner: 'GELATT FAMILY TRUST',
    taxed$: 81,
    usage: '190',
    use: 'CUUW'
  },
  '13-15': {
    address: 'FIELDS WAY',
    area: 0.95,
    building$: 0,
    centers: [
      {
        lat: 43.17409390943428,
        lon: -72.04705022213213
      }
    ],
    cu$: 0,
    land$: 81,
    owner: 'GELATT FAMILY TRUST',
    taxed$: 81,
    usage: '190',
    use: 'CUUW'
  },
  '13-37': {
    address: 'KINGSBURY HILL RD',
    area: 8.4,
    building$: 0,
    centers: [
      {
        lat: 43.1720787147204,
        lon: -72.03173167911598
      }
    ],
    cu$: 0,
    land$: 653,
    owner: 'CORNELIUSEN FAMILY IRREVOCABLE',
    taxed$: 653,
    usage: '190',
    use: 'CUUW'
  },
  '13-38': {
    address: 'E WASHINGTON RD',
    area: 146.5,
    building$: 0,
    centers: [
      {
        lat: 43.189006799069965,
        lon: -72.04341964356725
      }
    ],
    cu$: 0,
    land$: 31338,
    owner: 'ECCARDT FARMS INC',
    taxed$: 31338,
    usage: '110',
    use: 'R1'
  },
  '13-39': {
    address: 'E WASHINGTON RD',
    area: 7,
    building$: 0,
    centers: [
      {
        lat: 43.18824810908171,
        lon: -72.03302643520635
      }
    ],
    cu$: 0,
    land$: 758,
    owner: 'ECCARDT FARMS INC',
    taxed$: 758,
    usage: '110',
    use: 'R1'
  },
  '14-10': {
    address: 'HARRISON RD',
    area: 1.34,
    building$: 0,
    centers: [
      {
        lat: 43.16555890113176,
        lon: -72.15301284838952
      }
    ],
    cu$: 0,
    land$: 104600,
    owner: 'JETTE, GERARD',
    taxed$: 104600,
    usage: '110',
    use: 'R1W'
  },
  '14-11': {
    address: 'HARRISON RD',
    area: 1.43,
    building$: 0,
    centers: [
      {
        lat: 43.16523331691523,
        lon: -72.15338144205822
      }
    ],
    cu$: 0,
    land$: 24900,
    owner: 'CIANCETTA, CHRISTINE A',
    taxed$: 24900,
    usage: '110',
    use: 'R1W'
  },
  '14-50': {
    address: 'TAYLOR CIR',
    area: 1.24,
    building$: 0,
    centers: [
      {
        lat: 43.16764305922648,
        lon: -72.14919437722766
      }
    ],
    cu$: 0,
    land$: 11400,
    owner: 'QUARANTA, THOMAS J',
    taxed$: 11400,
    usage: '110',
    use: 'R1A'
  },
  '14-52': {
    address: 'TAYLOR CIR',
    area: 1.15,
    building$: 0,
    centers: [
      {
        lat: 43.166513102142446,
        lon: -72.14918496269605
      }
    ],
    cu$: 0,
    land$: 14300,
    owner: 'KEAMY, MATTHEW P',
    taxed$: 14300,
    usage: '110',
    use: 'R1'
  },
  '14-65': {
    address: 'GRANT RD',
    area: 1.5,
    building$: 0,
    centers: [
      {
        lat: 43.16378175537191,
        lon: -72.14857357961274
      }
    ],
    cu$: 0,
    land$: 8100,
    owner: 'LAMBERT, ROBERT H',
    taxed$: 8100,
    usage: '110',
    use: 'R1'
  },
  '14-96': {
    address: 'JEFFERSON DR',
    area: 1.46,
    building$: 0,
    centers: [
      {
        lat: 43.160119910244944,
        lon: -72.14912671995154
      }
    ],
    cu$: 0,
    land$: 10400,
    owner: 'SZYMANSKI, JOSEPH',
    taxed$: 10400,
    usage: '110',
    use: 'R1'
  },
  '14-101': {
    address: 'JEFFERSON DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.1606313571544,
        lon: -72.14619699627053
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'GLAVIANO, GWEN',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-122': {
    address: 'MADISON DR',
    area: 0.72,
    building$: 0,
    centers: [
      {
        lat: 43.15891935440708,
        lon: -72.14895954903879
      }
    ],
    cu$: 0,
    land$: 13000,
    owner: 'RUGGIERO, ROCCO R',
    taxed$: 13000,
    usage: '110',
    use: 'R1'
  },
  '14-135': {
    address: 'PRESIDENTIAL DR',
    area: 2.32,
    building$: 0,
    centers: [
      {
        lat: 43.15886446510074,
        lon: -72.14600720556022
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'L A E ASSOCIATION',
    taxed$: 0,
    usage: '260',
    use: 'CI'
  },
  '14-187': {
    address: 'VAN BUREN CIR',
    area: 0.25,
    building$: 0,
    centers: [
      {
        lat: 43.15320824448843,
        lon: -72.14581808720561
      }
    ],
    cu$: 100,
    land$: 28500,
    owner: 'CROSS, THOMAS E',
    taxed$: 28600,
    usage: '110',
    use: 'R1W'
  },
  '14-197': {
    address: 'MCKINLEY DR',
    area: 1.35,
    building$: 0,
    centers: [
      {
        lat: 43.15375914621892,
        lon: -72.1411202301198
      }
    ],
    cu$: 0,
    land$: 118800,
    owner: 'ZERJAV, JOHN',
    taxed$: 118800,
    usage: '110',
    use: 'R1W'
  },
  '14-205': {
    address: '104 GARFIELD DR',
    area: 1.01,
    building$: 112400,
    centers: [
      {
        lat: 43.15198248297615,
        lon: -72.13922374507419
      }
    ],
    cu$: 13700,
    land$: 211500,
    owner: 'WORSHAM, STEPHEN J & MEGAN F',
    taxed$: 337600,
    usage: '110',
    use: 'R1W'
  },
  '14-225': {
    address: 'HAYES RD',
    area: 0.85,
    building$: 0,
    centers: [
      {
        lat: 43.15697827738065,
        lon: -72.14640275351778
      }
    ],
    cu$: 0,
    land$: 11100,
    owner: 'OSTHEIMER, ARPAD',
    taxed$: 11100,
    usage: '110',
    use: 'R1'
  },
  '14-261': {
    address: 'ADAMS DR',
    area: 0.89,
    building$: 0,
    centers: [
      {
        lat: 43.1543121941286,
        lon: -72.13721902520969
      }
    ],
    cu$: 0,
    land$: 11200,
    owner: 'LEDBETTER, JENNIFER L & GERALD',
    taxed$: 11200,
    usage: '110',
    use: 'R1'
  },
  '14-268': {
    address: 'PIERCE RD',
    area: 0.78,
    building$: 0,
    centers: [
      {
        lat: 43.15227573727965,
        lon: -72.13745360454008
      }
    ],
    cu$: 0,
    land$: 12600,
    owner: 'VISINSKI, ANDREW',
    taxed$: 12600,
    usage: '110',
    use: 'R1'
  },
  '14-270': {
    address: 'LINCOLN DR',
    area: 0.81,
    building$: 0,
    centers: [
      {
        lat: 43.156247226306576,
        lon: -72.13764093710152
      }
    ],
    cu$: 0,
    land$: 12100,
    owner: 'PAWLOWSKI, MITCHELL',
    taxed$: 12100,
    usage: '110',
    use: 'R1'
  },
  '14-271': {
    address: 'LINCOLN DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.15616921432299,
        lon: -72.13830962057109
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'MEADE, JOSEPH B',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-277': {
    address: 'LINCOLN DR',
    area: 1.59,
    building$: 0,
    centers: [
      {
        lat: 43.15551356775787,
        lon: -72.14193328583802
      }
    ],
    cu$: 0,
    land$: 11600,
    owner: 'ATHANASOPOULOS, CHRISTINA',
    taxed$: 11600,
    usage: '110',
    use: 'R1'
  },
  '14-278': {
    address: 'LINCOLN DR',
    area: 1.16,
    building$: 0,
    centers: [
      {
        lat: 43.155956536249526,
        lon: -72.14224209533313
      }
    ],
    cu$: 0,
    land$: 11400,
    owner: 'ATHANASOPOULOS, CHRISTINA',
    taxed$: 11400,
    usage: '110',
    use: 'R1'
  },
  '14-281': {
    address: 'LINCOLN DR',
    area: 1.67,
    building$: 0,
    centers: [
      {
        lat: 43.15709274336076,
        lon: -72.14362287285464
      }
    ],
    cu$: 0,
    land$: 11600,
    owner: 'KOVATCHEVA, SABINA HIMMINGER',
    taxed$: 11600,
    usage: '110',
    use: 'R1'
  },
  '14-301': {
    address: 'JACKSON DR',
    area: 1.07,
    building$: 0,
    centers: [
      {
        lat: 43.15728455428498,
        lon: -72.14139955608297
      }
    ],
    cu$: 0,
    land$: 10200,
    owner: 'MACLACHLAN, JANE',
    taxed$: 10200,
    usage: '110',
    use: 'R1'
  },
  '14-302': {
    address: 'JACKSON DR',
    area: 1.18,
    building$: 0,
    centers: [
      {
        lat: 43.15764514756715,
        lon: -72.14179166983362
      }
    ],
    cu$: 0,
    land$: 10300,
    owner: 'GUNDECK, STANLEY R',
    taxed$: 10300,
    usage: '110',
    use: 'R1'
  },
  '14-309': {
    address: '421 PRESIDENTIAL DR',
    area: 0.88,
    building$: 57400,
    centers: [
      {
        lat: 43.15947288187559,
        lon: -72.14169861017801
      }
    ],
    cu$: 900,
    land$: 35800,
    owner: 'F ROCK TRUST',
    taxed$: 94100,
    usage: '110',
    use: 'R1'
  },
  '14-312': {
    address: 'CLEVELAND CIR',
    area: 0.95,
    building$: 0,
    centers: [
      {
        lat: 43.158613279942195,
        lon: -72.14121891232155
      }
    ],
    cu$: 0,
    land$: 11300,
    owner: 'ALEXANDER, NICHOLAS A',
    taxed$: 11300,
    usage: '110',
    use: 'R1'
  },
  '14-314': {
    address: 'JACKSON DR',
    area: 0.79,
    building$: 0,
    centers: [
      {
        lat: 43.158759879379055,
        lon: -72.14016730662614
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'VITTI, ANTHONY',
    taxed$: 11000,
    usage: '110',
    use: 'R1'
  },
  '14-327': {
    address: 'PRESIDENTIAL DR',
    area: 1.94,
    building$: 0,
    centers: [
      {
        lat: 43.15814321877247,
        lon: -72.13750083782875
      }
    ],
    cu$: 0,
    land$: 37700,
    owner: 'REYNOLDS, ALAN P',
    taxed$: 37700,
    usage: '110',
    use: 'R1'
  },
  '14-336': {
    address: 'PRESIDENTIAL DR',
    area: 1.17,
    building$: 0,
    centers: [
      {
        lat: 43.15993898733355,
        lon: -72.14098405186579
      }
    ],
    cu$: 0,
    land$: 11400,
    owner: 'WONG, DON R JR',
    taxed$: 11400,
    usage: '110',
    use: 'R1A'
  },
  '14-356': {
    address: '418 COOLIDGE DR',
    area: 5.52,
    building$: 167900,
    centers: [
      {
        lat: 43.164806234904695,
        lon: -72.14445597379246
      }
    ],
    cu$: 25400,
    land$: 45100,
    owner: 'MOHR, CHRISTOPHER',
    taxed$: 238400,
    usage: '110',
    use: 'R1'
  },
  '14-360': {
    address: 'COOLIDGE DR',
    area: 1.04,
    building$: 0,
    centers: [
      {
        lat: 43.16322733326075,
        lon: -72.14448945740422
      }
    ],
    cu$: 0,
    land$: 3400,
    owner: 'WELDES, DR. PETRA',
    taxed$: 3400,
    usage: '110',
    use: 'R1'
  },
  '14-415': {
    address: 'ASHUELOT ACRE RD',
    area: 0.19,
    building$: 0,
    centers: [
      {
        lat: 43.151551916613066,
        lon: -72.157453581955
      }
    ],
    cu$: 1300,
    land$: 81500,
    owner: 'GILMORE FAMILY REV LIVING TRUS',
    taxed$: 82800,
    usage: '110',
    use: 'R1'
  },
  '14-364': {
    address: 'COOLIDGE DR',
    area: 4.8,
    building$: 0,
    centers: [
      {
        lat: 43.161698311346,
        lon: -72.14322701320621
      }
    ],
    cu$: 0,
    land$: 12500,
    owner: 'BOYCE, STEVEN M TRUST',
    taxed$: 12500,
    usage: '110',
    use: 'R1'
  },
  '14-380': {
    address: 'BUCHANAN CIR',
    area: 2.61,
    building$: 0,
    centers: [
      {
        lat: 43.16186622765679,
        lon: -72.14090278895668
      }
    ],
    cu$: 0,
    land$: 12000,
    owner: 'LANDRY FAMILY TRUST',
    taxed$: 12000,
    usage: '110',
    use: 'R1'
  },
  '14-387': {
    address: 'COOLIDGE DR',
    area: 4.53,
    building$: 0,
    centers: [
      {
        lat: 43.1639727694543,
        lon: -72.14030937990026
      }
    ],
    cu$: 0,
    land$: 14700,
    owner: 'SANFORD, CHRISTOPHER J',
    taxed$: 14700,
    usage: '110',
    use: 'R1'
  },
  '14-390': {
    address: 'COOLIDGE DR',
    area: 3,
    building$: 0,
    centers: [
      {
        lat: 43.16421186118198,
        lon: -72.14195361855961
      }
    ],
    cu$: 0,
    land$: 12200,
    owner: 'MOHR, CHRISTOPHER',
    taxed$: 12200,
    usage: '110',
    use: 'R1'
  },
  '14-391': {
    address: 'COOLIDGE DR',
    area: 2.09,
    building$: 0,
    centers: [
      {
        lat: 43.164082979853674,
        lon: -72.14302580250363
      }
    ],
    cu$: 0,
    land$: 11800,
    owner: 'MOHR, CHRISTOPHER',
    taxed$: 11800,
    usage: '110',
    use: 'R1'
  },
  '14-392': {
    address: 'COOLIDGE DR',
    area: 1.65,
    building$: 0,
    centers: [
      {
        lat: 43.163785084966904,
        lon: -72.14369735462247
      }
    ],
    cu$: 0,
    land$: 12800,
    owner: 'MOHR, CHRISTOPHER',
    taxed$: 12800,
    usage: '110',
    use: 'R1'
  },
  '14-393': {
    address: 'COOLIDGE DR',
    area: 1.4,
    building$: 0,
    centers: [
      {
        lat: 43.16321479200819,
        lon: -72.14310925400595
      }
    ],
    cu$: 1900,
    land$: 12700,
    owner: 'GALLAGHER, STEVEN J',
    taxed$: 14600,
    usage: '110',
    use: 'R1'
  },
  '14-394': {
    address: 'COOLIDGE DR',
    area: 1.7365,
    building$: 0,
    centers: [
      {
        lat: 43.16258215116974,
        lon: -72.14245131027313
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-395': {
    address: 'COOLIDGE DR',
    area: 1.6838,
    building$: 0,
    centers: [
      {
        lat: 43.161976440892985,
        lon: -72.1423597553342
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-396': {
    address: 'OLD MARLOW RD',
    area: 21,
    building$: 0,
    centers: [
      {
        lat: 43.16824017864824,
        lon: -72.15724407408676
      }
    ],
    cu$: 0,
    land$: 849,
    owner: 'SCHNEIDER FAMILY REVOCABLE TRU',
    taxed$: 849,
    usage: '190',
    use: 'CUMO'
  },
  '14-397': {
    address: 'OLD MARLOW RD',
    area: 8,
    building$: 0,
    centers: [
      {
        lat: 43.1673035402503,
        lon: -72.16345665114974
      }
    ],
    cu$: 0,
    land$: 506,
    owner: 'THOMPSON, ROBERT',
    taxed$: 506,
    usage: '190',
    use: 'CUUH'
  },
  '14-399': {
    address: 'HUNTLEY MT RD',
    area: 18,
    building$: 0,
    centers: [
      {
        lat: 43.16091983164628,
        lon: -72.15899570306789
      }
    ],
    cu$: 0,
    land$: 754,
    owner: 'SOCIETY FOR THE PROTECTION',
    taxed$: 754,
    usage: '190',
    use: 'CUUW'
  },
  '14-400': {
    address: 'HUNTLEY MT RD',
    area: 106,
    building$: 0,
    centers: [
      {
        lat: 43.15715735293867,
        lon: -72.16444268533871
      }
    ],
    cu$: 0,
    land$: 51700,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 51700,
    usage: '501',
    use: 'EX-M'
  },
  '14-427': {
    address: 'ASHUELOT ACRE RD',
    area: 0.54,
    building$: 0,
    centers: [
      {
        lat: 43.15390055446472,
        lon: -72.15928027511856
      }
    ],
    cu$: 0,
    land$: 21100,
    owner: 'GILLIGAN, JENNY M',
    taxed$: 21100,
    usage: '110',
    use: 'R1A'
  },
  '14-428': {
    address: 'ASHUELOT ACRE RD',
    area: 1.53,
    building$: 0,
    centers: [
      {
        lat: 43.15433861556191,
        lon: -72.15915110488727
      }
    ],
    cu$: 0,
    land$: 23100,
    owner: 'BROWN, FRANK J',
    taxed$: 23100,
    usage: '110',
    use: 'R1A'
  },
  '14-430': {
    address: 'LANG RD',
    area: 3.3,
    building$: 0,
    centers: [
      {
        lat: 43.1528733187475,
        lon: -72.15980365262608
      }
    ],
    cu$: 0,
    land$: 24600,
    owner: 'HALL, JAMES',
    taxed$: 24600,
    usage: '110',
    use: 'R1A'
  },
  '14-431': {
    address: '51 COTTAGE LN',
    area: 1.17,
    building$: 49700,
    centers: [
      {
        lat: 43.15241373465737,
        lon: -72.15924620340184
      }
    ],
    cu$: 900,
    land$: 32600,
    owner: 'PRATT, RONALD W',
    taxed$: 83200,
    usage: '110',
    use: 'R1A'
  },
  '14-432': {
    address: '30 COTTAGE LN',
    area: 0.42,
    building$: 49700,
    centers: [
      {
        lat: 43.15190119506364,
        lon: -72.15876516802702
      }
    ],
    cu$: 1500,
    land$: 29400,
    owner: 'CHASSE, WAYNE P',
    taxed$: 80600,
    usage: '110',
    use: 'R1A'
  },
  '14-436': {
    address: '31 LANG RD',
    area: 1.76,
    building$: 49200,
    centers: [
      {
        lat: 43.15237006093225,
        lon: -72.16034576512335
      }
    ],
    cu$: 2900,
    land$: 23300,
    owner: 'GEERTZ, WILLIAM',
    taxed$: 75400,
    usage: '110',
    use: 'R1'
  },
  '14-437': {
    address: '41 LANG RD',
    area: 0.21,
    building$: 70800,
    centers: [
      {
        lat: 43.15280853672654,
        lon: -72.16053576521267
      }
    ],
    cu$: 1600,
    land$: 24800,
    owner: 'GILLIGAN, JENNY M',
    taxed$: 97200,
    usage: '110',
    use: 'R1'
  },
  '14-438': {
    address: '530 MARLOW RD',
    area: 0.3,
    building$: 1600,
    centers: [
      {
        lat: 43.15169435618208,
        lon: -72.1609038255337
      }
    ],
    cu$: 1900,
    land$: 28400,
    owner: 'KATHAN, JAMES C',
    taxed$: 31900,
    usage: '110',
    use: 'R1A'
  },
  '14-439': {
    address: 'MARLOW RD',
    area: 15,
    building$: 0,
    centers: [
      {
        lat: 43.15065406805526,
        lon: -72.16131417795162
      }
    ],
    cu$: 0,
    land$: 1987,
    owner: 'SANDERS, GEORGE',
    taxed$: 1987,
    usage: '190',
    use: 'CUUW'
  },
  '14-441': {
    address: 'ASHUELOT POND',
    area: 13,
    building$: 0,
    centers: [
      {
        lat: 43.1494134522742,
        lon: -72.1559956285162
      }
    ],
    cu$: 1700,
    land$: 87761,
    owner: 'BRITTON, RAYMOND F',
    taxed$: 89461,
    usage: '110',
    use: 'R1W'
  },
  '14-442': {
    address: 'MARLOW RD',
    area: 13,
    building$: 0,
    centers: [
      {
        lat: 43.148112238364995,
        lon: -72.15563899828098
      }
    ],
    cu$: 4200,
    land$: 41453,
    owner: 'CROSS, THOMAS E',
    taxed$: 45653,
    usage: '110',
    use: 'R1'
  },
  '14-443': {
    address: '30 ASHUELOT POND',
    area: 1.56,
    building$: 82400,
    centers: [
      {
        lat: 43.14976981018451,
        lon: -72.15476841801326
      }
    ],
    cu$: 7100,
    land$: 109800,
    owner: 'JOYCE, LEILA',
    taxed$: 199300,
    usage: '110',
    use: 'R1W'
  },
  '14-444': {
    address: 'ASHUELOT POND',
    area: 0.46,
    building$: 0,
    centers: [
      {
        lat: 43.1491881807912,
        lon: -72.15392748032573
      }
    ],
    cu$: 0,
    land$: 55600,
    owner: 'JOYCE, LEILA',
    taxed$: 55600,
    usage: '110',
    use: 'R1W'
  },
  '14-445': {
    address: '48 ASHUELOT POND',
    area: 0.37,
    building$: 34100,
    centers: [
      {
        lat: 43.1489843031952,
        lon: -72.15354104595112
      }
    ],
    cu$: 4700,
    land$: 77400,
    owner: 'FISK, GLORIA A',
    taxed$: 116200,
    usage: '110',
    use: 'R1W'
  },
  '14-446': {
    address: '52 ASHUELOT POND',
    area: 0.16,
    building$: 24900,
    centers: [
      {
        lat: 43.14877228123477,
        lon: -72.15339858839688
      }
    ],
    cu$: 0,
    land$: 47500,
    owner: 'PURDY III, WILLIAM A',
    taxed$: 72400,
    usage: '110',
    use: 'R1W'
  },
  '14-447': {
    address: '66 ASHUELOT POND',
    area: 0.08,
    building$: 16000,
    centers: [
      {
        lat: 43.14813272207341,
        lon: -72.15307533544532
      }
    ],
    cu$: 0,
    land$: 43000,
    owner: 'CROSS, THOMAS E',
    taxed$: 59000,
    usage: '110',
    use: 'R1W'
  },
  '14-448': {
    address: '56 ASHUELOT POND',
    area: 0.23,
    building$: 25100,
    centers: [
      {
        lat: 43.14864365435749,
        lon: -72.15322399513833
      }
    ],
    cu$: 1000,
    land$: 65800,
    owner: 'LANG, TIMOTHY D. & ELAINE M. R',
    taxed$: 91900,
    usage: '110',
    use: 'R1W'
  },
  '14-449': {
    address: '62 ASHUELOT POND',
    area: 0.11,
    building$: 45000,
    centers: [
      {
        lat: 43.14853968438845,
        lon: -72.15301382763565
      }
    ],
    cu$: 600,
    land$: 45100,
    owner: 'CROSS, THOMAS E',
    taxed$: 90700,
    usage: '110',
    use: 'R1W'
  },
  '14-450': {
    address: '64 ASHUELOT POND',
    area: 0.05,
    building$: 13200,
    centers: [
      {
        lat: 43.14834849275839,
        lon: -72.15309641716158
      }
    ],
    cu$: 600,
    land$: 40600,
    owner: 'CROSS, THOMAS E',
    taxed$: 54400,
    usage: '110',
    use: 'R1W'
  },
  '14-451': {
    address: '70 ASHUELOT POND',
    area: 0.16,
    building$: 16600,
    centers: [
      {
        lat: 43.1478743968954,
        lon: -72.15302607873801
      }
    ],
    cu$: 0,
    land$: 47500,
    owner: 'PELLETIER, ANNE M',
    taxed$: 64100,
    usage: '110',
    use: 'R1W'
  },
  '14-452': {
    address: '74 BRENDA LN',
    area: 0.39,
    building$: 92800,
    centers: [
      {
        lat: 43.14754119871604,
        lon: -72.15300097749335
      }
    ],
    cu$: 800,
    land$: 58300,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 151900,
    usage: '110',
    use: 'R1W'
  },
  '14-454': {
    address: 'BRENDA LN',
    area: 1.09,
    building$: 0,
    centers: [
      {
        lat: 43.14706053136633,
        lon: -72.15326619910893
      }
    ],
    cu$: 0,
    land$: 77,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 77,
    usage: '110',
    use: 'R1'
  },
  '14-454-01': {
    address: 'KAREN LN',
    area: 0.71,
    building$: 0,
    centers: [
      {
        lat: 43.146885917460196,
        lon: -72.15274749787798
      }
    ],
    cu$: 0,
    land$: 81700,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 81700,
    usage: '110',
    use: 'R1W'
  },
  '14-454-04': {
    address: 'BRENDA LN',
    area: 0.48,
    building$: 0,
    centers: [
      {
        lat: 43.147276429369214,
        lon: -72.15380988223187
      }
    ],
    cu$: 1500,
    land$: 29800,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 31300,
    usage: '110',
    use: 'R1A'
  },
  '14-454-08': {
    address: '72 BRENDA LN',
    area: 0.46,
    building$: 9400,
    centers: [
      {
        lat: 43.14771285789027,
        lon: -72.15365093962575
      }
    ],
    cu$: 4400,
    land$: 29700,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 43500,
    usage: '110',
    use: 'R1A'
  },
  '14-455': {
    address: 'HUNTLEY MT RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.15469306272211,
        lon: -72.16358018277981
      }
    ],
    cu$: 0,
    land$: 22700,
    owner: 'HEBERT, JOHN W',
    taxed$: 22700,
    usage: '110',
    use: 'R1'
  },
  '14-457': {
    address: '34 HUNTLEY MT RD',
    area: 2.26,
    building$: 200,
    centers: [
      {
        lat: 43.15332095577606,
        lon: -72.1628013745
      }
    ],
    cu$: 1000,
    land$: 14800,
    owner: 'CROSS,THOMAS E',
    taxed$: 16000,
    usage: '110',
    use: 'R1'
  },
  '14-462': {
    address: 'MARLOW RD',
    area: 41.7,
    building$: 0,
    centers: [
      {
        lat: 43.15267956395746,
        lon: -72.16732761141716
      }
    ],
    cu$: 0,
    land$: 2202,
    owner: 'CROSS, THOMAS E',
    taxed$: 2202,
    usage: '190',
    use: 'CUUH'
  },
  '14-466': {
    address: 'MARLOW RD',
    area: 18,
    building$: 0,
    centers: [
      {
        lat: 43.15109252787437,
        lon: -72.16699246184605
      }
    ],
    cu$: 0,
    land$: 1137,
    owner: 'CROSS, THOMAS E',
    taxed$: 1137,
    usage: '190',
    use: 'CUUH'
  },
  '14-485': {
    address: '270 ASHUELOT POND',
    area: 1.89,
    building$: 28000,
    centers: [
      {
        lat: 43.14835907457123,
        lon: -72.14128115620734
      }
    ],
    cu$: 1400,
    land$: 165100,
    owner: 'PORTER, TODD A. & CHRISTOPHER ',
    taxed$: 194500,
    usage: '110',
    use: 'R1W'
  },
  '14-469': {
    address: '95 MARLOW RD',
    area: 13,
    building$: 0,
    centers: [
      {
        lat: 43.149489538382085,
        lon: -72.16819548538093
      }
    ],
    cu$: 0,
    land$: 608,
    owner: 'AMERICAN BORN, LLC',
    taxed$: 608,
    usage: '110',
    use: 'R1'
  },
  '14-471': {
    address: '578 MARLOW RD',
    area: 0.3,
    building$: 30000,
    centers: [
      {
        lat: 43.15101038387927,
        lon: -72.15934727750385
      }
    ],
    cu$: 0,
    land$: 25600,
    owner: 'MANN, JAMES SR & EILEEN',
    taxed$: 55600,
    usage: '110',
    use: 'R1A'
  },
  '14-472': {
    address: 'MARLOW RD',
    area: 0.34,
    building$: 0,
    centers: [
      {
        lat: 43.150968770810394,
        lon: -72.15902712246749
      }
    ],
    cu$: 0,
    land$: 25800,
    owner: 'DONOFRIO, MICHAEL M',
    taxed$: 25800,
    usage: '110',
    use: 'R1A'
  },
  '14-473': {
    address: '594 MARLOW RD',
    area: 0.47,
    building$: 68700,
    centers: [
      {
        lat: 43.15097833307081,
        lon: -72.15865415573197
      }
    ],
    cu$: 8000,
    land$: 29800,
    owner: 'MEISNER, RALPH',
    taxed$: 106500,
    usage: '110',
    use: 'R1A'
  },
  '14-474': {
    address: 'MARLOW RD',
    area: 0.34,
    building$: 0,
    centers: [
      {
        lat: 43.15100291409968,
        lon: -72.15827874619478
      }
    ],
    cu$: 0,
    land$: 17200,
    owner: 'MEISNER, RALPH',
    taxed$: 17200,
    usage: '110',
    use: 'R1'
  },
  '14-475': {
    address: 'MARLOW RD',
    area: 3.4,
    building$: 0,
    centers: [
      {
        lat: 43.14753479969893,
        lon: -72.16352781482901
      }
    ],
    cu$: 0,
    land$: 21200,
    owner: 'SOUZA, PAUL J',
    taxed$: 21200,
    usage: '110',
    use: 'R1'
  },
  '14-492': {
    address: '184 MARLOW RD',
    area: 6.6,
    building$: 111300,
    centers: [
      {
        lat: 43.14777199136114,
        lon: -72.16831590276607
      }
    ],
    cu$: 6900,
    land$: 38100,
    owner: 'HOOPER, STEPHEN ERIK',
    taxed$: 156300,
    usage: '110',
    use: 'R1'
  },
  '14-476': {
    address: 'RUSSELL MILLPOND RD',
    area: 9.6,
    building$: 0,
    centers: [
      {
        lat: 43.14743190559371,
        lon: -72.15962951701543
      }
    ],
    cu$: 0,
    land$: 3020,
    owner: 'CROSS, THOMAS E',
    taxed$: 3020,
    usage: '110',
    use: 'R1'
  },
  '14-477': {
    address: '180 ASHUELOT POND',
    area: 0.3,
    building$: 0,
    centers: [
      {
        lat: 43.14668539056088,
        lon: -72.14480329131219
      }
    ],
    cu$: 2500,
    land$: 60700,
    owner: 'EDGAR, MARTHA',
    taxed$: 63200,
    usage: '110',
    use: 'R1W'
  },
  '14-478': {
    address: '182 ASHUELOT POND',
    area: 0.2,
    building$: 21200,
    centers: [
      {
        lat: 43.14679560370572,
        lon: -72.1446704713339
      }
    ],
    cu$: 0,
    land$: 49400,
    owner: 'VOGT, RACHEL K',
    taxed$: 70600,
    usage: '110',
    use: 'R1W'
  },
  '14-479': {
    address: '188 ASHUELOT POND',
    area: 0.28,
    building$: 0,
    centers: [
      {
        lat: 43.14711840078046,
        lon: -72.14445878359672
      }
    ],
    cu$: 0,
    land$: 60600,
    owner: 'EDGAR, MARTHA',
    taxed$: 60600,
    usage: '110',
    use: 'R1W'
  },
  '14-480': {
    address: '196 ASHUELOT POND',
    area: 0.3,
    building$: 25000,
    centers: [
      {
        lat: 43.14726523196678,
        lon: -72.14410965748465
      }
    ],
    cu$: 0,
    land$: 67000,
    owner: 'DAVIS, JOHN J',
    taxed$: 92000,
    usage: '110',
    use: 'R1W'
  },
  '14-481': {
    address: '204 ASHUELOT POND',
    area: 0.26,
    building$: 29000,
    centers: [
      {
        lat: 43.14710377028778,
        lon: -72.1434569938871
      }
    ],
    cu$: 0,
    land$: 66800,
    owner: 'MARSHALL, PAMELA J',
    taxed$: 95800,
    usage: '110',
    use: 'R1W'
  },
  '14-482': {
    address: '208 ASHUELOT POND',
    area: 0.3,
    building$: 0,
    centers: [
      {
        lat: 43.147176906897506,
        lon: -72.14306696573117
      }
    ],
    cu$: 3300,
    land$: 67000,
    owner: 'BLACK, CORY A',
    taxed$: 70300,
    usage: '110',
    use: 'R1W'
  },
  '14-483': {
    address: '214 ASHUELOT POND',
    area: 0.28,
    building$: 15900,
    centers: [
      {
        lat: 43.147222339553494,
        lon: -72.1427051790821
      }
    ],
    cu$: 0,
    land$: 60600,
    owner: 'COOKE,ZACHARY, ALAINA, JANELLE',
    taxed$: 76500,
    usage: '110',
    use: 'R1W'
  },
  '14-487': {
    address: 'GARFIELD DR',
    area: 10.6,
    building$: 0,
    centers: [
      {
        lat: 43.151156952770066,
        lon: -72.13788264669269
      }
    ],
    cu$: 0,
    land$: 481,
    owner: 'VISINSKI, JOSEPH F',
    taxed$: 481,
    usage: '190',
    use: 'CUUH'
  },
  '14-488': {
    address: 'MARLOW RD',
    area: 16.18,
    building$: 0,
    centers: [
      {
        lat: 43.15527764662641,
        lon: -72.15960667316436
      }
    ],
    cu$: 0,
    land$: 2143,
    owner: 'LANG, TIMOTHY D. & ELAINE M. R',
    taxed$: 2143,
    usage: '190',
    use: 'CUUW'
  },
  '14-488-01': {
    address: 'MARLOW RD',
    area: 2,
    building$: 0,
    centers: [
      {
        lat: 43.152317449637735,
        lon: -72.16157477443997
      }
    ],
    cu$: 0,
    land$: 289,
    owner: 'SANDERS, GEORGE',
    taxed$: 289,
    usage: '110',
    use: 'R1A'
  },
  '14-489': {
    address: '138 MARLOW RD',
    area: 9.4,
    building$: 139500,
    centers: [
      {
        lat: 43.14830538608576,
        lon: -72.1696800531962
      }
    ],
    cu$: 15100,
    land$: 34088,
    owner: 'IDE, MARK J',
    taxed$: 188688,
    usage: '110',
    use: 'R1'
  },
  '15-30': {
    address: 'VALLEY RD',
    area: 7.2,
    building$: 0,
    centers: [
      {
        lat: 43.153834730708375,
        lon: -72.10396329332498
      }
    ],
    cu$: 0,
    land$: 26400,
    owner: 'SABINE, ROBIN',
    taxed$: 26400,
    usage: '110',
    use: 'R1'
  },
  '14-490': {
    address: '14 PENINSULA DR',
    area: 0.81,
    building$: 0,
    centers: [
      {
        lat: 43.16041677093596,
        lon: -72.15123807913521
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'L A E ASSOCIATION',
    taxed$: 0,
    usage: '260',
    use: 'CI'
  },
  '14-491': {
    address: 'MARLOW RD',
    area: 8.9,
    building$: 0,
    centers: [
      {
        lat: 43.148376926546035,
        lon: -72.17120731343404
      }
    ],
    cu$: 0,
    land$: 587,
    owner: 'IDE, MARK J',
    taxed$: 587,
    usage: '190',
    use: 'CUUH'
  },
  '14-495': {
    address: '2 MARLOW RD',
    area: 55.7,
    building$: 34900,
    centers: [
      {
        lat: 43.14600780684822,
        lon: -72.17194177390843
      }
    ],
    cu$: 1900,
    land$: 72214,
    owner: 'MARTELLO, GRACE E',
    taxed$: 109014,
    usage: '110',
    use: 'R1W'
  },
  '14-496': {
    address: 'ASHUELOT POND',
    area: 0.4,
    building$: 0,
    centers: [
      {
        lat: 43.146904664770176,
        lon: -72.14456765805141
      }
    ],
    cu$: 0,
    land$: 81000,
    owner: 'EDGAR, MARTHA',
    taxed$: 81000,
    usage: '110',
    use: 'R1W'
  },
  '14-500': {
    address: 'ASHUELOT POND',
    area: 0.17,
    building$: 0,
    centers: [
      {
        lat: 43.148011102478705,
        lon: -72.15305141010646
      }
    ],
    cu$: 0,
    land$: 36600,
    owner: 'CROSS, THOMAS E',
    taxed$: 36600,
    usage: '110',
    use: 'R1W'
  },
  '14-501': {
    address: 'MARLOW RD',
    area: 0.4,
    building$: 0,
    centers: [
      {
        lat: 43.15087647243227,
        lon: -72.15756016618056
      }
    ],
    cu$: 0,
    land$: 132900,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 132900,
    usage: '400',
    use: 'EX-S'
  },
  '14-502': {
    address: 'MARLOW RD',
    area: 0.88,
    building$: 0,
    centers: [
      {
        lat: 43.14956031819265,
        lon: -72.17306765120152
      }
    ],
    cu$: 0,
    land$: 17900,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 17900,
    usage: '300',
    use: 'EX-M'
  },
  '14-503': {
    address: 'ASHUELOT ACRE RD',
    area: 0.12,
    building$: 0,
    centers: [
      {
        lat: 43.15285952496739,
        lon: -72.15824763586298
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'WALDRON/SANDERS/KAMIENIECKI/DL',
    taxed$: 0,
    usage: '110',
    use: 'R1W'
  },
  '14-504': {
    address: 'ASHUELOT ACRE RD',
    area: 0.14,
    building$: 0,
    centers: [
      {
        lat: 43.15341096513083,
        lon: -72.15855607509502
      }
    ],
    cu$: 0,
    land$: 76900,
    owner: 'WRIGHT, PAMELA J',
    taxed$: 76900,
    usage: '110',
    use: 'R1W'
  },
  '14-506': {
    address: 'MARLOW RD',
    area: 1.47,
    building$: 0,
    centers: [
      {
        lat: 43.150038358540236,
        lon: -72.15694579470454
      }
    ],
    cu$: 0,
    land$: 137100,
    owner: 'ASHUELOT POND DAM, VILLAGE DIS',
    taxed$: 137100,
    usage: '300',
    use: 'EX-M'
  },
  '14-507': {
    address: 'ASHUELOT POND',
    area: 0.16,
    building$: 0,
    centers: [
      {
        lat: 43.150342302930454,
        lon: -72.1573893046891
      }
    ],
    cu$: 0,
    land$: 3900,
    owner: 'JOYCE, LEILA',
    taxed$: 3900,
    usage: '110',
    use: 'R1'
  },
  '14-508': {
    address: 'MARLOW RD',
    area: 0,
    building$: 0,
    centers: [
      {
        lat: 43.15087953889399,
        lon: -72.15696736857203
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'SANDERS, GEORGE',
    taxed$: 0,
    usage: '110',
    use: 'R1'
  },
  '15-31': {
    address: 'VALLEY RD',
    area: 8,
    building$: 0,
    centers: [
      {
        lat: 43.15435492412636,
        lon: -72.10401385366154
      }
    ],
    cu$: 0,
    land$: 506,
    owner: 'CASSIDY, DONALD',
    taxed$: 506,
    usage: '190',
    use: 'CUUH'
  },
  '15-32': {
    address: 'VALLEY RD',
    area: 5.5,
    building$: 0,
    centers: [
      {
        lat: 43.1551536314134,
        lon: -72.10308552756966
      }
    ],
    cu$: 0,
    land$: 348,
    owner: 'CASSIDY, DONALD',
    taxed$: 348,
    usage: '190',
    use: 'CUUH'
  },
  '15-41': {
    address: 'FAXON HILL RD',
    area: 21.2,
    building$: 0,
    centers: [
      {
        lat: 43.16500565547415,
        lon: -72.10776727741954
      }
    ],
    cu$: 0,
    land$: 1377,
    owner: 'BALL, DAVID REV TRUST',
    taxed$: 1377,
    usage: '190',
    use: 'CUUH'
  },
  '15-42': {
    address: 'FAXON HILL RD',
    area: 269,
    building$: 0,
    centers: [
      {
        lat: 43.15687079712212,
        lon: -72.11146960920378
      }
    ],
    cu$: 0,
    land$: 11035,
    owner: 'NEW ENGLAND FORESTRY FNDTN',
    taxed$: 11035,
    usage: '190',
    use: 'CUMW'
  },
  '15-43': {
    address: '719 FAXON HILL RD',
    area: 9.9,
    building$: 0,
    centers: [
      {
        lat: 43.16235916519231,
        lon: -72.1147102184143
      }
    ],
    cu$: 0,
    land$: 45800,
    owner: 'DESCLOS, JAMES C',
    taxed$: 45800,
    usage: '110',
    use: 'R1'
  },
  '15-44': {
    address: '773 FAXON HILL RD',
    area: 6.9,
    building$: 0,
    centers: [
      {
        lat: 43.16170877421348,
        lon: -72.11611841683334
      }
    ],
    cu$: 7900,
    land$: 39100,
    owner: 'LAWSON, CAROLYN MORITZ',
    taxed$: 47000,
    usage: '110',
    use: 'R1'
  },
  '15-45': {
    address: 'FAXON HILL RD',
    area: 6,
    building$: 0,
    centers: [
      {
        lat: 43.16129579056881,
        lon: -72.11729575067399
      }
    ],
    cu$: 0,
    land$: 37700,
    owner: 'ROBINSON III, CLARK S REV TRUS',
    taxed$: 37700,
    usage: '110',
    use: 'R1'
  },
  '15-46': {
    address: '861 FAXON HILL RD',
    area: 11,
    building$: 46400,
    centers: [
      {
        lat: 43.160403921454986,
        lon: -72.11835809054588
      }
    ],
    cu$: 2100,
    land$: 56800,
    owner: 'ABREU, SHARON ROBINSON',
    taxed$: 105300,
    usage: '110',
    use: 'R1'
  },
  '15-47': {
    address: '889 FAXON HILL RD',
    area: 5,
    building$: 53700,
    centers: [
      {
        lat: 43.16009258207014,
        lon: -72.1196032922351
      }
    ],
    cu$: 0,
    land$: 51000,
    owner: 'KENDRICK, TIMOTHY',
    taxed$: 104700,
    usage: '110',
    use: 'R1'
  },
  '15-48-01': {
    address: 'FAXON HILL RD',
    area: 11.85,
    building$: 0,
    centers: [
      {
        lat: 43.158733091099485,
        lon: -72.11957838421831
      }
    ],
    cu$: 0,
    land$: 836,
    owner: 'CRANDALL, JAMES L REV TR',
    taxed$: 836,
    usage: '190',
    use: 'CUUH'
  },
  '15-50': {
    address: 'FAXON HILL RD',
    area: 12.8,
    building$: 0,
    centers: [
      {
        lat: 43.15682279754799,
        lon: -72.1234652110055
      }
    ],
    cu$: 0,
    land$: 34800,
    owner: 'LEE, GING TOY',
    taxed$: 34800,
    usage: '110',
    use: 'R1'
  },
  '15-51': {
    address: 'KING ST',
    area: 180,
    building$: 0,
    centers: [
      {
        lat: 43.14876411873748,
        lon: -72.11740901470507
      }
    ],
    cu$: 0,
    land$: 7824,
    owner: 'MACDONALD, LEANDRA ANN',
    taxed$: 7824,
    usage: '190',
    use: 'CUUH'
  },
  '15-52': {
    address: '333 KING ST',
    area: 36,
    building$: 51900,
    centers: [
      {
        lat: 43.14870465348538,
        lon: -72.12447120395935
      }
    ],
    cu$: 900,
    land$: 27461,
    owner: 'ALLISON, JAMES W',
    taxed$: 80261,
    usage: '110',
    use: 'R1'
  },
  '15-53': {
    address: '413 KING ST',
    area: 1.08,
    building$: 47200,
    centers: [
      {
        lat: 43.14675113906575,
        lon: -72.12723956066779
      }
    ],
    cu$: 600,
    land$: 29200,
    owner: 'SACCO, JAMES, ROBERT& JOHN',
    taxed$: 77000,
    usage: '110',
    use: 'R1'
  },
  '15-54': {
    address: '436 KING ST',
    area: 150.10414,
    building$: 94000,
    centers: [
      {
        lat: 43.14689218323553,
        lon: -72.13640256563606
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'SLAVES OF THE IMMACULATE HEART',
    taxed$: 94000,
    usage: '260',
    use: 'CI'
  },
  '15-55': {
    address: 'KING ST',
    area: 60.4,
    building$: 0,
    centers: [
      {
        lat: 43.15018946009104,
        lon: -72.13038461219955
      }
    ],
    cu$: 0,
    land$: 2021,
    owner: 'SLAVES OF THE IMMACULATE HEART',
    taxed$: 2021,
    usage: '190',
    use: 'CUUH'
  },
  '15-56': {
    address: 'FAXON HILL RD',
    area: 36,
    building$: 0,
    centers: [
      {
        lat: 43.15469438353737,
        lon: -72.12779507416514
      }
    ],
    cu$: 0,
    land$: 21475,
    owner: 'ZERJAV, JOHN',
    taxed$: 21475,
    usage: '110',
    use: 'R1'
  },
  '15-61': {
    address: '114 OLD HAYING RD',
    area: 0.61,
    building$: 91200,
    centers: [
      {
        lat: 43.163455062727586,
        lon: -72.12455666413695
      }
    ],
    cu$: 11800,
    land$: 187800,
    owner: 'KASER, AMY CRANDALL',
    taxed$: 290800,
    usage: '110',
    use: 'R1W'
  },
  '15-62': {
    address: 'OLD HAYING RD',
    area: 5.6,
    building$: 0,
    centers: [
      {
        lat: 43.16181992302901,
        lon: -72.12299361014077
      }
    ],
    cu$: 0,
    land$: 370,
    owner: 'CRANDALL, JAMES L REV TR',
    taxed$: 370,
    usage: '190',
    use: 'CUUH'
  },
  '15-64': {
    address: '15 OLD HAYING RD',
    area: 6,
    building$: 181800,
    centers: [
      {
        lat: 43.161889161679646,
        lon: -72.12226198277283
      }
    ],
    cu$: 5300,
    land$: 181600,
    owner: 'COLLINS, EDWARD A',
    taxed$: 368700,
    usage: '110',
    use: 'R1W'
  },
  '15-65': {
    address: 'PINE POINT RD',
    area: 15.5,
    building$: 0,
    centers: [
      {
        lat: 43.163277200187366,
        lon: -72.12146373315628
      }
    ],
    cu$: 0,
    land$: 1244,
    owner: 'PARKER, KENNETH R - WILL OF',
    taxed$: 1244,
    usage: '190',
    use: 'CUUW'
  },
  '15-66': {
    address: '152 PINE POINT RD',
    area: 2.1,
    building$: 93600,
    centers: [
      {
        lat: 43.164811019172866,
        lon: -72.12175585088674
      }
    ],
    cu$: 11400,
    land$: 267205,
    owner: 'PARKER, KENNETH R - WILL OF',
    taxed$: 372205,
    usage: '110',
    use: 'R1W'
  },
  '15-67': {
    address: '140 PINE POINT RD',
    area: 2.1,
    building$: 128800,
    centers: [
      {
        lat: 43.1645219748779,
        lon: -72.12105124864054
      }
    ],
    cu$: 3000,
    land$: 190500,
    owner: 'RODBELL, KENNETH P & KATHLEEN',
    taxed$: 322300,
    usage: '110',
    use: 'R1W'
  },
  '15-68': {
    address: 'PINE POINT RD',
    area: 3.2,
    building$: 0,
    centers: [
      {
        lat: 43.16462700654179,
        lon: -72.12030395557825
      }
    ],
    cu$: 0,
    land$: 260,
    owner: 'PARKER, KENNETH R - WILL OF',
    taxed$: 260,
    usage: '190',
    use: 'CUUW'
  },
  '15-70': {
    address: '758 FAXON HILL RD',
    area: 28.58,
    building$: 105400,
    centers: [
      {
        lat: 43.16497018981293,
        lon: -72.11734045767864
      }
    ],
    cu$: 12400,
    land$: 199807,
    owner: 'DOUGLAS FAMILY REALTY TRUST',
    taxed$: 317607,
    usage: '110',
    use: 'R1W'
  },
  '15-71': {
    address: 'FAXON HILL RD',
    area: 4.54,
    building$: 0,
    centers: [
      {
        lat: 43.162701536557506,
        lon: -72.11883360624847
      }
    ],
    cu$: 0,
    land$: 388,
    owner: 'PARKER, KENNETH R - WILL OF',
    taxed$: 388,
    usage: '190',
    use: 'CUUW'
  },
  '15-72': {
    address: '19 PINE POINT RD',
    area: 3.51,
    building$: 80200,
    centers: [
      {
        lat: 43.162108918904515,
        lon: -72.12005512125342
      }
    ],
    cu$: 4700,
    land$: 39800,
    owner: 'PON, MICHAEL T',
    taxed$: 124700,
    usage: '110',
    use: 'R1'
  },
  '15-73': {
    address: 'FAXON HILL RD',
    area: 3.24,
    building$: 0,
    centers: [
      {
        lat: 43.161505202074565,
        lon: -72.12101584724027
      }
    ],
    cu$: 0,
    land$: 278,
    owner: 'PARKER, KENNETH R - WILL OF',
    taxed$: 278,
    usage: '190',
    use: 'CUUW'
  },
  '15-74': {
    address: '739 MILLEN POND RD',
    area: 0.85,
    building$: 98900,
    centers: [
      {
        lat: 43.16801243993024,
        lon: -72.12405411250451
      }
    ],
    cu$: 3300,
    land$: 222500,
    owner: 'POWELL, ANNE G',
    taxed$: 324700,
    usage: '110',
    use: 'R1W'
  },
  '15-75': {
    address: 'MILLEN POND RD',
    area: 0.01,
    building$: 0,
    centers: [
      {
        lat: 43.16753754035241,
        lon: -72.12527670290078
      }
    ],
    cu$: 0,
    land$: 41500,
    owner: 'CALLENDER, TIMOTHY W',
    taxed$: 41500,
    usage: '110',
    use: 'R1W'
  },
  '15-76': {
    address: '791 MILLEN POND RD',
    area: 0.062,
    building$: 0,
    centers: [
      {
        lat: 43.16733652325102,
        lon: -72.12555075995093
      }
    ],
    cu$: 2900,
    land$: 67100,
    owner: 'MACDONALD, LEANDRA ANN',
    taxed$: 70000,
    usage: '110',
    use: 'R1W'
  },
  '15-77': {
    address: 'MILLEN POND RD',
    area: 0.1,
    building$: 0,
    centers: [
      {
        lat: 43.16602560990099,
        lon: -72.12652362552845
      }
    ],
    cu$: 0,
    land$: 68000,
    owner: 'MUGAR, CAROLYN J',
    taxed$: 68000,
    usage: '110',
    use: 'R1W'
  },
  '15-82-01': {
    address: 'MILLEN POND RD',
    area: 0.009,
    building$: 0,
    centers: [
      {
        lat: 43.16442608170874,
        lon: -72.12700633352316
      }
    ],
    cu$: 0,
    land$: 10500,
    owner: 'ANDERSON, PETER K',
    taxed$: 10500,
    usage: '110',
    use: 'R1W'
  },
  '15-83': {
    address: 'MILLEN POND RD',
    area: 0.03,
    building$: 0,
    centers: [
      {
        lat: 43.16437924994153,
        lon: -72.12700723593346
      }
    ],
    cu$: 0,
    land$: 27500,
    owner: 'SMITH, WILLIAM T',
    taxed$: 27500,
    usage: '110',
    use: 'R1W'
  },
  '15-87': {
    address: 'MILLEN POND RD',
    area: 3.2,
    building$: 0,
    centers: [
      {
        lat: 43.1625309174522,
        lon: -72.12700982674914
      }
    ],
    cu$: 0,
    land$: 105546,
    owner: 'BRIGHTON FAMILY TRUST',
    taxed$: 105546,
    usage: '110',
    use: 'R1W'
  },
  '15-88-01': {
    address: 'MILLEN POND RD',
    area: 0.06,
    building$: 0,
    centers: [
      {
        lat: 43.16185203222857,
        lon: -72.1267937501235
      }
    ],
    cu$: 0,
    land$: 46600,
    owner: 'BOHNENBERGER REV TRUST',
    taxed$: 46600,
    usage: '110',
    use: 'R1W'
  },
  '15-88-02': {
    address: 'MILLEN POND RD',
    area: 0.05,
    building$: 0,
    centers: [
      {
        lat: 43.161952070010955,
        lon: -72.12682408058693
      }
    ],
    cu$: 0,
    land$: 17,
    owner: 'BRIGHTON FAMILY TRUST',
    taxed$: 17,
    usage: '110',
    use: 'R1W'
  },
  '15-88-03': {
    address: 'MILLEN POND RD',
    area: 0.05,
    building$: 0,
    centers: [
      {
        lat: 43.162062997463465,
        lon: -72.12686394319209
      }
    ],
    cu$: 0,
    land$: 46400,
    owner: 'BOHNENBERGER, S & GILFEATHER,',
    taxed$: 46400,
    usage: '110',
    use: 'R1W'
  },
  '15-96': {
    address: 'FAXON HILL RD',
    area: 9,
    building$: 0,
    centers: [
      {
        lat: 43.15933584035366,
        lon: -72.12905919525114
      }
    ],
    cu$: 0,
    land$: 315,
    owner: 'ZERJAV, JOHN',
    taxed$: 315,
    usage: '190',
    use: 'CUUO'
  },
  '16-20': {
    address: 'OAK TERR',
    area: 1.45,
    building$: 0,
    centers: [
      {
        lat: 43.14783631041625,
        lon: -72.08589452929621
      }
    ],
    cu$: 0,
    land$: 16500,
    owner: 'HARRINGTON, DENNIS',
    taxed$: 16500,
    usage: '110',
    use: 'R1A'
  },
  '15-98': {
    address: 'PRESIDENTIAL DR',
    area: 48,
    building$: 0,
    centers: [
      {
        lat: 43.15477206346781,
        lon: -72.1334959059169
      }
    ],
    cu$: 0,
    land$: 1728,
    owner: 'ZERJAV, JOHN',
    taxed$: 1728,
    usage: '190',
    use: 'CUUO'
  },
  '15-101': {
    address: 'PRESIDENTIAL DR',
    area: 4.32,
    building$: 0,
    centers: [
      {
        lat: 43.160823218927746,
        lon: -72.12959911378587
      }
    ],
    cu$: 0,
    land$: 24800,
    owner: 'BRIGHTON, JOHN M.',
    taxed$: 24800,
    usage: '110',
    use: 'R1A'
  },
  '15-102': {
    address: '1004 MILLEN POND RD',
    area: 0.41,
    building$: 39600,
    centers: [
      {
        lat: 43.16178178457157,
        lon: -72.12838715237142
      }
    ],
    cu$: 0,
    land$: 34800,
    owner: 'BOHNENBERGER REV TRUST',
    taxed$: 74400,
    usage: '110',
    use: 'R1'
  },
  '15-103': {
    address: '1002 MILLEN POND RD',
    area: 0.47,
    building$: 37400,
    centers: [
      {
        lat: 43.161818511748585,
        lon: -72.1280505804278
      }
    ],
    cu$: 1900,
    land$: 35300,
    owner: 'BOHNENBERGER, S & GILFEATHER,',
    taxed$: 74600,
    usage: '110',
    use: 'R1'
  },
  '15-108': {
    address: 'MILLEN POND RD',
    area: 0.37,
    building$: 0,
    centers: [
      {
        lat: 43.16551215070393,
        lon: -72.1272741226055
      }
    ],
    cu$: 0,
    land$: 27200,
    owner: 'JASSEN, DARYL J & TURNER, J C ',
    taxed$: 27200,
    usage: '110',
    use: 'R1'
  },
  '15-111-01': {
    address: 'MILLEN POND RD',
    area: 0.013,
    building$: 0,
    centers: [
      {
        lat: 43.16663169417991,
        lon: -72.12622082920177
      }
    ],
    cu$: 900,
    land$: 45700,
    owner: 'SHANNON FAMILY TRUST',
    taxed$: 46600,
    usage: '110',
    use: 'R1W'
  },
  '15-137': {
    address: 'ADAMS DR',
    area: 1.6,
    building$: 0,
    centers: [
      {
        lat: 43.15338344859552,
        lon: -72.13549935797589
      }
    ],
    cu$: 0,
    land$: 9300,
    owner: 'MATHIEU, MICHAEL G',
    taxed$: 9300,
    usage: '110',
    use: 'R1A'
  },
  '15-143': {
    address: 'ADAMS DR',
    area: 1.9,
    building$: 0,
    centers: [
      {
        lat: 43.1508051705551,
        lon: -72.13620693249771
      }
    ],
    cu$: 0,
    land$: 11700,
    owner: 'VISINSKI, ANDREW',
    taxed$: 11700,
    usage: '110',
    use: 'R1A'
  },
  '15-157': {
    address: 'KING ST',
    area: 18.3,
    building$: 0,
    centers: [
      {
        lat: 43.15390201139736,
        lon: -72.12234110725817
      }
    ],
    cu$: 0,
    land$: 44000,
    owner: 'ARECCO, KATHERINE',
    taxed$: 44000,
    usage: '110',
    use: 'R1'
  },
  '15-159': {
    address: '177 KING ST',
    area: 10.2,
    building$: 0,
    centers: [
      {
        lat: 43.15221815817848,
        lon: -72.12422476897105
      }
    ],
    cu$: 3800,
    land$: 18425,
    owner: 'HUNT, RANDALL E',
    taxed$: 22225,
    usage: '110',
    use: 'R1'
  },
  '15-160': {
    address: 'KING ST',
    area: 8.9,
    building$: 0,
    centers: [
      {
        lat: 43.15140259124875,
        lon: -72.12499674676566
      }
    ],
    cu$: 0,
    land$: 651,
    owner: 'HUNT, RANDALL E',
    taxed$: 651,
    usage: '190',
    use: 'CUUW'
  },
  '15-161': {
    address: 'KING ST',
    area: 17.7,
    building$: 0,
    centers: [
      {
        lat: 43.1549128376883,
        lon: -72.12173550891964
      }
    ],
    cu$: 0,
    land$: 43200,
    owner: 'MOY, HOMER',
    taxed$: 43200,
    usage: '110',
    use: 'R1'
  },
  '15-163': {
    address: '116 OLD HAYING RD',
    area: 0.56,
    building$: 28400,
    centers: [
      {
        lat: 43.163117530552,
        lon: -72.12388557682851
      }
    ],
    cu$: 0,
    land$: 190900,
    owner: 'VOSS, SUSAN E',
    taxed$: 219300,
    usage: '110',
    use: 'R1W'
  },
  '15-164': {
    address: 'FAXON HILL RD',
    area: 18.3,
    building$: 0,
    centers: [
      {
        lat: 43.16370628935127,
        lon: -72.10848294959443
      }
    ],
    cu$: 0,
    land$: 1644,
    owner: 'BALL, KIMBALL',
    taxed$: 1644,
    usage: '190',
    use: 'CUUW'
  },
  '15-165': {
    address: 'FAXON HILL RD',
    area: 16.9,
    building$: 0,
    centers: [
      {
        lat: 43.163333975845255,
        lon: -72.1103687402678
      }
    ],
    cu$: 0,
    land$: 1386,
    owner: 'BALL, MICHAEL',
    taxed$: 1386,
    usage: '190',
    use: 'CUUW'
  },
  '15-166': {
    address: 'FAXON HILL RD',
    area: 18.2,
    building$: 0,
    centers: [
      {
        lat: 43.162726554995466,
        lon: -72.11208859870582
      }
    ],
    cu$: 0,
    land$: 1706,
    owner: 'BALL, JESSICA',
    taxed$: 1706,
    usage: '110',
    use: 'R1'
  },
  '15-167': {
    address: '112 OLD HAYING RD',
    area: 0.97,
    building$: 145500,
    centers: [
      {
        lat: 43.163582692813385,
        lon: -72.12403706041316
      }
    ],
    cu$: 16400,
    land$: 199228,
    owner: 'CRANDALL, JAMES L REV TR',
    taxed$: 361128,
    usage: '110',
    use: 'R1'
  },
  '15-171': {
    address: 'MILLEN POND RD',
    area: 0.001,
    building$: 0,
    centers: [
      {
        lat: 43.16767276793806,
        lon: -72.12507265692005
      }
    ],
    cu$: 0,
    land$: 20100,
    owner: 'PACHECO, JOHN D',
    taxed$: 20100,
    usage: '110',
    use: 'R1W'
  },
  '15-172': {
    address: 'MILLEN POND RD',
    area: 0.003,
    building$: 0,
    centers: [
      {
        lat: 43.167781637438814,
        lon: -72.12487554115305
      }
    ],
    cu$: 0,
    land$: 20200,
    owner: 'PACHECO, JOHN D',
    taxed$: 20200,
    usage: '110',
    use: 'R1W'
  },
  '15-173': {
    address: 'MILLEN POND RD',
    area: 0.011,
    building$: 0,
    centers: [
      {
        lat: 43.167856081431886,
        lon: -72.12470023871472
      }
    ],
    cu$: 0,
    land$: 20600,
    owner: 'KAVANAGH, JUDITH ANN BROCKWAY',
    taxed$: 20600,
    usage: '110',
    use: 'R1W'
  },
  '16-2': {
    address: '504 SO MAIN ST',
    area: 89.2,
    building$: 200200,
    centers: [
      {
        lat: 43.16239539191888,
        lon: -72.08865633728969
      }
    ],
    cu$: 10900,
    land$: 40800,
    owner: 'ATKINS, SHAWN L',
    taxed$: 251900,
    usage: '110',
    use: 'R1'
  },
  '16-21': {
    address: 'MAPLE WAY',
    area: 1.28,
    building$: 0,
    centers: [
      {
        lat: 43.14796121926369,
        lon: -72.0865864560958
      }
    ],
    cu$: 0,
    land$: 16400,
    owner: 'BADEHAUSEN, JOHN P',
    taxed$: 16400,
    usage: '110',
    use: 'R1A'
  },
  '16-22': {
    address: 'MAPLE WAY',
    area: 0.71,
    building$: 0,
    centers: [
      {
        lat: 43.14750675653249,
        lon: -72.08706187289769
      }
    ],
    cu$: 0,
    land$: 15500,
    owner: 'SARAFIAN, EDWARD GERALD',
    taxed$: 15500,
    usage: '110',
    use: 'R1A'
  },
  '16-3': {
    address: '800 SO MAIN ST',
    area: 196,
    building$: 0,
    centers: [
      {
        lat: 43.158431644912646,
        lon: -72.08544592999817
      }
    ],
    cu$: 7400,
    land$: 37808,
    owner: 'FONTAINE, LOUISE',
    taxed$: 45208,
    usage: '110',
    use: 'R1'
  },
  '16-24': {
    address: 'MAPLE WAY',
    area: 0.69,
    building$: 0,
    centers: [
      {
        lat: 43.14759705295473,
        lon: -72.08803339552254
      }
    ],
    cu$: 0,
    land$: 19300,
    owner: 'JANELLE, DAVID J',
    taxed$: 19300,
    usage: '110',
    use: 'R1A'
  },
  '16-6': {
    address: 'SO MAIN ST',
    area: 43.53,
    building$: 0,
    centers: [
      {
        lat: 43.155565040402436,
        lon: -72.08247324437801
      }
    ],
    cu$: 0,
    land$: 2105,
    owner: 'PIECZARKA FAMILY TRUST',
    taxed$: 2105,
    usage: '190',
    use: 'CUUW'
  },
  '16-7-04': {
    address: '175 HIGHLAND HAVEN RD',
    area: 11.5,
    building$: 0,
    centers: [
      {
        lat: 43.15429171837607,
        lon: -72.08006822534543
      }
    ],
    cu$: 0,
    land$: 492,
    owner: 'J & L REALTY TRUST',
    taxed$: 492,
    usage: '190',
    use: 'CUUO'
  },
  '16-7-05': {
    address: 'HIGHLAND HAVEN RD',
    area: 4.32,
    building$: 0,
    centers: [
      {
        lat: 43.15015028949329,
        lon: -72.08189695566864
      }
    ],
    cu$: 0,
    land$: 193,
    owner: 'J & L REALTY TRUST',
    taxed$: 193,
    usage: '190',
    use: 'CUUO'
  },
  '16-26': {
    address: 'HIGHLAND HAVEN RD',
    area: 0.69,
    building$: 0,
    centers: [
      {
        lat: 43.14781804200871,
        lon: -72.08818969069081
      }
    ],
    cu$: 0,
    land$: 15500,
    owner: 'LUCAS, JOSEPH A',
    taxed$: 15500,
    usage: '110',
    use: 'R1A'
  },
  '16-30': {
    address: 'HIGHLAND HAVEN RD',
    area: 0.63,
    building$: 0,
    centers: [
      {
        lat: 43.14868949970258,
        lon: -72.08781590046297
      }
    ],
    cu$: 0,
    land$: 20700,
    owner: 'WERNER,  ANGELA M',
    taxed$: 20700,
    usage: '110',
    use: 'R1A'
  },
  '16-32': {
    address: 'MAPLE WAY',
    area: 0.72,
    building$: 0,
    centers: [
      {
        lat: 43.14823377146552,
        lon: -72.08700439865336
      }
    ],
    cu$: 0,
    land$: 15500,
    owner: 'FLETCHER, EDWARD THOMAS',
    taxed$: 15500,
    usage: '110',
    use: 'R1A'
  },
  '16-46': {
    address: 'HIGHLAND HAVEN RD',
    area: 2.27,
    building$: 0,
    centers: [
      {
        lat: 43.149217762696054,
        lon: -72.08898214969831
      }
    ],
    cu$: 2700,
    land$: 17000,
    owner: 'DUGAN, EDWARD M',
    taxed$: 19700,
    usage: '110',
    use: 'R1A'
  },
  '16-48': {
    address: 'SO MAIN ST',
    area: 57,
    building$: 0,
    centers: [
      {
        lat: 43.15251503013297,
        lon: -72.07877497238613
      }
    ],
    cu$: 0,
    land$: 3762,
    owner: 'J & L REALTY TRUST',
    taxed$: 3762,
    usage: '190',
    use: 'CUUH'
  },
  '16-57': {
    address: 'SO MAIN ST',
    area: 50,
    building$: 0,
    centers: [
      {
        lat: 43.14975048072866,
        lon: -72.06021577195746
      }
    ],
    cu$: 0,
    land$: 2707,
    owner: 'MACDONALD, LEANDRA ANN',
    taxed$: 2707,
    usage: '190',
    use: 'CUUH'
  },
  '16-49-01': {
    address: '1074 SO MAIN ST',
    area: 121.97,
    building$: 0,
    centers: [
      {
        lat: 43.149962403169425,
        lon: -72.07430278908821
      }
    ],
    cu$: 0,
    land$: 7876,
    owner: 'LAFFERTY, ANDREW M.',
    taxed$: 7876,
    usage: '190',
    use: 'CUUH'
  },
  '16-51': {
    address: '1258 SO MAIN ST',
    area: 8.09243,
    building$: 0,
    centers: [
      {
        lat: 43.14945548255581,
        lon: -72.06836780027709
      }
    ],
    cu$: 2400,
    land$: 0,
    owner: 'HUNT II, CHARLES M',
    taxed$: 2400,
    usage: '110',
    use: 'R1'
  },
  '16-51-01': {
    address: 'SO MAIN ST',
    area: 6,
    building$: 0,
    centers: [
      {
        lat: 43.14889700538285,
        lon: -72.06682463971549
      }
    ],
    cu$: 0,
    land$: 2091,
    owner: 'HUNT II, CHARLES M',
    taxed$: 2091,
    usage: '190',
    use: 'CUFL'
  },
  '16-51-02': {
    address: '1251 SO MAIN ST',
    area: 55.7,
    building$: 0,
    centers: [
      {
        lat: 43.15347775278536,
        lon: -72.06483696043104
      }
    ],
    cu$: 12300,
    land$: 8781,
    owner: 'HUNT II, CHARLES M',
    taxed$: 21081,
    usage: '110',
    use: 'R1'
  },
  '16-53': {
    address: '79 BAILEY RD',
    area: 1.75,
    building$: 49700,
    centers: [
      {
        lat: 43.147874173493605,
        lon: -72.06729258110384
      }
    ],
    cu$: 8500,
    land$: 33300,
    owner: 'STECZKOWSKI, KAMIL',
    taxed$: 91500,
    usage: '110',
    use: 'R1'
  },
  '16-54': {
    address: 'BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.14687788475794,
        lon: -72.06843176015266
      }
    ],
    cu$: 0,
    land$: 66,
    owner: 'DALTO, PATRICIA A',
    taxed$: 66,
    usage: '190',
    use: 'CUUH'
  },
  '16-56': {
    address: '2 DOLE SCHOOL HOUSE RD',
    area: 0.75,
    building$: 0,
    centers: [
      {
        lat: 43.14712303677216,
        lon: -72.056013766766
      }
    ],
    cu$: 0,
    land$: 21100,
    owner: 'RAIMONDI, CARL F JR',
    taxed$: 21100,
    usage: '110',
    use: 'R1'
  },
  '16-60': {
    address: '1399 SO MAIN ST',
    area: 0.3,
    building$: 8400,
    centers: [
      {
        lat: 43.149101740772636,
        lon: -72.06304515308031
      }
    ],
    cu$: 0,
    land$: 32000,
    owner: 'HEALEY, DANIEL L.',
    taxed$: 40400,
    usage: '110',
    use: 'R1'
  },
  '16-61-02': {
    address: '1693 SO MAIN ST',
    area: 201.82133,
    building$: 49500,
    centers: [
      {
        lat: 43.152549048720886,
        lon: -72.05564054358007
      }
    ],
    cu$: 13900,
    land$: 0,
    owner: 'DAKOWICZ, JANUSZ & DIANNE W',
    taxed$: 63400,
    usage: '110',
    use: 'R1'
  },
  '16-62': {
    address: 'SO MAIN ST',
    area: 10,
    building$: 0,
    centers: [
      {
        lat: 43.156491455348416,
        lon: -72.05211819409031
      }
    ],
    cu$: 0,
    land$: 14400,
    owner: 'WASHINGTON, TOWN OF - TC DEED',
    taxed$: 14400,
    usage: '300',
    use: 'EX-M'
  },
  '16-63': {
    address: 'SO MAIN ST',
    area: 50,
    building$: 0,
    centers: [
      {
        lat: 43.15889209579828,
        lon: -72.05379322520847
      }
    ],
    cu$: 0,
    land$: 3774,
    owner: 'RUSSO JR, JOSEPH',
    taxed$: 3774,
    usage: '190',
    use: 'CUUW'
  },
  '16-64': {
    address: 'E WASHINGTON RD',
    area: 19.7,
    building$: 0,
    centers: [
      {
        lat: 43.1625849537646,
        lon: -72.05172182393939
      }
    ],
    cu$: 0,
    land$: 973,
    owner: 'BAILEY, GERALD G',
    taxed$: 973,
    usage: '190',
    use: 'CUUH'
  },
  '16-70-12': {
    address: 'SO MAIN ST',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.165300058617994,
        lon: -72.0820667675437
      }
    ],
    cu$: 0,
    land$: 175,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 175,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-06': {
    address: 'SO MAIN ST',
    area: 16.8,
    building$: 0,
    centers: [
      {
        lat: 43.161603938194986,
        lon: -72.07812414431844
      }
    ],
    cu$: 0,
    land$: 594,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 594,
    usage: '190',
    use: 'CUUO'
  },
  '16-67': {
    address: 'E WASHINGTON RD',
    area: 51,
    building$: 0,
    centers: [
      {
        lat: 43.16085219118203,
        lon: -72.05543190133677
      }
    ],
    cu$: 0,
    land$: 2995,
    owner: 'BAILEY, GERALD G',
    taxed$: 2995,
    usage: '190',
    use: 'CUUH'
  },
  '16-68': {
    address: '4003 E WASHINGTON RD',
    area: 3.3,
    building$: 0,
    centers: [
      {
        lat: 43.16289754585537,
        lon: -72.05628413422767
      }
    ],
    cu$: 0,
    land$: 26400,
    owner: 'BASTARACHE, PAULETTE',
    taxed$: 26400,
    usage: '110',
    use: 'R1'
  },
  '16-69': {
    address: 'E WASHINGTON RD',
    area: 95,
    building$: 0,
    centers: [
      {
        lat: 43.16179931519101,
        lon: -72.06115215395674
      }
    ],
    cu$: 0,
    land$: 4571,
    owner: 'WRIGHT, JOHN P TRUST',
    taxed$: 4571,
    usage: '190',
    use: 'CUMW'
  },
  '16-70-01': {
    address: '963 SO MAIN ST',
    area: 28.5,
    building$: 177000,
    centers: [
      {
        lat: 43.158346449377404,
        lon: -72.07120568048913
      }
    ],
    cu$: 2100,
    land$: 91800,
    owner: 'WASHINGTON, TOWN OF - DPWH',
    taxed$: 270900,
    usage: '300',
    use: 'EX-M'
  },
  '16-70-02': {
    address: '961 SO MAIN ST',
    area: 21.5,
    building$: 0,
    centers: [
      {
        lat: 43.15887504966097,
        lon: -72.07340364459745
      }
    ],
    cu$: 4600,
    land$: 91100,
    owner: 'WASHINGTON, TOWN OF - TRANS ST',
    taxed$: 95700,
    usage: '300',
    use: 'EX-M'
  },
  '16-70-03': {
    address: 'SO MAIN ST',
    area: 13.3,
    building$: 0,
    centers: [
      {
        lat: 43.15952107288893,
        lon: -72.07467983914597
      }
    ],
    cu$: 0,
    land$: 466,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 466,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-04': {
    address: 'SO MAIN ST',
    area: 22.5,
    building$: 0,
    centers: [
      {
        lat: 43.160211169604786,
        lon: -72.07596630580517
      }
    ],
    cu$: 0,
    land$: 787,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 787,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-05': {
    address: 'SO MAIN ST',
    area: 12.9,
    building$: 0,
    centers: [
      {
        lat: 43.160887957754476,
        lon: -72.07716824263728
      }
    ],
    cu$: 0,
    land$: 451,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 451,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-07': {
    address: 'SO MAIN ST',
    area: 16.3,
    building$: 0,
    centers: [
      {
        lat: 43.162512384639435,
        lon: -72.07886084685954
      }
    ],
    cu$: 0,
    land$: 565,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 565,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-08': {
    address: 'SO MAIN ST',
    area: 10.5,
    building$: 0,
    centers: [
      {
        lat: 43.163111699433514,
        lon: -72.08001144317836
      }
    ],
    cu$: 0,
    land$: 368,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 368,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-09': {
    address: 'SO MAIN ST',
    area: 10.5,
    building$: 0,
    centers: [
      {
        lat: 43.163815409769164,
        lon: -72.08058915637456
      }
    ],
    cu$: 0,
    land$: 368,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 368,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-10': {
    address: 'SO MAIN ST',
    area: 10.5,
    building$: 0,
    centers: [
      {
        lat: 43.16455577349002,
        lon: -72.08125139730555
      }
    ],
    cu$: 0,
    land$: 368,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 368,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-11': {
    address: 'SO MAIN ST',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.164862874301065,
        lon: -72.08354023126863
      }
    ],
    cu$: 0,
    land$: 179,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 179,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-14': {
    address: 'E WASHINGTON RD',
    area: 6.8,
    building$: 0,
    centers: [
      {
        lat: 43.16567155980744,
        lon: -72.07745478112018
      }
    ],
    cu$: 0,
    land$: 218,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 218,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-15': {
    address: 'E WASHINGTON RD',
    area: 7.2,
    building$: 0,
    centers: [
      {
        lat: 43.166290554036685,
        lon: -72.07714381616123
      }
    ],
    cu$: 0,
    land$: 232,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 232,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-17': {
    address: 'E WASHINGTON RD',
    area: 10.8,
    building$: 0,
    centers: [
      {
        lat: 43.166695822474786,
        lon: -72.0744547044831
      }
    ],
    cu$: 0,
    land$: 367,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 367,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-18': {
    address: 'E WASHINGTON RD',
    area: 5.3,
    building$: 0,
    centers: [
      {
        lat: 43.16619669930644,
        lon: -72.07308893014886
      }
    ],
    cu$: 0,
    land$: 170,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 170,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-19': {
    address: 'E WASHINGTON RD',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.16609132300675,
        lon: -72.07219918009783
      }
    ],
    cu$: 0,
    land$: 159,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 159,
    usage: '190',
    use: 'CUUO'
  },
  '16-77-09': {
    address: 'E WASHINGTON RD',
    area: 5.098,
    building$: 0,
    centers: [
      {
        lat: 43.16881402210455,
        lon: -72.08074358880013
      }
    ],
    cu$: 0,
    land$: 552,
    owner: 'BOREY, LOUIS J',
    taxed$: 552,
    usage: '190',
    use: 'CUUW'
  },
  '16-70-21': {
    address: 'E WASHINGTON RD',
    area: 7.7,
    building$: 0,
    centers: [
      {
        lat: 43.16498532039828,
        lon: -72.07120733779067
      }
    ],
    cu$: 0,
    land$: 256,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 256,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-22': {
    address: 'E WASHINGTON RD',
    area: 10,
    building$: 0,
    centers: [
      {
        lat: 43.16443761944622,
        lon: -72.07072454016799
      }
    ],
    cu$: 0,
    land$: 338,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 338,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-23': {
    address: 'E WASHINGTON RD',
    area: 19.1,
    building$: 0,
    centers: [
      {
        lat: 43.163271798848264,
        lon: -72.07057433646315
      }
    ],
    cu$: 0,
    land$: 665,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 665,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-24': {
    address: 'E WASHINGTON RD',
    area: 14.5,
    building$: 0,
    centers: [
      {
        lat: 43.16374825911991,
        lon: -72.06935285201307
      }
    ],
    cu$: 0,
    land$: 521,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 521,
    usage: '190',
    use: 'CUUO'
  },
  '16-70-25': {
    address: 'E WASHINGTON RD',
    area: 14.4,
    building$: 0,
    centers: [
      {
        lat: 43.16359936036645,
        lon: -72.06843051923008
      }
    ],
    cu$: 0,
    land$: 517,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 517,
    usage: '190',
    use: 'CUUO'
  },
  '16-95': {
    address: 'E WASHINGTON RD',
    area: 2.9,
    building$: 0,
    centers: [
      {
        lat: 43.16564455278039,
        lon: -72.0604836132094
      }
    ],
    cu$: 0,
    land$: 26000,
    owner: 'VAN LEEUWEN, JOHANNES',
    taxed$: 26000,
    usage: '110',
    use: 'R1'
  },
  '16-70-26': {
    address: 'E WASHINGTON RD',
    area: 22.1,
    building$: 0,
    centers: [
      {
        lat: 43.163409789999946,
        lon: -72.06726159955414
      }
    ],
    cu$: 0,
    land$: 774,
    owner: 'PATENAUDE FAMILY TRUST',
    taxed$: 774,
    usage: '190',
    use: 'CUUO'
  },
  '16-77-08': {
    address: 'E WASHINGTON RD',
    area: 5.32,
    building$: 0,
    centers: [
      {
        lat: 43.16880374827509,
        lon: -72.08145460439815
      }
    ],
    cu$: 0,
    land$: 576,
    owner: 'BOREY, LOUIS J',
    taxed$: 576,
    usage: '190',
    use: 'CUUW'
  },
  '16-77-10': {
    address: 'E WASHINGTON RD',
    area: 5.03,
    building$: 0,
    centers: [
      {
        lat: 43.16880864680185,
        lon: -72.08001342830558
      }
    ],
    cu$: 0,
    land$: 544,
    owner: 'BOREY, LOUIS J',
    taxed$: 544,
    usage: '190',
    use: 'CUUW'
  },
  '16-77-12': {
    address: 'E WASHINGTON RD',
    area: 5.175,
    building$: 0,
    centers: [
      {
        lat: 43.16892934101171,
        lon: -72.07813452672403
      }
    ],
    cu$: 0,
    land$: 692,
    owner: 'BOREY, LOUIS J',
    taxed$: 692,
    usage: '190',
    use: 'CUUW'
  },
  '16-87': {
    address: 'WASHINGTON DR',
    area: 3.6,
    building$: 0,
    centers: [
      {
        lat: 43.168151291660614,
        lon: -72.06141644820367
      }
    ],
    cu$: 0,
    land$: 26600,
    owner: 'KIRSCH, JOHANN C',
    taxed$: 26600,
    usage: '110',
    use: 'R1'
  },
  '16-96': {
    address: 'E WASHINGTON RD',
    area: 3,
    building$: 0,
    centers: [
      {
        lat: 43.16536851494665,
        lon: -72.06008492297926
      }
    ],
    cu$: 0,
    land$: 26100,
    owner: 'VANLEEUWEN, JOHANNES',
    taxed$: 26100,
    usage: '110',
    use: 'R1'
  },
  '16-104': {
    address: 'E WASHINGTON RD',
    area: 2.87,
    building$: 0,
    centers: [
      {
        lat: 43.16552145951517,
        lon: -72.05603605408196
      }
    ],
    cu$: 0,
    land$: 13000,
    owner: 'SEAVEY, EARL REAL ESTATE TRUST',
    taxed$: 13000,
    usage: '110',
    use: 'R1'
  },
  '16-106': {
    address: 'E WASHINGTON RD',
    area: 3,
    building$: 0,
    centers: [
      {
        lat: 43.16595406488158,
        lon: -72.05505052103501
      }
    ],
    cu$: 0,
    land$: 13100,
    owner: 'SCHREINER, HELEN',
    taxed$: 13100,
    usage: '110',
    use: 'R1'
  },
  '16-131-03': {
    address: '138 BAILEY RD',
    area: 6.11,
    building$: 102000,
    centers: [
      {
        lat: 43.146148068883,
        lon: -72.07065465864541
      }
    ],
    cu$: 0,
    land$: 45200,
    owner: 'TYLER, MICHAEL J',
    taxed$: 147200,
    usage: '110',
    use: 'R1'
  },
  '16-132': {
    address: 'SO MAIN ST',
    area: 10,
    building$: 0,
    centers: [
      {
        lat: 43.156908577392684,
        lon: -72.05470762520376
      }
    ],
    cu$: 0,
    land$: 631,
    owner: 'KELLOGG, RANDOLPH W',
    taxed$: 631,
    usage: '190',
    use: 'CUUH'
  },
  '16-133': {
    address: 'SO MAIN ST',
    area: 108,
    building$: 0,
    centers: [
      {
        lat: 43.15965585592928,
        lon: -72.06487467222759
      }
    ],
    cu$: 0,
    land$: 7195,
    owner: 'PARTYKA, STANLEY J. III',
    taxed$: 7195,
    usage: '190',
    use: 'CUUH'
  },
  '17-1': {
    address: 'E WASHINGTON RD',
    area: 100,
    building$: 0,
    centers: [
      {
        lat: 43.16679165622149,
        lon: -72.04574124816679
      }
    ],
    cu$: 0,
    land$: 4842,
    owner: 'PALUDI, DAMON TRUST',
    taxed$: 4842,
    usage: '190',
    use: 'CUMW'
  },
  '17-2': {
    address: 'KINGSBURY HILL RD',
    area: 86.2,
    building$: 0,
    centers: [
      {
        lat: 43.16627495599634,
        lon: -72.03783195136135
      }
    ],
    cu$: 0,
    land$: 7480,
    owner: 'MATA, CRISTIAN',
    taxed$: 7480,
    usage: '190',
    use: 'CUUW'
  },
  '17-3': {
    address: 'KINGSBURY HILL RD',
    area: 95,
    building$: 0,
    centers: [
      {
        lat: 43.1671538736279,
        lon: -72.0305919283218
      }
    ],
    cu$: 0,
    land$: 4332,
    owner: 'MATA, CRISTIAN',
    taxed$: 4332,
    usage: '190',
    use: 'CUMW'
  },
  '17-4': {
    address: 'E WASHINGTON RD',
    area: 50,
    building$: 0,
    centers: [
      {
        lat: 43.16087260980489,
        lon: -72.04990659341208
      }
    ],
    cu$: 0,
    land$: 2401,
    owner: 'BAILEY, GERALD G',
    taxed$: 2401,
    usage: '190',
    use: 'CUUW'
  },
  '20-13': {
    address: '62 SWEENEY RD',
    area: 0.359,
    building$: 89100,
    centers: [
      {
        lat: 43.144198852824296,
        lon: -72.0669551536745
      }
    ],
    cu$: 0,
    land$: 26000,
    owner: 'DEUSE, DANIEL',
    taxed$: 115100,
    usage: '110',
    use: 'R1'
  },
  '18-3-01': {
    address: '964 JEFTS RD',
    area: 2.5,
    building$: 22300,
    centers: [
      {
        lat: 43.1354464950402,
        lon: -72.16092837125362
      }
    ],
    cu$: 0,
    land$: 15000,
    owner: 'MURDOCK KEITH',
    taxed$: 37300,
    usage: '110',
    use: 'R1'
  },
  '17-38': {
    address: 'WILD ACRE DR',
    area: 1.122,
    building$: 0,
    centers: [
      {
        lat: 43.15306974910082,
        lon: -72.03191289203741
      },
      {
        lat: 43.15334155193479,
        lon: -72.03140130213453
      }
    ],
    cu$: 0,
    land$: 42300,
    owner: 'GANNON, MICHAEL',
    taxed$: 42300,
    usage: '110',
    use: 'R1W'
  },
  '19-7': {
    address: '44 BARDEN POND RD',
    area: 3.6,
    building$: 0,
    centers: [
      {
        lat: 43.137573603490765,
        lon: -72.10195584236942
      }
    ],
    cu$: 0,
    land$: 18600,
    owner: 'CARLSON, RICHARD A',
    taxed$: 18600,
    usage: '110',
    use: 'R1'
  },
  '17-39': {
    address: 'WILD ACRE DR',
    area: 0.3,
    building$: 0,
    centers: [
      {
        lat: 43.153933752189914,
        lon: -72.03190770037237
      }
    ],
    cu$: 0,
    land$: 55700,
    owner: 'HUOT, ERIN M',
    taxed$: 55700,
    usage: '110',
    use: 'R1W'
  },
  '17-42': {
    address: 'KINGSBURY HILL RD',
    area: 140,
    building$: 0,
    centers: [
      {
        lat: 43.15975480946221,
        lon: -72.02831351575102
      }
    ],
    cu$: 0,
    land$: 4762,
    owner: 'MATA, CRISTIAN',
    taxed$: 4762,
    usage: '190',
    use: 'CUMW'
  },
  '17-43': {
    address: 'SMITH POND RD',
    area: 2.09,
    building$: 0,
    centers: [
      {
        lat: 43.151798117652675,
        lon: -72.03720513189327
      }
    ],
    cu$: 0,
    land$: 141,
    owner: 'HAKULIN,  ANNA MARIE ANNELLI',
    taxed$: 141,
    usage: '190',
    use: 'CUUH'
  },
  '18-1': {
    address: 'JEFTS RD',
    area: 810,
    building$: 0,
    centers: [
      {
        lat: 43.13659759456952,
        lon: -72.1412316611674
      }
    ],
    cu$: 0,
    land$: 27351,
    owner: 'ANDORRA FOREST LTD PARTNERSHIP',
    taxed$: 27351,
    usage: '190',
    use: 'CUMW'
  },
  '18-3': {
    address: '926 JEFTS RD',
    area: 2.5,
    building$: 16900,
    centers: [
      {
        lat: 43.136201177739764,
        lon: -72.15933638355105
      }
    ],
    cu$: 0,
    land$: 15000,
    owner: 'MURDOCK, RICHARD W. TRUSTEE RE',
    taxed$: 31900,
    usage: '110',
    use: 'R1'
  },
  '18-11-14': {
    address: 'KAREN LN',
    area: 0.17,
    building$: 0,
    centers: [
      {
        lat: 43.145894197128946,
        lon: -72.15119729615809
      }
    ],
    cu$: 0,
    land$: 7,
    owner: 'MELOON, CHARLES HEIRS',
    taxed$: 7,
    usage: '190',
    use: 'CUUO'
  },
  '18-4': {
    address: '990 JEFTS RD',
    area: 80,
    building$: 0,
    centers: [
      {
        lat: 43.135495074718115,
        lon: -72.16473398376912
      }
    ],
    cu$: 1000,
    land$: 5120,
    owner: 'STERLING QUALITY CLEANERS, INC',
    taxed$: 6120,
    usage: '190',
    use: 'CUUW'
  },
  '18-5': {
    address: 'JEFTS RD',
    area: 23.7,
    building$: 0,
    centers: [
      {
        lat: 43.140643186813634,
        lon: -72.17453230311692
      }
    ],
    cu$: 0,
    land$: 1108,
    owner: 'MARTELLO, GRACE E',
    taxed$: 1108,
    usage: '110',
    use: 'R1W'
  },
  '18-14': {
    address: 'ASHUELOT POND',
    area: 1.5,
    building$: 0,
    centers: [
      {
        lat: 43.14669797198655,
        lon: -72.14404680652558
      }
    ],
    cu$: 0,
    land$: 49900,
    owner: 'EMERSON, DAVID J',
    taxed$: 49900,
    usage: '110',
    use: 'R1'
  },
  '18-15': {
    address: 'ASHUELOT POND',
    area: 0.82,
    building$: 0,
    centers: [
      {
        lat: 43.14597493847847,
        lon: -72.14471466156083
      }
    ],
    cu$: 0,
    land$: 46600,
    owner: 'RATHBUN, CONNIE L',
    taxed$: 46600,
    usage: '110',
    use: 'R1'
  },
  '18-6': {
    address: 'JEFTS RD',
    area: 191,
    building$: 0,
    centers: [
      {
        lat: 43.139983901941314,
        lon: -72.17028263596403
      }
    ],
    cu$: 0,
    land$: 109600,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 109600,
    usage: '501',
    use: 'EX-M'
  },
  '18-8': {
    address: 'RUSSELL MILLPOND RD',
    area: 24.5,
    building$: 0,
    centers: [
      {
        lat: 43.140036352837825,
        lon: -72.16317892381001
      }
    ],
    cu$: 0,
    land$: 1512,
    owner: 'AUDUBON SOCIETY OF NH',
    taxed$: 1512,
    usage: '190',
    use: 'CUUH'
  },
  '18-9': {
    address: 'RUSSELL MILLPOND RD',
    area: 200,
    building$: 0,
    centers: [
      {
        lat: 43.14135768622958,
        lon: -72.15768242335861
      }
    ],
    cu$: 0,
    land$: 11964,
    owner: 'MELOON, CHARLES HEIRS',
    taxed$: 11964,
    usage: '190',
    use: 'CUUW'
  },
  '18-10': {
    address: '34 RUSSELL MILLPOND RD',
    area: 25,
    building$: 22300,
    centers: [
      {
        lat: 43.14511277576584,
        lon: -72.1601795897067
      }
    ],
    cu$: 1500,
    land$: 31337,
    owner: 'KEITH, KRIS S',
    taxed$: 55137,
    usage: '110',
    use: 'R1'
  },
  '18-11': {
    address: '70 RUSSELL MILLPOND RD',
    area: 36.6,
    building$: 0,
    centers: [
      {
        lat: 43.14582765749526,
        lon: -72.1558565800143
      }
    ],
    cu$: 0,
    land$: 18711,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 18711,
    usage: '110',
    use: 'R1'
  },
  '18-11-02': {
    address: 'KAREN LN',
    area: 0.83,
    building$: 0,
    centers: [
      {
        lat: 43.14652361687778,
        lon: -72.15350040153417
      }
    ],
    cu$: 0,
    land$: 59,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 59,
    usage: '110',
    use: 'R1'
  },
  '18-11-05': {
    address: 'KAREN LN',
    area: 0.59,
    building$: 0,
    centers: [
      {
        lat: 43.14638197073779,
        lon: -72.15283834886269
      }
    ],
    cu$: 0,
    land$: 42,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 42,
    usage: '110',
    use: 'R1'
  },
  '18-11-08': {
    address: 'KAREN LN',
    area: 0.71,
    building$: 0,
    centers: [
      {
        lat: 43.14622319623986,
        lon: -72.15237610442054
      }
    ],
    cu$: 0,
    land$: 50,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 50,
    usage: '110',
    use: 'R1'
  },
  '18-11-12': {
    address: 'KAREN LN',
    area: 0.39,
    building$: 0,
    centers: [
      {
        lat: 43.14610610023935,
        lon: -72.15153215529085
      }
    ],
    cu$: 0,
    land$: 17500,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 17500,
    usage: '110',
    use: 'R1'
  },
  '18-12': {
    address: 'JEFTS RD',
    area: 100,
    building$: 0,
    centers: [
      {
        lat: 43.143403595023045,
        lon: -72.14610729973182
      }
    ],
    cu$: 0,
    land$: 7457,
    owner: 'MELOON, CHARLES HEIRS',
    taxed$: 7457,
    usage: '190',
    use: 'CUUW'
  },
  '18-16': {
    address: '162 ASHUELOT POND',
    area: 1.4,
    building$: 73800,
    centers: [
      {
        lat: 43.14551392591587,
        lon: -72.14563783204791
      }
    ],
    cu$: 4600,
    land$: 69700,
    owner: 'COTTER, ANN M. TRUST',
    taxed$: 148100,
    usage: '110',
    use: 'R1W'
  },
  '18-17': {
    address: '176 ASHUELOT POND',
    area: 0.38,
    building$: 25400,
    centers: [
      {
        lat: 43.14643024631398,
        lon: -72.14497823375382
      }
    ],
    cu$: 0,
    land$: 77400,
    owner: 'PLUMRIDGE, THOMAS J',
    taxed$: 102800,
    usage: '110',
    use: 'R1W'
  },
  '18-18': {
    address: '170 ASHUELOT POND',
    area: 0.29,
    building$: 23800,
    centers: [
      {
        lat: 43.14612501594826,
        lon: -72.14521624507506
      }
    ],
    cu$: 500,
    land$: 67000,
    owner: 'KOTT, CHARLES E',
    taxed$: 91300,
    usage: '110',
    use: 'R1W'
  },
  '18-19': {
    address: 'ASHUELOT POND',
    area: 0.48,
    building$: 0,
    centers: [
      {
        lat: 43.14528108710166,
        lon: -72.14610791744896
      }
    ],
    cu$: 0,
    land$: 20,
    owner: 'MELOON, CHARLES HEIRS',
    taxed$: 20,
    usage: '190',
    use: 'CUUO'
  },
  '18-20': {
    address: '154 ASHUELOT POND',
    area: 0.57,
    building$: 43800,
    centers: [
      {
        lat: 43.145159490726215,
        lon: -72.14645693786544
      }
    ],
    cu$: 2000,
    land$: 86400,
    owner: 'DONOFRIO, MICHAEL M',
    taxed$: 132200,
    usage: '110',
    use: 'R1W'
  },
  '18-21': {
    address: '148 ASHUELOT POND',
    area: 0.63,
    building$: 11400,
    centers: [
      {
        lat: 43.145009114294595,
        lon: -72.14682080701516
      }
    ],
    cu$: 0,
    land$: 86500,
    owner: 'DONOFRIO, MICHAEL M',
    taxed$: 97900,
    usage: '110',
    use: 'R1W'
  },
  '18-29-01': {
    address: 'KAREN LN',
    area: 0.18,
    building$: 0,
    centers: [
      {
        lat: 43.146668209648475,
        lon: -72.15160515355717
      }
    ],
    cu$: 0,
    land$: 13,
    owner: 'DUBOWIK, DANIEL',
    taxed$: 13,
    usage: '110',
    use: 'R1W'
  },
  '18-22': {
    address: '144 ASHUELOT POND',
    area: 0.63,
    building$: 59200,
    centers: [
      {
        lat: 43.14487597699731,
        lon: -72.14720389809652
      }
    ],
    cu$: 1600,
    land$: 71500,
    owner: 'SCHNEIDER, GARY L',
    taxed$: 132300,
    usage: '110',
    use: 'R1W'
  },
  '20-11': {
    address: '32 SWEENEY RD',
    area: 0.46,
    building$: 0,
    centers: [
      {
        lat: 43.14396177090879,
        lon: -72.06801735670578
      }
    ],
    cu$: 12500,
    land$: 23700,
    owner: 'LACASSE, ELLEN',
    taxed$: 36200,
    usage: '110',
    use: 'R1'
  },
  '18-23': {
    address: '140 ASHUELOT POND',
    area: 0.63,
    building$: 64600,
    centers: [
      {
        lat: 43.14473161017709,
        lon: -72.14757375864806
      }
    ],
    cu$: 2700,
    land$: 95700,
    owner: 'DIGIACOMO, LINDA E.',
    taxed$: 163000,
    usage: '110',
    use: 'R1W'
  },
  '18-24': {
    address: 'ASHUELOT POND',
    area: 1.3,
    building$: 0,
    centers: [
      {
        lat: 43.14457438482001,
        lon: -72.14841329846884
      }
    ],
    cu$: 0,
    land$: 25,
    owner: 'MELOON, CHARLES HEIRS',
    taxed$: 25,
    usage: '190',
    use: 'CUWL'
  },
  '18-25': {
    address: '128 ASHUELOT POND',
    area: 0.52,
    building$: 24400,
    centers: [
      {
        lat: 43.14452583243128,
        lon: -72.14914012103274
      }
    ],
    cu$: 2100,
    land$: 86300,
    owner: 'ERRICO, MICHAEL P',
    taxed$: 112800,
    usage: '110',
    use: 'R1W'
  },
  '18-26': {
    address: '124 ASHUELOT POND',
    area: 0.9,
    building$: 24900,
    centers: [
      {
        lat: 43.144868341708964,
        lon: -72.14953353974052
      }
    ],
    cu$: 1500,
    land$: 87000,
    owner: 'ROGUZ, LEON',
    taxed$: 113400,
    usage: '110',
    use: 'R1'
  },
  '18-27': {
    address: '114 ASHUELOT POND',
    area: 1.33,
    building$: 32100,
    centers: [
      {
        lat: 43.14561961860474,
        lon: -72.15000828840078
      }
    ],
    cu$: 0,
    land$: 84944,
    owner: 'MELOON, CHARLES HEIRS',
    taxed$: 117044,
    usage: '110',
    use: 'R1W'
  },
  '18-28': {
    address: '104 ASHUELOT POND',
    area: 0.4,
    building$: 9600,
    centers: [
      {
        lat: 43.146159634614705,
        lon: -72.15061801350177
      }
    ],
    cu$: 0,
    land$: 58800,
    owner: 'STROUT, DOUGLAS J',
    taxed$: 68400,
    usage: '110',
    use: 'R1W'
  },
  '18-29': {
    address: '90 ASHUELOT POND',
    area: 0.34,
    building$: 20400,
    centers: [
      {
        lat: 43.14666022832478,
        lon: -72.15137459911146
      }
    ],
    cu$: 0,
    land$: 79400,
    owner: 'SPAULDING, CHRISTOPHER S',
    taxed$: 99800,
    usage: '110',
    use: 'R1W'
  },
  '18-29-03': {
    address: '96 KAREN LN',
    area: 0.5,
    building$: 78900,
    centers: [
      {
        lat: 43.146437338943926,
        lon: -72.1510769334227
      }
    ],
    cu$: 4500,
    land$: 115000,
    owner: 'BEEBEE, PAUL A',
    taxed$: 198400,
    usage: '110',
    use: 'R1W'
  },
  '18-30': {
    address: '88 ASHUELOT POND',
    area: 0.42,
    building$: 10800,
    centers: [
      {
        lat: 43.1467046758752,
        lon: -72.1518493142873
      }
    ],
    cu$: 900,
    land$: 76000,
    owner: 'PRATT, MICHELLE, TRUSTEE OF MO',
    taxed$: 87700,
    usage: '110',
    use: 'R1W'
  },
  '18-35': {
    address: '166 ASHUELOT POND',
    area: 0.49,
    building$: 2400,
    centers: [
      {
        lat: 43.14588958373197,
        lon: -72.14548482512886
      }
    ],
    cu$: 0,
    land$: 79000,
    owner: 'RATHBUN, CONNIE L',
    taxed$: 81400,
    usage: '110',
    use: 'R1W'
  },
  '18-36': {
    address: '84 ASHUELOT POND',
    area: 0.23,
    building$: 16000,
    centers: [
      {
        lat: 43.146739077000504,
        lon: -72.15208831763755
      }
    ],
    cu$: 0,
    land$: 67900,
    owner: 'STROUT, DOUGLAS',
    taxed$: 83900,
    usage: '110',
    use: 'R1W'
  },
  '19-1': {
    address: 'VALLEY RD',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.14672699722807,
        lon: -72.09792436826532
      }
    ],
    cu$: 0,
    land$: 15300,
    owner: 'SMITH, ROBERT W 2017 TRUST',
    taxed$: 15300,
    usage: '110',
    use: 'R1'
  },
  '19-8': {
    address: 'BARDEN POND RD',
    area: 5.3,
    building$: 0,
    centers: [
      {
        lat: 43.13817295644179,
        lon: -72.10216455958555
      }
    ],
    cu$: 0,
    land$: 20900,
    owner: 'PALMIERI, PATRICK T',
    taxed$: 20900,
    usage: '110',
    use: 'R1'
  },
  '19-9': {
    address: 'BARDEN POND RD',
    area: 5.3,
    building$: 0,
    centers: [
      {
        lat: 43.138914911188536,
        lon: -72.10238490994999
      }
    ],
    cu$: 0,
    land$: 20900,
    owner: 'DONAHUE, KEVIN',
    taxed$: 20900,
    usage: '110',
    use: 'R1'
  },
  '19-10': {
    address: 'BARDEN POND RD',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.13970161787552,
        lon: -72.102373798911
      }
    ],
    cu$: 0,
    land$: 269,
    owner: 'DESCHENES, CHARLES',
    taxed$: 269,
    usage: '110',
    use: 'R1'
  },
  '19-5': {
    address: 'BARDEN POND RD',
    area: 116,
    building$: 0,
    centers: [
      {
        lat: 43.132887759842504,
        lon: -72.10128181984918
      }
    ],
    cu$: 0,
    land$: 3349,
    owner: 'HUMMEL-JOHNSON REV TRUST',
    taxed$: 3349,
    usage: '190',
    use: 'CUMH'
  },
  '19-11': {
    address: 'BARDEN POND RD',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.14043516809902,
        lon: -72.10211897043783
      }
    ],
    cu$: 0,
    land$: 269,
    owner: 'DESCHENES, CHARLES',
    taxed$: 269,
    usage: '110',
    use: 'R1'
  },
  '19-12': {
    address: 'BARDEN POND RD',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.14105116331792,
        lon: -72.10189922736811
      }
    ],
    cu$: 0,
    land$: 288,
    owner: 'DESCHENES, CHARLES',
    taxed$: 288,
    usage: '110',
    use: 'R1'
  },
  '19-13': {
    address: 'BARDEN POND RD',
    area: 6.4,
    building$: 0,
    centers: [
      {
        lat: 43.14160623441198,
        lon: -72.101756374532
      }
    ],
    cu$: 0,
    land$: 22500,
    owner: 'DONAHUE, LISA C',
    taxed$: 22500,
    usage: '110',
    use: 'R1'
  },
  '19-14': {
    address: 'BARDEN POND RD',
    area: 6.2,
    building$: 0,
    centers: [
      {
        lat: 43.142152892214504,
        lon: -72.10177612197424
      }
    ],
    cu$: 0,
    land$: 22200,
    owner: 'CARL, RICHARD',
    taxed$: 22200,
    usage: '110',
    use: 'R1'
  },
  '19-15': {
    address: 'BARDEN POND RD',
    area: 5.5,
    building$: 0,
    centers: [
      {
        lat: 43.14269229057573,
        lon: -72.10189012172253
      }
    ],
    cu$: 0,
    land$: 21200,
    owner: 'NOYES, CATHLEEN A',
    taxed$: 21200,
    usage: '110',
    use: 'R1'
  },
  '19-16': {
    address: 'BARDEN POND RD',
    area: 5.5,
    building$: 0,
    centers: [
      {
        lat: 43.14322908136515,
        lon: -72.10196415757308
      }
    ],
    cu$: 0,
    land$: 21200,
    owner: 'BALDI, ALISON',
    taxed$: 21200,
    usage: '110',
    use: 'R1'
  },
  '19-17': {
    address: 'BARDEN POND RD',
    area: 5.3,
    building$: 0,
    centers: [
      {
        lat: 43.143780829862756,
        lon: -72.10197212374531
      }
    ],
    cu$: 0,
    land$: 20900,
    owner: 'TRACY, LISA C',
    taxed$: 20900,
    usage: '110',
    use: 'R1'
  },
  '19-18': {
    address: '50 BARDEN POND RD',
    area: 5.5,
    building$: 31300,
    centers: [
      {
        lat: 43.14427217925793,
        lon: -72.1020566358393
      }
    ],
    cu$: 1300,
    land$: 23900,
    owner: 'TRACY, LISA C',
    taxed$: 56500,
    usage: '110',
    use: 'R1'
  },
  '20-7': {
    address: 'SWEENEY RD',
    area: 1.96,
    building$: 0,
    centers: [
      {
        lat: 43.14463828032322,
        lon: -72.06626349295337
      }
    ],
    cu$: 0,
    land$: 20100,
    owner: 'ROM, ALAN JAY',
    taxed$: 20100,
    usage: '110',
    use: 'R1'
  },
  '19-19': {
    address: 'BARDEN POND RD',
    area: 20.04,
    building$: 0,
    centers: [
      {
        lat: 43.144673706387906,
        lon: -72.10220785094059
      }
    ],
    cu$: 2700,
    land$: 43500,
    owner: 'TREPANIER, MARCEL',
    taxed$: 46200,
    usage: '110',
    use: 'R1'
  },
  '19-24': {
    address: '613 KING ST',
    area: 328,
    building$: 0,
    centers: [
      {
        lat: 43.144968716967945,
        lon: -72.10909360390319
      }
    ],
    cu$: 0,
    land$: 16387,
    owner: 'DANA PROPERTIES, LLC',
    taxed$: 16387,
    usage: '190',
    use: 'CUUW'
  },
  '19-25': {
    address: '467 KING ST',
    area: 25,
    building$: 26200,
    centers: [
      {
        lat: 43.144720872711616,
        lon: -72.12659022887513
      }
    ],
    cu$: 0,
    land$: 28794,
    owner: 'MACEWEN, PETER',
    taxed$: 54994,
    usage: '110',
    use: 'R1'
  },
  '19-27': {
    address: '851 KING ST',
    area: 28.64,
    building$: 26300,
    centers: [
      {
        lat: 43.13533824097135,
        lon: -72.1265585651263
      }
    ],
    cu$: 7200,
    land$: 28589,
    owner: 'DESCLOS, JAMES C',
    taxed$: 62089,
    usage: '110',
    use: 'R1'
  },
  '19-28': {
    address: '859 KING ST',
    area: 0.25,
    building$: 24600,
    centers: [
      {
        lat: 43.135082687286186,
        lon: -72.1264356748145
      }
    ],
    cu$: 900,
    land$: 22400,
    owner: 'PELOSI JR, ANTHONY M',
    taxed$: 47900,
    usage: '110',
    use: 'R1'
  },
  '19-29': {
    address: '893 KING ST',
    area: 1.5,
    building$: 27100,
    centers: [
      {
        lat: 43.13435669166445,
        lon: -72.12587770539136
      }
    ],
    cu$: 1700,
    land$: 26400,
    owner: 'MAYHEW, CARROLL B & STEVEN C',
    taxed$: 55200,
    usage: '110',
    use: 'R1'
  },
  '20-8': {
    address: '47 SWEENEY RD',
    area: 1,
    building$: 23400,
    centers: [
      {
        lat: 43.144586848336715,
        lon: -72.06752704310627
      }
    ],
    cu$: 4800,
    land$: 29200,
    owner: 'LACASSE, ELLEN',
    taxed$: 57400,
    usage: '110',
    use: 'R1'
  },
  '20-9': {
    address: '17 SWEENEY RD',
    area: 1.93,
    building$: 59600,
    centers: [
      {
        lat: 43.14424730844446,
        lon: -72.0684925268323
      },
      {
        lat: 43.143702304555184,
        lon: -72.06879806993257
      }
    ],
    cu$: 6900,
    land$: 33500,
    owner: 'DUPUIS JR, PAUL',
    taxed$: 100000,
    usage: '110',
    use: 'R1'
  },
  '19-31': {
    address: '1021 KING ST',
    area: 300,
    building$: 23100,
    centers: [
      {
        lat: 43.13549246457265,
        lon: -72.11471438008113
      }
    ],
    cu$: 1300,
    land$: 48249,
    owner: 'KENDRICK FAMILY LLC',
    taxed$: 72649,
    usage: '110',
    use: 'R1'
  },
  '19-32': {
    address: 'BARDEN POND RD',
    area: 14.2,
    building$: 0,
    centers: [
      {
        lat: 43.131114890707764,
        lon: -72.11435109805645
      }
    ],
    cu$: 0,
    land$: 582,
    owner: 'TUTHILL, JOHN & NORA M-TRUSTEE',
    taxed$: 582,
    usage: '190',
    use: 'CUUO'
  },
  '19-33': {
    address: 'KING ST',
    area: 0.5,
    building$: 35900,
    centers: [
      {
        lat: 43.13725907346199,
        lon: -72.1271892699601
      }
    ],
    cu$: 0,
    land$: 27000,
    owner: 'QUINN, BRIAN E',
    taxed$: 62900,
    usage: '110',
    use: 'R1'
  },
  '20-1': {
    address: '129 BAILEY RD',
    area: 2,
    building$: 54800,
    centers: [
      {
        lat: 43.14601293414809,
        lon: -72.06859850198971
      }
    ],
    cu$: 5100,
    land$: 39300,
    owner: 'BRIDSCHGE, MARK A',
    taxed$: 99200,
    usage: '110',
    use: 'R1'
  },
  '20-2': {
    address: 'BAILEY RD',
    area: 5.3,
    building$: 0,
    centers: [
      {
        lat: 43.14491902939996,
        lon: -72.06913116392495
      }
    ],
    cu$: 0,
    land$: 26300,
    owner: 'DUPUIS JR, PAUL',
    taxed$: 26300,
    usage: '110',
    use: 'R1'
  },
  '20-4': {
    address: '35 SWEENEY RD',
    area: 0.5,
    building$: 20600,
    centers: [
      {
        lat: 43.14467072375789,
        lon: -72.06854417176216
      }
    ],
    cu$: 1900,
    land$: 30400,
    owner: 'KIBLIN, RODNEY',
    taxed$: 52900,
    usage: '110',
    use: 'R1'
  },
  '20-5': {
    address: 'SWEENEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.14497239561748,
        lon: -72.06810521024899
      }
    ],
    cu$: 0,
    land$: 1500,
    owner: 'SPITZ,  ROBERT A',
    taxed$: 1500,
    usage: '110',
    use: 'R1'
  },
  '20-6': {
    address: '49 SWEENEY RD',
    area: 0.9,
    building$: 8700,
    centers: [
      {
        lat: 43.145102026048285,
        lon: -72.06726986824448
      }
    ],
    cu$: 600,
    land$: 22300,
    owner: 'BRACKETT, STEVEN J',
    taxed$: 31600,
    usage: '110',
    use: 'R1'
  },
  '20-12': {
    address: '42 SWEENEY RD',
    area: 0.37,
    building$: 40800,
    centers: [
      {
        lat: 43.144046606286274,
        lon: -72.06745282403138
      }
    ],
    cu$: 2000,
    land$: 26100,
    owner: 'KALINOWSKI, ROBERT Z',
    taxed$: 68900,
    usage: '110',
    use: 'R1'
  },
  '20-14': {
    address: '76 JUNIPER DR',
    area: 3,
    building$: 27300,
    centers: [
      {
        lat: 43.14343107722602,
        lon: -72.06610737346399
      }
    ],
    cu$: 5400,
    land$: 31300,
    owner: 'ROM, ALAN JAY',
    taxed$: 64000,
    usage: '110',
    use: 'R1'
  },
  '20-15': {
    address: 'SWEENEY RD',
    area: 1.5,
    building$: 0,
    centers: [
      {
        lat: 43.14336507717794,
        lon: -72.06698123283499
      }
    ],
    cu$: 0,
    land$: 19800,
    owner: 'LEIBER, ELIZABETH',
    taxed$: 19800,
    usage: '110',
    use: 'R1'
  },
  '20-16': {
    address: 'OFF SWEENEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.143270475513766,
        lon: -72.06743870972608
      }
    ],
    cu$: 0,
    land$: 1500,
    owner: 'REYNOLDS, ALAN P',
    taxed$: 1500,
    usage: '110',
    use: 'R1'
  },
  '20-18': {
    address: '269 BAILEY RD',
    area: 0.3,
    building$: 9700,
    centers: [
      {
        lat: 43.14356760079214,
        lon: -72.06848748075204
      }
    ],
    cu$: 100,
    land$: 21300,
    owner: 'TRENT, DANIEL',
    taxed$: 31100,
    usage: '110',
    use: 'R1'
  },
  '20-19': {
    address: '283 BAILEY RD',
    area: 2.1,
    building$: 13400,
    centers: [
      {
        lat: 43.14318491479948,
        lon: -72.06800983822268
      }
    ],
    cu$: 0,
    land$: 26600,
    owner: 'DANAHY, MARTIN F',
    taxed$: 40000,
    usage: '110',
    use: 'R1'
  },
  '20-20': {
    address: 'BAILEY RD',
    area: 1.4,
    building$: 0,
    centers: [
      {
        lat: 43.142672589522746,
        lon: -72.06757014480779
      }
    ],
    cu$: 0,
    land$: 22200,
    owner: 'REYNOLDS, ALAN P',
    taxed$: 22200,
    usage: '110',
    use: 'R1'
  },
  '20-21': {
    address: '27 JUNIPER DR',
    area: 2.5,
    building$: 20600,
    centers: [
      {
        lat: 43.14233044492525,
        lon: -72.06661172481671
      }
    ],
    cu$: 900,
    land$: 34200,
    owner: 'ROM, ALAN JAY',
    taxed$: 55700,
    usage: '110',
    use: 'R1'
  },
  '20-22': {
    address: 'JUNIPER DR',
    area: 1.6,
    building$: 0,
    centers: [
      {
        lat: 43.14241836713736,
        lon: -72.06527611762871
      }
    ],
    cu$: 0,
    land$: 8300,
    owner: 'SUGARHOUSE RD ASSOCIATION',
    taxed$: 8300,
    usage: '110',
    use: 'R1'
  },
  '20-23': {
    address: '62 JUNIPER DR',
    area: 1,
    building$: 32400,
    centers: [
      {
        lat: 43.14300805473615,
        lon: -72.06524049523216
      }
    ],
    cu$: 3200,
    land$: 30800,
    owner: 'BERGERON, STEFAN, ARI, JOSHUA',
    taxed$: 66400,
    usage: '110',
    use: 'R1'
  },
  '20-24': {
    address: '50 JUNIPER DR',
    area: 2.16,
    building$: 39700,
    centers: [
      {
        lat: 43.142951302702365,
        lon: -72.06445090596863
      }
    ],
    cu$: 1800,
    land$: 32100,
    owner: 'MACLEOD, HUBERT F',
    taxed$: 73600,
    usage: '110',
    use: 'R1'
  },
  '20-25': {
    address: '48 JUNIPER DR',
    area: 2,
    building$: 1500,
    centers: [
      {
        lat: 43.142642749375,
        lon: -72.06356743590923
      }
    ],
    cu$: 0,
    land$: 20200,
    owner: 'LAMPRON, BETH',
    taxed$: 21700,
    usage: '110',
    use: 'R1'
  },
  '20-26': {
    address: 'JUNIPER DR',
    area: 2.5,
    building$: 0,
    centers: [
      {
        lat: 43.141803520012566,
        lon: -72.06299618717871
      }
    ],
    cu$: 0,
    land$: 20500,
    owner: 'MORROW, PAUL',
    taxed$: 20500,
    usage: '110',
    use: 'R1'
  },
  '20-27': {
    address: 'BAILEY RD',
    area: 1.14,
    building$: 0,
    centers: [
      {
        lat: 43.141255222756634,
        lon: -72.06362013188499
      }
    ],
    cu$: 0,
    land$: 9800,
    owner: 'ULIN, MAGARET W',
    taxed$: 9800,
    usage: '110',
    use: 'R1'
  },
  '20-28': {
    address: '40 JUNIPER DR',
    area: 2,
    building$: 29200,
    centers: [
      {
        lat: 43.14154836889762,
        lon: -72.06469443205651
      }
    ],
    cu$: 4600,
    land$: 21800,
    owner: 'LAMPRON, CARA',
    taxed$: 55600,
    usage: '110',
    use: 'R1'
  },
  '20-29': {
    address: 'JUNIPER DR',
    area: 0.65,
    building$: 0,
    centers: [
      {
        lat: 43.1419517783069,
        lon: -72.0655664327539
      }
    ],
    cu$: 0,
    land$: 15400,
    owner: 'LAMPRON, CARA',
    taxed$: 15400,
    usage: '110',
    use: 'R1'
  },
  '20-30': {
    address: 'JUNIPER DR',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.14190624082214,
        lon: -72.06630640906867
      }
    ],
    cu$: 0,
    land$: 15700,
    owner: 'LAMPRON, CARA',
    taxed$: 15700,
    usage: '110',
    use: 'R1'
  },
  '20-31': {
    address: '369 BAILEY RD',
    area: 0.33,
    building$: 20100,
    centers: [
      {
        lat: 43.14168975356341,
        lon: -72.06612418245562
      }
    ],
    cu$: 800,
    land$: 25800,
    owner: 'GRUE, NORMAN J.',
    taxed$: 46700,
    usage: '110',
    use: 'R1'
  },
  '20-32': {
    address: '379 BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.141494849418024,
        lon: -72.06567283077673
      }
    ],
    cu$: 0,
    land$: 21900,
    owner: 'DUNTON, JAMES E',
    taxed$: 21900,
    usage: '110',
    use: 'R1'
  },
  '20-34': {
    address: 'BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.140728982186204,
        lon: -72.0654298841207
      }
    ],
    cu$: 0,
    land$: 16200,
    owner: 'PANACOPOULOS, YANNI',
    taxed$: 16200,
    usage: '110',
    use: 'R1'
  },
  '20-36': {
    address: 'BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.139915854601355,
        lon: -72.06534739571448
      }
    ],
    cu$: 0,
    land$: 16200,
    owner: 'STEVENS, CLAUDIA F',
    taxed$: 16200,
    usage: '110',
    use: 'R1'
  },
  '20-39': {
    address: '525 BAILEY RD',
    area: 2.18,
    building$: 52100,
    centers: [
      {
        lat: 43.1394208857164,
        lon: -72.06352665353265
      }
    ],
    cu$: 16600,
    land$: 40200,
    owner: 'DEVLIN, NANCY L REVOC TRUST',
    taxed$: 108900,
    usage: '110',
    use: 'R1'
  },
  '20-43': {
    address: '561 BAILEY RD',
    area: 1,
    building$: 27300,
    centers: [
      {
        lat: 43.13947099551223,
        lon: -72.0624687490614
      }
    ],
    cu$: 2300,
    land$: 40500,
    owner: 'STEVENS, ALEC W.',
    taxed$: 70100,
    usage: '110',
    use: 'R1'
  },
  '20-44': {
    address: '577 BAILEY RD',
    area: 4.5,
    building$: 98000,
    centers: [
      {
        lat: 43.14012081804266,
        lon: -72.06189791391147
      }
    ],
    cu$: 0,
    land$: 43600,
    owner: 'GOODWIN, LORI J',
    taxed$: 141600,
    usage: '110',
    use: 'R1'
  },
  '20-45': {
    address: '679 BAILEY RD',
    area: 77.9,
    building$: 144300,
    centers: [
      {
        lat: 43.14240522813496,
        lon: -72.05994601884055
      }
    ],
    cu$: 6300,
    land$: 43649,
    owner: 'PECK II, WALTER',
    taxed$: 194249,
    usage: '110',
    use: 'R1'
  },
  '20-46': {
    address: 'DOLE SCHOOL HOUSE RD',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.14440229887232,
        lon: -72.05353027799114
      }
    ],
    cu$: 0,
    land$: 25800,
    owner: 'WHITTEMORE, CLARENCE',
    taxed$: 25800,
    usage: '110',
    use: 'R1'
  },
  '20-48': {
    address: '679 BAILEY RD',
    area: 68.48,
    building$: 0,
    centers: [
      {
        lat: 43.139128165657176,
        lon: -72.05570865285593
      }
    ],
    cu$: 19800,
    land$: 34211,
    owner: 'CULLEN, ROGER H',
    taxed$: 54011,
    usage: '110',
    use: 'R1'
  },
  '20-49': {
    address: 'BAILEY RD',
    area: 54,
    building$: 0,
    centers: [
      {
        lat: 43.13732512157439,
        lon: -72.06166900808788
      }
    ],
    cu$: 8600,
    land$: 16052,
    owner: 'CULLEN, ROGER H',
    taxed$: 24652,
    usage: '110',
    use: 'R1'
  },
  '20-51': {
    address: '57 LONG POND RD',
    area: 9.8,
    building$: 136000,
    centers: [
      {
        lat: 43.136756107019394,
        lon: -72.06647497636926
      }
    ],
    cu$: 9600,
    land$: 49600,
    owner: 'GORDON, MICHAEL D',
    taxed$: 195200,
    usage: '110',
    use: 'R1'
  },
  '20-53': {
    address: 'MUD POND RD',
    area: 26,
    building$: 0,
    centers: [
      {
        lat: 43.13343874190624,
        lon: -72.06142165119829
      }
    ],
    cu$: 0,
    land$: 1846,
    owner: 'KARRMANN, MICHAEL K',
    taxed$: 1846,
    usage: '190',
    use: 'CUUW'
  },
  '20-54': {
    address: '632 BAILEY RD',
    area: 54,
    building$: 219700,
    centers: [
      {
        lat: 43.13415745108462,
        lon: -72.05615667464814
      }
    ],
    cu$: 5100,
    land$: 38814,
    owner: 'KARRMANN FAM IRREV TRUST',
    taxed$: 263614,
    usage: '110',
    use: 'R1'
  },
  '20-55': {
    address: 'FOREST RD',
    area: 40,
    building$: 0,
    centers: [
      {
        lat: 43.13063350700635,
        lon: -72.05583310987926
      }
    ],
    cu$: 0,
    land$: 2137,
    owner: 'CULLEN, ROGER H',
    taxed$: 2137,
    usage: '190',
    use: 'CUUH'
  },
  '20-56': {
    address: '194 FOREST RD',
    area: 11.2,
    building$: 50100,
    centers: [
      {
        lat: 43.13072517947943,
        lon: -72.06013708014528
      }
    ],
    cu$: 1500,
    land$: 19837,
    owner: 'CULLEN, ROGER H',
    taxed$: 71437,
    usage: '110',
    use: 'R1'
  },
  '20-57': {
    address: '150 FOREST RD',
    area: 9.3,
    building$: 64100,
    centers: [
      {
        lat: 43.13073612369911,
        lon: -72.06182754060848
      }
    ],
    cu$: 2000,
    land$: 21893,
    owner: 'KARRMANN, MICHAEL K',
    taxed$: 87993,
    usage: '110',
    use: 'R1A'
  },
  '20-58': {
    address: '108 FOREST RD',
    area: 8.2,
    building$: 16300,
    centers: [
      {
        lat: 43.1307198425225,
        lon: -72.06329866986155
      }
    ],
    cu$: 0,
    land$: 33300,
    owner: 'YOUNGMAN, MARK D',
    taxed$: 49600,
    usage: '110',
    use: 'R1A'
  },
  '20-59': {
    address: 'FOREST RD',
    area: 7.5,
    building$: 0,
    centers: [
      {
        lat: 43.130843769846564,
        lon: -72.06460566157388
      }
    ],
    cu$: 0,
    land$: 21100,
    owner: 'HESS, CHARLES',
    taxed$: 21100,
    usage: '110',
    use: 'R1'
  },
  '20-78': {
    address: 'BALSAM CIR',
    area: 7.5,
    building$: 0,
    centers: [
      {
        lat: 43.13402010826169,
        lon: -72.07143700903677
      }
    ],
    cu$: 0,
    land$: 23300,
    owner: 'MULLIKIN, DEREK',
    taxed$: 23300,
    usage: '110',
    use: 'R1A'
  },
  '20-60': {
    address: '2 FOREST RD',
    area: 14.4,
    building$: 257700,
    centers: [
      {
        lat: 43.13121408095046,
        lon: -72.06598517104827
      }
    ],
    cu$: 13000,
    land$: 30965,
    owner: 'CULLEN, ROGER H',
    taxed$: 301665,
    usage: '110',
    use: 'R1A'
  },
  '20-61': {
    address: 'BALSAM CIR',
    area: 7.2,
    building$: 0,
    centers: [
      {
        lat: 43.13093113461149,
        lon: -72.06772403168188
      }
    ],
    cu$: 0,
    land$: 9402,
    owner: 'CULLEN, ROGER H',
    taxed$: 9402,
    usage: '110',
    use: 'R1'
  },
  '20-62': {
    address: 'BALSAM CIR',
    area: 7.3,
    building$: 0,
    centers: [
      {
        lat: 43.130604926655,
        lon: -72.06930363062942
      }
    ],
    cu$: 0,
    land$: 18700,
    owner: 'RIORDAN, ROBERT P',
    taxed$: 18700,
    usage: '110',
    use: 'R1A'
  },
  '20-63': {
    address: '355 BALSAM CIR',
    area: 6.2,
    building$: 0,
    centers: [
      {
        lat: 43.13072570365276,
        lon: -72.07055372123918
      }
    ],
    cu$: 0,
    land$: 12432,
    owner: 'HODGE, STEVEN G',
    taxed$: 12432,
    usage: '110',
    use: 'R1A'
  },
  '20-65': {
    address: '253 E SHORE DR',
    area: 5,
    building$: 27200,
    centers: [
      {
        lat: 43.131086251689666,
        lon: -72.07215006246224
      }
    ],
    cu$: 1600,
    land$: 33900,
    owner: 'HULSOOR, SHARAD J',
    taxed$: 62700,
    usage: '110',
    use: 'R1'
  },
  '20-103': {
    address: '318 BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.142021782302386,
        lon: -72.06832949130543
      }
    ],
    cu$: 32800,
    land$: 20300,
    owner: 'PECK, ROBERT W',
    taxed$: 53100,
    usage: '110',
    use: 'R1'
  },
  '20-66': {
    address: '431 BALSAM CIR',
    area: 7.9,
    building$: 168100,
    centers: [
      {
        lat: 43.1323111563846,
        lon: -72.0723352116096
      }
    ],
    cu$: 46900,
    land$: 33719,
    owner: 'HODGE, STEVEN G',
    taxed$: 248719,
    usage: '110',
    use: 'R1A'
  },
  '20-67': {
    address: '482 BALSAM CIRCLE',
    area: 5.8,
    building$: 140300,
    centers: [
      {
        lat: 43.13447956940518,
        lon: -72.07267823708737
      }
    ],
    cu$: 0,
    land$: 43200,
    owner: 'MULLIKIN, DEREK AND CATHERINE',
    taxed$: 183500,
    usage: '110',
    use: 'R1A'
  },
  '20-68': {
    address: '69 E SHORE DR',
    area: 5,
    building$: 0,
    centers: [
      {
        lat: 43.13585589596415,
        lon: -72.07165264874007
      }
    ],
    cu$: 3800,
    land$: 25800,
    owner: 'LAPLANTE, BRIAN A.',
    taxed$: 29600,
    usage: '110',
    use: 'R1'
  },
  '20-69': {
    address: '17 E SHORE DR',
    area: 5,
    building$: 83000,
    centers: [
      {
        lat: 43.13716199353882,
        lon: -72.07110642562687
      }
    ],
    cu$: 3800,
    land$: 35900,
    owner: 'TYMINSKI JR, STANLEY J',
    taxed$: 122700,
    usage: '110',
    use: 'R1'
  },
  '20-70': {
    address: '8 BALSAM CIR',
    area: 7.5,
    building$: 0,
    centers: [
      {
        lat: 43.136021338669096,
        lon: -72.06967096299411
      }
    ],
    cu$: 0,
    land$: 26900,
    owner: 'MRAZIK, LYDIA DUPUIS',
    taxed$: 26900,
    usage: '110',
    use: 'R1A'
  },
  '20-71': {
    address: '87 LONG POND RD',
    area: 5.5,
    building$: 0,
    centers: [
      {
        lat: 43.136555999424864,
        lon: -72.06825330008307
      }
    ],
    cu$: 0,
    land$: 34700,
    owner: 'PORLIER, PAUL A',
    taxed$: 34700,
    usage: '110',
    use: 'R1A'
  },
  '20-72': {
    address: 'BALSAM CIR',
    area: 6.2,
    building$: 0,
    centers: [
      {
        lat: 43.13534054840138,
        lon: -72.06766229391441
      }
    ],
    cu$: 0,
    land$: 19700,
    owner: 'LAUTZ, DAVID',
    taxed$: 19700,
    usage: '110',
    use: 'R1A'
  },
  '20-74': {
    address: 'FOREST RD',
    area: 8.3,
    building$: 0,
    centers: [
      {
        lat: 43.13326817003416,
        lon: -72.06510115619555
      }
    ],
    cu$: 0,
    land$: 388,
    owner: 'KARRMANN, MICHAEL K',
    taxed$: 388,
    usage: '190',
    use: 'CUUO'
  },
  '20-75': {
    address: 'BALSAM CIR',
    area: 5.2,
    building$: 0,
    centers: [
      {
        lat: 43.133577591253754,
        lon: -72.06771373874616
      }
    ],
    cu$: 0,
    land$: 19800,
    owner: 'CULLEN, ROGER H',
    taxed$: 19800,
    usage: '110',
    use: 'R1A'
  },
  '20-76': {
    address: 'BALSAM CIR',
    area: 6.6,
    building$: 0,
    centers: [
      {
        lat: 43.13242366477364,
        lon: -72.06801151604822
      }
    ],
    cu$: 0,
    land$: 20000,
    owner: 'CULLEN, ROGER H',
    taxed$: 20000,
    usage: '110',
    use: 'R1A'
  },
  '20-77': {
    address: 'BALSAM CIR',
    area: 7.6,
    building$: 0,
    centers: [
      {
        lat: 43.132828292988144,
        lon: -72.06991251881195
      }
    ],
    cu$: 0,
    land$: 20700,
    owner: 'RIORDAN, DANIELLE',
    taxed$: 20700,
    usage: '110',
    use: 'R1A'
  },
  '20-79': {
    address: 'BALSAM CIR',
    area: 5.3,
    building$: 0,
    centers: [
      {
        lat: 43.13425869805789,
        lon: -72.06961766996686
      }
    ],
    cu$: 0,
    land$: 11000,
    owner: 'CULLEN, ROGER H',
    taxed$: 11000,
    usage: '110',
    use: 'R1A'
  },
  '20-80': {
    address: '23 CHESTNUT RD',
    area: 6.7,
    building$: 35100,
    centers: [
      {
        lat: 43.130230798024016,
        lon: -72.07507345699538
      }
    ],
    cu$: 0,
    land$: 22100,
    owner: 'REBELLO, TYLER J',
    taxed$: 57200,
    usage: '110',
    use: 'R1A'
  },
  '20-81': {
    address: 'E SHORE DR',
    area: 6.9,
    building$: 0,
    centers: [
      {
        lat: 43.131340141324195,
        lon: -72.0750367196332
      }
    ],
    cu$: 5100,
    land$: 36800,
    owner: 'BUSHEY, CECILE',
    taxed$: 41900,
    usage: '110',
    use: 'R1A'
  },
  '20-82': {
    address: 'E SHORE DR',
    area: 5.8,
    building$: 0,
    centers: [
      {
        lat: 43.13225283186329,
        lon: -72.07530302395817
      }
    ],
    cu$: 0,
    land$: 461,
    owner: 'DESOUZA, MARK',
    taxed$: 461,
    usage: '190',
    use: 'CUUW'
  },
  '20-83': {
    address: '186 E SHORE DR',
    area: 6.7,
    building$: 206700,
    centers: [
      {
        lat: 43.13305907717456,
        lon: -72.07561605047505
      }
    ],
    cu$: 200,
    land$: 130503,
    owner: 'DESOUZA, MARK',
    taxed$: 337403,
    usage: '110',
    use: 'R1'
  },
  '20-84': {
    address: '136 E SHORE DR',
    area: 6.1996,
    building$: 32200,
    centers: [
      {
        lat: 43.13384798046791,
        lon: -72.07554354467844
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'JOHNSON, MICHAEL PHILIP',
    taxed$: 32200,
    usage: '110',
    use: 'R1A'
  },
  '20-85': {
    address: 'E SHORE DR',
    area: 6.7,
    building$: 0,
    centers: [
      {
        lat: 43.134631845491676,
        lon: -72.07539136829155
      }
    ],
    cu$: 0,
    land$: 25700,
    owner: 'MULLIKIN, DEREK',
    taxed$: 25700,
    usage: '110',
    use: 'R1A'
  },
  '20-86': {
    address: '343 LONG POND RD',
    area: 7.8,
    building$: 176600,
    centers: [
      {
        lat: 43.135510731377316,
        lon: -72.07505051517523
      }
    ],
    cu$: 0,
    land$: 46600,
    owner: 'CABRAL, ROBERT T.',
    taxed$: 223200,
    usage: '110',
    use: 'R1A'
  },
  '20-88': {
    address: '247 LONG POND RD',
    area: 8.1,
    building$: 43200,
    centers: [
      {
        lat: 43.13673638797874,
        lon: -72.07334474751879
      }
    ],
    cu$: 0,
    land$: 36200,
    owner: 'FAUTEUX, RICKY D',
    taxed$: 79400,
    usage: '110',
    use: 'R1A'
  },
  '20-89': {
    address: '226 LONG POND RD',
    area: 10.9,
    building$: 127500,
    centers: [
      {
        lat: 43.13933296320967,
        lon: -72.0721066598042
      }
    ],
    cu$: 6200,
    land$: 93900,
    owner: 'LEWINE, BENJAMIN M',
    taxed$: 227600,
    usage: '110',
    use: 'R1A'
  },
  '20-111': {
    address: '228 BAILEY RD',
    area: 3.12,
    building$: 90600,
    centers: [
      {
        lat: 43.143820979938894,
        lon: -72.07014487532837
      }
    ],
    cu$: 2800,
    land$: 43700,
    owner: 'KOVACS, FRANK',
    taxed$: 137100,
    usage: '110',
    use: 'R1'
  },
  '20-90': {
    address: 'LONG POND RD',
    area: 30.3,
    building$: 0,
    centers: [
      {
        lat: 43.140426494811415,
        lon: -72.07461879484238
      }
    ],
    cu$: 0,
    land$: 54100,
    owner: 'LEWINE, BENJAMIN M',
    taxed$: 54100,
    usage: '110',
    use: 'R1A'
  },
  '20-91': {
    address: '110 LONG POND RD',
    area: 8.2,
    building$: 74500,
    centers: [
      {
        lat: 43.13851037327425,
        lon: -72.06947895113633
      }
    ],
    cu$: 1200,
    land$: 48600,
    owner: 'FOGG, WILLIAM R',
    taxed$: 124300,
    usage: '110',
    use: 'R1A'
  },
  '20-92': {
    address: '100 LONG POND RD',
    area: 14.1,
    building$: 0,
    centers: [
      {
        lat: 43.139226917331456,
        lon: -72.06859153500719
      }
    ],
    cu$: 0,
    land$: 1128,
    owner: 'BROOK, KENNETH A',
    taxed$: 1128,
    usage: '190',
    use: 'CUUW'
  },
  '20-95': {
    address: 'BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.14165183232977,
        lon: -72.06747679153673
      }
    ],
    cu$: 0,
    land$: 24300,
    owner: 'REYNOLDS, ALAN P',
    taxed$: 24300,
    usage: '110',
    use: 'R1'
  },
  '20-97': {
    address: '358 BAILEY RD',
    area: 0.7,
    building$: 68700,
    centers: [
      {
        lat: 43.141185609466724,
        lon: -72.0668474776343
      }
    ],
    cu$: 1400,
    land$: 34800,
    owner: 'FEELEY, WALTER',
    taxed$: 104900,
    usage: '110',
    use: 'R1'
  },
  '20-98': {
    address: '360 BAILEY RD',
    area: 1,
    building$: 10800,
    centers: [
      {
        lat: 43.14067242077529,
        lon: -72.06817418050599
      }
    ],
    cu$: 0,
    land$: 20300,
    owner: 'FEELEY, WALTER',
    taxed$: 31100,
    usage: '110',
    use: 'R1'
  },
  '20-99': {
    address: '276 BAILEY RD',
    area: 1.2,
    building$: 9900,
    centers: [
      {
        lat: 43.141398630694376,
        lon: -72.06960273215901
      }
    ],
    cu$: 100,
    land$: 10200,
    owner: 'TOMAS, THOMAS L',
    taxed$: 20200,
    usage: '110',
    use: 'R1'
  },
  '20-100': {
    address: 'BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.1412532582066,
        lon: -72.06859076595084
      }
    ],
    cu$: 0,
    land$: 1500,
    owner: 'BAXTER, GORDON N',
    taxed$: 1500,
    usage: '110',
    use: 'R1'
  },
  '20-101': {
    address: 'BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.140927526012476,
        lon: -72.07035130751662
      }
    ],
    cu$: 0,
    land$: 17000,
    owner: 'WASHINGTON, TOWN OF - TC DEED',
    taxed$: 17000,
    usage: '300',
    use: 'EX-M'
  },
  '20-102': {
    address: '330 BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.14188146931122,
        lon: -72.06784814272015
      }
    ],
    cu$: 0,
    land$: 24300,
    owner: 'REYNOLDS, ALAN P',
    taxed$: 24300,
    usage: '110',
    use: 'R1'
  },
  '20-104': {
    address: '302 BAILEY RD',
    area: 1.25,
    building$: 26400,
    centers: [
      {
        lat: 43.14224168879621,
        lon: -72.06871781875323
      }
    ],
    cu$: 2100,
    land$: 34700,
    owner: 'PECK, ROBERT W',
    taxed$: 63200,
    usage: '110',
    use: 'R1'
  },
  '20-106': {
    address: '280 BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.14282855918903,
        lon: -72.06882711496124
      }
    ],
    cu$: 5500,
    land$: 20300,
    owner: "O'DWYER, CHRISTOPHER",
    taxed$: 25800,
    usage: '110',
    use: 'R1'
  },
  '20-108': {
    address: '272 BAILEY RD',
    area: 1.14,
    building$: 15000,
    centers: [
      {
        lat: 43.142680680676975,
        lon: -72.06943623432566
      }
    ],
    cu$: 1700,
    land$: 20400,
    owner: 'TOMAS, SETH A.',
    taxed$: 37100,
    usage: '110',
    use: 'R1'
  },
  '20-109': {
    address: '254 BAILEY RD',
    area: 0.782,
    building$: 57400,
    centers: [
      {
        lat: 43.143348914501374,
        lon: -72.06936301176785
      }
    ],
    cu$: 1700,
    land$: 35300,
    owner: 'FOGG, MARK W',
    taxed$: 94400,
    usage: '110',
    use: 'R1'
  },
  '20-110': {
    address: 'BAILEY RD',
    area: 2.49,
    building$: 0,
    centers: [
      {
        lat: 43.145572306967466,
        lon: -72.07019884784413
      }
    ],
    cu$: 0,
    land$: 21400,
    owner: 'BAKER, DEBRAH A LIVING TRUST',
    taxed$: 21400,
    usage: '110',
    use: 'R1'
  },
  '20-113': {
    address: '131 WOODPECKER RD',
    area: 3.4,
    building$: 8000,
    centers: [
      {
        lat: 43.14313704555039,
        lon: -72.07403788795604
      }
    ],
    cu$: 0,
    land$: 35700,
    owner: 'DURFEE, JONATHAN R',
    taxed$: 43700,
    usage: '110',
    use: 'R1A'
  },
  '20-114': {
    address: 'WOODPECKER RD',
    area: 8.3,
    building$: 0,
    centers: [
      {
        lat: 43.14269541123308,
        lon: -72.0729519199241
      }
    ],
    cu$: 0,
    land$: 3100,
    owner: 'DURFEE, JONATHAN R',
    taxed$: 3100,
    usage: '110',
    use: 'R1'
  },
  '20-115': {
    address: 'BAILEY RD',
    area: 4.25,
    building$: 0,
    centers: [
      {
        lat: 43.141573604377136,
        lon: -72.07175040927261
      }
    ],
    cu$: 0,
    land$: 6400,
    owner: 'BURTON, CAROL HOPE',
    taxed$: 6400,
    usage: '110',
    use: 'R1'
  },
  '20-117': {
    address: 'WOODPECKER RD',
    area: 3,
    building$: 0,
    centers: [
      {
        lat: 43.14198847502476,
        lon: -72.07515944490933
      }
    ],
    cu$: 0,
    land$: 9800,
    owner: 'LAFFERTY, ANDREW M.',
    taxed$: 9800,
    usage: '110',
    use: 'R1A'
  },
  '20-118': {
    address: 'WOODPECKER RD',
    area: 3,
    building$: 0,
    centers: [
      {
        lat: 43.14171501772611,
        lon: -72.0766023336859
      }
    ],
    cu$: 0,
    land$: 9800,
    owner: 'LAFFERTY, ANDREW AND KATHERINE',
    taxed$: 9800,
    usage: '110',
    use: 'R1A'
  },
  '20-119': {
    address: '113 PHEASANT LN',
    area: 11.8,
    building$: 158200,
    centers: [
      {
        lat: 43.13811982923363,
        lon: -72.07950626019058
      }
    ],
    cu$: 6400,
    land$: 231007,
    owner: 'SADOCK, DAVID A',
    taxed$: 395607,
    usage: '110',
    use: 'R1W'
  },
  '20-120': {
    address: '120 PHEASANT LN',
    area: 13.2,
    building$: 217500,
    centers: [
      {
        lat: 43.13901377590705,
        lon: -72.08005809887949
      }
    ],
    cu$: 2700,
    land$: 143048,
    owner: 'HUTCHINGS, LEO G TRUST',
    taxed$: 363248,
    usage: '110',
    use: 'R1W'
  },
  '20-127': {
    address: 'WOODPECKER RD',
    area: 1.6,
    building$: 0,
    centers: [
      {
        lat: 43.142569746608906,
        lon: -72.0766433930509
      }
    ],
    cu$: 0,
    land$: 26100,
    owner: 'KILDAY JR, GORDON',
    taxed$: 26100,
    usage: '110',
    use: 'R1A'
  },
  '25-18': {
    address: '32 MCQUADE RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.1378778237126,
        lon: -72.08793584140412
      }
    ],
    cu$: 0,
    land$: 13000,
    owner: 'PEABODY, CHARLES L REV TRUST',
    taxed$: 13000,
    usage: '110',
    use: 'R1'
  },
  '24-44': {
    address: 'LOOKOUT POINT RD',
    area: 0.18,
    building$: 0,
    centers: [
      {
        lat: 43.139677846151756,
        lon: -72.08780787218816
      }
    ],
    cu$: 0,
    land$: 6300,
    owner: 'DEFOSSE, DAVID R',
    taxed$: 6300,
    usage: '110',
    use: 'R1'
  },
  '20-121-01': {
    address: 'NUTHATCH WAY',
    area: 20.39,
    building$: 0,
    centers: [
      {
        lat: 43.1406833251276,
        lon: -72.08093990979957
      }
    ],
    cu$: 0,
    land$: 233400,
    owner: 'WASHINGTON, TOWN OF - FOREST',
    taxed$: 233400,
    usage: '300',
    use: 'EX-M'
  },
  '20-121-03': {
    address: '53 NUTHATCH WAY',
    area: 1.59,
    building$: 200300,
    centers: [
      {
        lat: 43.13993071731507,
        lon: -72.08281318230215
      }
    ],
    cu$: 3000,
    land$: 153100,
    owner: 'KANE, MICHAEL',
    taxed$: 356400,
    usage: '110',
    use: 'R1W'
  },
  '20-121-04': {
    address: '59 NUTHATCH WAY',
    area: 1.81,
    building$: 206900,
    centers: [
      {
        lat: 43.14023812588229,
        lon: -72.08313050212328
      }
    ],
    cu$: 5000,
    land$: 148400,
    owner: 'MERCIERI, CARL J',
    taxed$: 360300,
    usage: '110',
    use: 'R1W'
  },
  '20-121-05': {
    address: '75 NUTHATCH WAY',
    area: 2.61,
    building$: 218000,
    centers: [
      {
        lat: 43.140414370625294,
        lon: -72.08396815230303
      }
    ],
    cu$: 5000,
    land$: 204200,
    owner: 'MERCIER JR, CHARLES H',
    taxed$: 427200,
    usage: '110',
    use: 'R1W'
  },
  '20-155': {
    address: '475 LONG POND RD',
    area: 0.91,
    building$: 34200,
    centers: [
      {
        lat: 43.132528664631074,
        lon: -72.07854474263453
      }
    ],
    cu$: 4900,
    land$: 178800,
    owner: 'FOWLER, STEPHEN L. & PATRICIA ',
    taxed$: 217900,
    usage: '110',
    use: 'R1W'
  },
  '20-123': {
    address: 'FOX RUN RD',
    area: 6.19,
    building$: 0,
    centers: [
      {
        lat: 43.142198415347735,
        lon: -72.08359030315226
      }
    ],
    cu$: 0,
    land$: 496,
    owner: 'BUCHANAN, LORNE R J',
    taxed$: 496,
    usage: '190',
    use: 'CUUW'
  },
  '20-129': {
    address: '138 WOODPECKER RD',
    area: 6.9,
    building$: 53800,
    centers: [
      {
        lat: 43.143877499931456,
        lon: -72.07519820220003
      }
    ],
    cu$: 21100,
    land$: 40700,
    owner: 'YOUNGS, HOWARD',
    taxed$: 115600,
    usage: '110',
    use: 'R1A'
  },
  '20-130': {
    address: '106 WOODPECKER RD',
    area: 3.3,
    building$: 5000,
    centers: [
      {
        lat: 43.144484511684276,
        lon: -72.07430586890561
      }
    ],
    cu$: 800,
    land$: 27700,
    owner: 'SHERIDAN, ANDREW J',
    taxed$: 33500,
    usage: '110',
    use: 'R1A'
  },
  '20-131': {
    address: 'WOODPECKER RD',
    area: 3,
    building$: 0,
    centers: [
      {
        lat: 43.1446022496959,
        lon: -72.073364700514
      }
    ],
    cu$: 0,
    land$: 140,
    owner: 'LAFFERTY, ANDREW M.',
    taxed$: 140,
    usage: '110',
    use: 'R1'
  },
  '20-133': {
    address: '178 BAILEY RD',
    area: 1,
    building$: 16100,
    centers: [
      {
        lat: 43.14496936668806,
        lon: -72.07013796343155
      }
    ],
    cu$: 1400,
    land$: 38500,
    owner: 'COHEN, ESTHER R',
    taxed$: 56000,
    usage: '110',
    use: 'R1'
  },
  '20-156': {
    address: '467 LONG POND RD',
    area: 0.57,
    building$: 86700,
    centers: [
      {
        lat: 43.13234933803088,
        lon: -72.07831267885203
      }
    ],
    cu$: 4900,
    land$: 205300,
    owner: 'ANDERSON, HOLLY SOULE',
    taxed$: 296900,
    usage: '110',
    use: 'R1W'
  },
  '20-151': {
    address: '522 LONG POND RD',
    area: 1.72,
    building$: 56300,
    centers: [
      {
        lat: 43.132910452540095,
        lon: -72.07807901319863
      }
    ],
    cu$: 0,
    land$: 149900,
    owner: 'POOLE, RICHARD J',
    taxed$: 206200,
    usage: '110',
    use: 'R1W'
  },
  '24-45': {
    address: 'LOOKOUT POINT RD',
    area: 0.12,
    building$: 0,
    centers: [
      {
        lat: 43.13978715058998,
        lon: -72.08766969539278
      }
    ],
    cu$: 1200,
    land$: 9900,
    owner: 'DEFOSSE, DAVID R',
    taxed$: 11100,
    usage: '110',
    use: 'R1'
  },
  '20-144': {
    address: '138 PHEASANT LN',
    area: 2.5,
    building$: 119200,
    centers: [
      {
        lat: 43.13624070867356,
        lon: -72.08231859954698
      }
    ],
    cu$: 18600,
    land$: 273900,
    owner: 'AUGUN, AUDREY J REV TRUST',
    taxed$: 411700,
    usage: '110',
    use: 'R1W'
  },
  '20-145': {
    address: '139 PHEASANT LN',
    area: 2.6,
    building$: 59200,
    centers: [
      {
        lat: 43.13582301569464,
        lon: -72.08210066328604
      }
    ],
    cu$: 400,
    land$: 277500,
    owner: 'PETRY, BENNET & JUDITH 2018 TR',
    taxed$: 337100,
    usage: '110',
    use: 'R1W'
  },
  '20-146': {
    address: 'LONG POND RD',
    area: 60.6,
    building$: 0,
    centers: [
      {
        lat: 43.13719003554745,
        lon: -72.07749897011338
      }
    ],
    cu$: 0,
    land$: 4635,
    owner: 'LONG POND ASSOCIATION',
    taxed$: 4635,
    usage: '190',
    use: 'CUUW'
  },
  '20-147': {
    address: '549 LONG POND RD',
    area: 1.26,
    building$: 189500,
    centers: [
      {
        lat: 43.13453648600611,
        lon: -72.07969052465394
      }
    ],
    cu$: 18500,
    land$: 214400,
    owner: 'CIOTTI FAMILY REV TRUST',
    taxed$: 422400,
    usage: '110',
    use: 'R1'
  },
  '20-148': {
    address: '545 LONG POND RD',
    area: 0.5,
    building$: 121000,
    centers: [
      {
        lat: 43.13404140156669,
        lon: -72.07982493703292
      }
    ],
    cu$: 4000,
    land$: 252000,
    owner: 'GOODRICH, ROBERT',
    taxed$: 377000,
    usage: '110',
    use: 'R1W'
  },
  '20-152': {
    address: '493 LONG POND RD',
    area: 0.17,
    building$: 0,
    centers: [
      {
        lat: 43.13331948381436,
        lon: -72.07880893424945
      }
    ],
    cu$: 0,
    land$: 121200,
    owner: 'RAPP, CARL D',
    taxed$: 121200,
    usage: '110',
    use: 'R1W'
  },
  '20-153': {
    address: '491 LONG POND RD',
    area: 0.7,
    building$: 11500,
    centers: [
      {
        lat: 43.132936302678175,
        lon: -72.07899998367084
      }
    ],
    cu$: 1100,
    land$: 181000,
    owner: 'CLARK, JANET SOULE',
    taxed$: 193600,
    usage: '110',
    use: 'R1W'
  },
  '20-154': {
    address: '487 LONG POND RD',
    area: 1.1,
    building$: 52800,
    centers: [
      {
        lat: 43.132642129038956,
        lon: -72.07888139341645
      }
    ],
    cu$: 3000,
    land$: 192500,
    owner: 'RAPP, CARL D',
    taxed$: 248300,
    usage: '110',
    use: 'R1W'
  },
  '20-157': {
    address: '461 LONG POND RD',
    area: 0.71,
    building$: 93400,
    centers: [
      {
        lat: 43.132299367531424,
        lon: -72.07752833669905
      }
    ],
    cu$: 3900,
    land$: 174800,
    owner: 'MCINTYRE, PATRICIA M.  TRUSTEE',
    taxed$: 272100,
    usage: '110',
    use: 'R1W'
  },
  '20-158': {
    address: '445 LONG POND RD',
    area: 2.5,
    building$: 26900,
    centers: [
      {
        lat: 43.131686519126234,
        lon: -72.07694854419483
      }
    ],
    cu$: 5600,
    land$: 227400,
    owner: 'WISE JEFFREY & SONJA TRUST',
    taxed$: 259900,
    usage: '110',
    use: 'R1W'
  },
  '20-159': {
    address: 'CHESTNUT RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.130651711111234,
        lon: -72.07664408747013
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'HIGHLAND FOREST ASSOCIATION',
    taxed$: 0,
    usage: '300',
    use: 'EX-M'
  },
  '20-160': {
    address: '85 CHESTNUT RD',
    area: 0.35,
    building$: 25400,
    centers: [
      {
        lat: 43.13040833226704,
        lon: -72.07687499155728
      }
    ],
    cu$: 2100,
    land$: 148800,
    owner: 'CARROLL, JOHN O',
    taxed$: 176300,
    usage: '110',
    use: 'R1W'
  },
  '20-161': {
    address: 'E SHORE DR',
    area: 0.87,
    building$: 118300,
    centers: [
      {
        lat: 43.1299684671737,
        lon: -72.07647867368796
      }
    ],
    cu$: 0,
    land$: 142200,
    owner: 'BOSETTI, MICHAEL J',
    taxed$: 260500,
    usage: '110',
    use: 'R1'
  },
  '20-181': {
    address: 'BEAVER BROOK RD',
    area: 7.16,
    building$: 0,
    centers: [
      {
        lat: 43.14384686781593,
        lon: -72.07940866049394
      }
    ],
    cu$: 0,
    land$: 34800,
    owner: 'NGUYEN, NAM X',
    taxed$: 34800,
    usage: '110',
    use: 'R1A'
  },
  '20-162': {
    address: '39 BOW RUN TERR',
    area: 0.5,
    building$: 70900,
    centers: [
      {
        lat: 43.12989130088976,
        lon: -72.07734995798549
      }
    ],
    cu$: 1900,
    land$: 222000,
    owner: 'BOSETTI, MICHAEL J',
    taxed$: 294800,
    usage: '110',
    use: 'R1W'
  },
  '20-163': {
    address: 'DOLE SCHOOL HOUSE RD',
    area: 5.04,
    building$: 0,
    centers: [
      {
        lat: 43.14168837318687,
        lon: -72.05304126562528
      }
    ],
    cu$: 0,
    land$: 21900,
    owner: 'STEPHENS, GIANFRANCA J',
    taxed$: 21900,
    usage: '110',
    use: 'R1'
  },
  '20-164': {
    address: 'BAILEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.14147594584483,
        lon: -72.07049322756194
      }
    ],
    cu$: 0,
    land$: 20300,
    owner: 'ROM, ALAN JAY',
    taxed$: 20300,
    usage: '110',
    use: 'R1'
  },
  '20-166': {
    address: '46 JUNIPER DR',
    area: 1,
    building$: 33900,
    centers: [
      {
        lat: 43.141892357618495,
        lon: -72.06390274271678
      }
    ],
    cu$: 1800,
    land$: 27500,
    owner: 'LAMPRON, JOSEPH STEPHEN',
    taxed$: 63200,
    usage: '110',
    use: 'R1'
  },
  '20-167': {
    address: '387 BAILEY RD',
    area: 1.13,
    building$: 12200,
    centers: [
      {
        lat: 43.141105905696875,
        lon: -72.0655596532053
      }
    ],
    cu$: 1600,
    land$: 36600,
    owner: 'FOGG, WILLIAM R.',
    taxed$: 50400,
    usage: '110',
    use: 'R1'
  },
  '20-168': {
    address: 'HIGHLAND HAVEN RD',
    area: 2.94,
    building$: 0,
    centers: [
      {
        lat: 43.14629405323691,
        lon: -72.0859087732509
      }
    ],
    cu$: 0,
    land$: 26000,
    owner: 'WILSON/TOIBB-WILSON TRUST',
    taxed$: 26000,
    usage: '110',
    use: 'R1'
  },
  '20-176': {
    address: '0 BEAVER BROOK RD',
    area: 2,
    building$: 0,
    centers: [
      {
        lat: 43.14350729574333,
        lon: -72.08315346968791
      }
    ],
    cu$: 0,
    land$: 97700,
    owner: 'KELLEY FAMILY TRUST, SHAWN M.',
    taxed$: 97700,
    usage: '110',
    use: 'R1W'
  },
  '20-180': {
    address: 'DOLE SCHOOL HOUSE RD',
    area: 5.7,
    building$: 0,
    centers: [
      {
        lat: 43.14613521170865,
        lon: -72.05687616367007
      }
    ],
    cu$: 0,
    land$: 22200,
    owner: 'HOLM, LORI A',
    taxed$: 22200,
    usage: '110',
    use: 'R1'
  },
  '20-182': {
    address: 'BEAVER BROOK RD',
    area: 7.33,
    building$: 0,
    centers: [
      {
        lat: 43.14435549849071,
        lon: -72.07917090696955
      }
    ],
    cu$: 0,
    land$: 34900,
    owner: 'STUBBS, SUSAN M',
    taxed$: 34900,
    usage: '110',
    use: 'R1A'
  },
  '20-187': {
    address: 'FOX RUN RD',
    area: 1.8,
    building$: 0,
    centers: [
      {
        lat: 43.14276625323538,
        lon: -72.08068612036111
      }
    ],
    cu$: 0,
    land$: 22500,
    owner: 'KELLEY FAMILY TRUST, SHAWN M.',
    taxed$: 22500,
    usage: '110',
    use: 'R1A'
  },
  '20-188': {
    address: 'FOX RUN RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.14283758751221,
        lon: -72.08211696933151
      }
    ],
    cu$: 0,
    land$: 21900,
    owner: 'KELLEY FAMILY TRUST, SHAWN M.',
    taxed$: 21900,
    usage: '110',
    use: 'R1A'
  },
  '20-189': {
    address: 'FOX RUN RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.1428493275768,
        lon: -72.08293367725956
      }
    ],
    cu$: 0,
    land$: 21900,
    owner: 'KELLEY FAMILY TRUST, SHAWN M.',
    taxed$: 21900,
    usage: '110',
    use: 'R1A'
  },
  '20-190': {
    address: 'FOX RUN RD',
    area: 1.1,
    building$: 0,
    centers: [
      {
        lat: 43.142637128901555,
        lon: -72.0842203488781
      }
    ],
    cu$: 0,
    land$: 99400,
    owner: 'KELLEY FAMILY TRUST, SHAWN M.',
    taxed$: 99400,
    usage: '110',
    use: 'R1W'
  },
  '20-191': {
    address: '527 BAILEY RD',
    area: 1.06,
    building$: 24100,
    centers: [
      {
        lat: 43.139865731819114,
        lon: -72.0631731742618
      }
    ],
    cu$: 1000,
    land$: 20700,
    owner: 'SMAIL, SHELLY A.',
    taxed$: 45800,
    usage: '110',
    use: 'R1'
  },
  '20-192': {
    address: 'BAILEY RD',
    area: 1.25,
    building$: 0,
    centers: [
      {
        lat: 43.13972950775177,
        lon: -72.06436880777656
      }
    ],
    cu$: 0,
    land$: 9200,
    owner: 'DEVLIN, NANCY L REVOC TRUST',
    taxed$: 9200,
    usage: '110',
    use: 'R1'
  },
  '21-2': {
    address: 'SO MAIN ST',
    area: 10,
    building$: 0,
    centers: [
      {
        lat: 43.14626796187169,
        lon: -72.04325108834242
      }
    ],
    cu$: 0,
    land$: 35300,
    owner: 'PRONCO, ROBERT',
    taxed$: 35300,
    usage: '110',
    use: 'R1'
  },
  '21-3': {
    address: 'OLD COUNTY RD',
    area: 9.02,
    building$: 0,
    centers: [
      {
        lat: 43.130527926843705,
        lon: -72.04923892170501
      }
    ],
    cu$: 0,
    land$: 456,
    owner: 'MAINE, CRAIGEN L T REVC FAM TR',
    taxed$: 456,
    usage: '190',
    use: 'CUUH'
  },
  '21-3-01': {
    address: 'OLD COUNTY RD',
    area: 1.79,
    building$: 0,
    centers: [
      {
        lat: 43.129828661037635,
        lon: -72.04836198471568
      }
    ],
    cu$: 0,
    land$: 116,
    owner: 'MAINE, CRAIGEN L T REVC FAM TR',
    taxed$: 116,
    usage: '190',
    use: 'CUUH'
  },
  '21-4': {
    address: 'SO MAIN ST',
    area: 60,
    building$: 0,
    centers: [
      {
        lat: 43.14386920667037,
        lon: -72.03911797317194
      }
    ],
    cu$: 0,
    land$: 4902,
    owner: 'NONNO T. REALTY TRUST',
    taxed$: 4902,
    usage: '190',
    use: 'CUUW'
  },
  '21-5': {
    address: 'DOLE SCHOOL HOUSE RD',
    area: 58,
    building$: 0,
    centers: [
      {
        lat: 43.13951992039826,
        lon: -72.03629053608545
      }
    ],
    cu$: 0,
    land$: 5714,
    owner: 'MAHONY, BRIAN JAMES',
    taxed$: 5714,
    usage: '190',
    use: 'CUUW'
  },
  '21-11': {
    address: 'DOLE SCHOOL HOUSE RD',
    area: 40,
    building$: 0,
    centers: [
      {
        lat: 43.13947648254344,
        lon: -72.04911148065031
      }
    ],
    cu$: 0,
    land$: 3273,
    owner: 'BELL, CRAIG BARROW REVOC TRUST',
    taxed$: 3273,
    usage: '190',
    use: 'CUUW'
  },
  '21-14': {
    address: 'DOLE SCHOOL HOUSE RD',
    area: 20.5,
    building$: 0,
    centers: [
      {
        lat: 43.14131292204391,
        lon: -72.04341129052763
      }
    ],
    cu$: 0,
    land$: 28000,
    owner: 'RICHARD, JAMES H & CAROL A',
    taxed$: 28000,
    usage: '110',
    use: 'R1'
  },
  '22-3': {
    address: 'NO MAIN ST',
    area: 23.2,
    building$: 0,
    centers: [
      {
        lat: 43.18278926782279,
        lon: -72.09937974903636
      }
    ],
    cu$: 0,
    land$: 1284,
    owner: 'GAITY, DANIEL J',
    taxed$: 1284,
    usage: '110',
    use: 'R1'
  },
  '24-43': {
    address: 'VALLEY RD',
    area: 1,
    building$: 0,
    centers: [
      {
        lat: 43.13945303871635,
        lon: -72.08811939042906
      }
    ],
    cu$: 0,
    land$: 8100,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 8100,
    usage: '300',
    use: 'EX-M'
  },
  '22-5': {
    address: 'NO MAIN ST',
    area: 69.8,
    building$: 0,
    centers: [
      {
        lat: 43.181593472993804,
        lon: -72.0962331783078
      }
    ],
    cu$: 0,
    land$: 3779,
    owner: 'CILLEY, DONNA J',
    taxed$: 3779,
    usage: '110',
    use: 'R1'
  },
  '22-60': {
    address: 'NO MAIN ST',
    area: 2.4,
    building$: 0,
    centers: [
      {
        lat: 43.18132865301517,
        lon: -72.10181682959262
      }
    ],
    cu$: 0,
    land$: 25600,
    owner: 'TWEEDY, MEGHAN',
    taxed$: 25600,
    usage: '110',
    use: 'R1'
  },
  '22-70': {
    address: 'SO MAIN ST',
    area: 0.12,
    building$: 0,
    centers: [
      {
        lat: 43.17610099801662,
        lon: -72.09626698883643
      }
    ],
    cu$: 0,
    land$: 9900,
    owner: 'WASHINGTON, TOWN OF - COMMON',
    taxed$: 9900,
    usage: '300',
    use: 'EX-M'
  },
  '23-32': {
    address: 'E WASHINGTON RD',
    area: 0.83,
    building$: 0,
    centers: [
      {
        lat: 43.190224441249484,
        lon: -72.01694840890832
      }
    ],
    cu$: 0,
    land$: 9900,
    owner: 'DONAHUE, CAROLE A 2004 TRUST',
    taxed$: 9900,
    usage: '110',
    use: 'R1'
  },
  '23-33': {
    address: 'E WASHINGTON RD',
    area: 1.25,
    building$: 0,
    centers: [
      {
        lat: 43.19015776411486,
        lon: -72.01762001159025
      }
    ],
    cu$: 0,
    land$: 10200,
    owner: 'DONAHUE, CAROLE A 2004 TRUST',
    taxed$: 10200,
    usage: '110',
    use: 'R1'
  },
  '24-29': {
    address: 'VALLEY RD',
    area: 0.21,
    building$: 0,
    centers: [
      {
        lat: 43.14260866196529,
        lon: -72.09190510785513
      }
    ],
    cu$: 0,
    land$: 0,
    owner: 'TAPP, JOSEPH A',
    taxed$: 0,
    usage: '110',
    use: 'R1A'
  },
  '24-36': {
    address: 'VALLEY RD',
    area: 9,
    building$: 0,
    centers: [
      {
        lat: 43.13985719634511,
        lon: -72.09004568098968
      }
    ],
    cu$: 0,
    land$: 37900,
    owner: 'MACINTYRE, KEVIN AND SUSAN M.',
    taxed$: 37900,
    usage: '110',
    use: 'R1W'
  },
  '24-47': {
    address: 'LOOKOUT POINT RD',
    area: 0.15,
    building$: 0,
    centers: [
      {
        lat: 43.140008433752826,
        lon: -72.08795597213927
      }
    ],
    cu$: 6300,
    land$: 11300,
    owner: 'WELKES, MORRIS',
    taxed$: 17600,
    usage: '110',
    use: 'R1A'
  },
  '24-48': {
    address: '39 LOOKOUT POINT RD',
    area: 0.17,
    building$: 92500,
    centers: [
      {
        lat: 43.14005641045644,
        lon: -72.08813336239899
      }
    ],
    cu$: 0,
    land$: 24300,
    owner: 'MENSH, ERIC & WENDY JOINT REV ',
    taxed$: 116800,
    usage: '110',
    use: 'R1A'
  },
  '24-49': {
    address: 'LOOKOUT POINT RD',
    area: 1.05,
    building$: 0,
    centers: [
      {
        lat: 43.14030663142605,
        lon: -72.08876095866839
      }
    ],
    cu$: 800,
    land$: 18300,
    owner: 'COTE IRREVOCABLE TRUST',
    taxed$: 19100,
    usage: '110',
    use: 'R1A'
  },
  '24-50': {
    address: '73 LOOKOUT POINT RD',
    area: 0.22,
    building$: 79100,
    centers: [
      {
        lat: 43.14068919296565,
        lon: -72.08918798597853
      }
    ],
    cu$: 700,
    land$: 148000,
    owner: 'BERTRAND, KERRY',
    taxed$: 227800,
    usage: '110',
    use: 'R1W'
  },
  '24-83': {
    address: 'BEECH WAY',
    area: 0.21,
    building$: 0,
    centers: [
      {
        lat: 43.14422116767658,
        lon: -72.09102824815267
      }
    ],
    cu$: 0,
    land$: 94900,
    owner: 'HUBBARD, GEOFFREY',
    taxed$: 94900,
    usage: '110',
    use: 'R1W'
  },
  '24-97': {
    address: 'BEECH WAY',
    area: 1.01,
    building$: 0,
    centers: [
      {
        lat: 43.14478916338279,
        lon: -72.09110158842061
      }
    ],
    cu$: 400,
    land$: 22700,
    owner: 'MCFEE, RICHARD D',
    taxed$: 23100,
    usage: '110',
    use: 'R1A'
  },
  '24-98': {
    address: 'BIRCH POINT WAY',
    area: 1.05,
    building$: 0,
    centers: [
      {
        lat: 43.1445345588681,
        lon: -72.0919651837775
      }
    ],
    cu$: 0,
    land$: 22700,
    owner: 'DUBEY II, FRANK T',
    taxed$: 22700,
    usage: '110',
    use: 'R1A'
  },
  '24-106': {
    address: 'COVE RD',
    area: 0.21,
    building$: 0,
    centers: [
      {
        lat: 43.146442094922804,
        lon: -72.09197644475752
      }
    ],
    cu$: 3100,
    land$: 124900,
    owner: 'DEVINE, CAROLE AND JAMES',
    taxed$: 128000,
    usage: '110',
    use: 'R1'
  },
  '24-116': {
    address: '216 COVE RD',
    area: 0.52,
    building$: 20100,
    centers: [
      {
        lat: 43.14850839270446,
        lon: -72.09289884042342
      }
    ],
    cu$: 2000,
    land$: 210100,
    owner: 'NEUBERT, DEAN',
    taxed$: 232200,
    usage: '110',
    use: 'R1W'
  },
  '24-119': {
    address: 'COVE RD',
    area: 0.31,
    building$: 0,
    centers: [
      {
        lat: 43.14778395811672,
        lon: -72.09416392505359
      }
    ],
    cu$: 0,
    land$: 14200,
    owner: 'REVANE, DONALD W',
    taxed$: 14200,
    usage: '110',
    use: 'R1A'
  },
  '24-120': {
    address: 'COVE RD',
    area: 0.34,
    building$: 0,
    centers: [
      {
        lat: 43.1461465694791,
        lon: -72.09298915206593
      }
    ],
    cu$: 0,
    land$: 11500,
    owner: 'DEVINE, JAMES',
    taxed$: 11500,
    usage: '110',
    use: 'R1A'
  },
  '24-120-03': {
    address: 'COVE RD',
    area: 0.27,
    building$: 0,
    centers: [
      {
        lat: 43.146687098460475,
        lon: -72.09383594526243
      }
    ],
    cu$: 0,
    land$: 14100,
    owner: 'REVANE, DONALD W',
    taxed$: 14100,
    usage: '110',
    use: 'R1A'
  },
  '24-120-04': {
    address: 'COVE RD',
    area: 0.38,
    building$: 0,
    centers: [
      {
        lat: 43.14707518258884,
        lon: -72.0939020462212
      }
    ],
    cu$: 0,
    land$: 14500,
    owner: 'REVANE, DONALD W',
    taxed$: 14500,
    usage: '110',
    use: 'R1A'
  },
  '24-122': {
    address: 'COVE RD',
    area: 0.54,
    building$: 0,
    centers: [
      {
        lat: 43.14577712993015,
        lon: -72.09242998449822
      }
    ],
    cu$: 0,
    land$: 15100,
    owner: 'WEAVER, ANN',
    taxed$: 15100,
    usage: '110',
    use: 'R1A'
  },
  '24-123': {
    address: 'COVE RD',
    area: 0.42,
    building$: 0,
    centers: [
      {
        lat: 43.145498006367596,
        lon: -72.09237618383119
      }
    ],
    cu$: 0,
    land$: 14700,
    owner: 'BUCHANAN, KEVIN J',
    taxed$: 14700,
    usage: '110',
    use: 'R1A'
  },
  '24-128': {
    address: '3 HERMIT ISLAND',
    area: 0.36,
    building$: 15500,
    centers: [
      {
        lat: 43.14342309458438,
        lon: -72.08720606669347
      }
    ],
    cu$: 400,
    land$: 90800,
    owner: 'STYGLES, STUART',
    taxed$: 106700,
    usage: '110',
    use: 'R1W'
  },
  '24-129': {
    address: '2 HERMIT ISLAND',
    area: 0.36,
    building$: 13300,
    centers: [
      {
        lat: 43.14309530515491,
        lon: -72.08729336108557
      }
    ],
    cu$: 500,
    land$: 90800,
    owner: 'BROWN, BRIAN',
    taxed$: 104600,
    usage: '110',
    use: 'R1'
  },
  '24-133': {
    address: '39 LAKEVIEW TERR',
    area: 0.5,
    building$: 84200,
    centers: [
      {
        lat: 43.142282002047494,
        lon: -72.09079747273645
      }
    ],
    cu$: 0,
    land$: 37500,
    owner: 'MELVIN FAMILY REVOCABLE TRUST',
    taxed$: 121700,
    usage: '110',
    use: 'R1A'
  },
  '24-136': {
    address: '45 LAKEVIEW TERR',
    area: 0.4,
    building$: 136500,
    centers: [
      {
        lat: 43.142609067823,
        lon: -72.09059460295168
      }
    ],
    cu$: 0,
    land$: 29200,
    owner: 'BUTTERWORTH, RALPH J',
    taxed$: 165700,
    usage: '110',
    use: 'R1A'
  },
  '24-139': {
    address: 'LOOKOUT POINT RD',
    area: 0.07,
    building$: 0,
    centers: [
      {
        lat: 43.13992375128903,
        lon: -72.0875224869626
      }
    ],
    cu$: 0,
    land$: 6000,
    owner: 'HABESHIAN, ALICIA MARIE',
    taxed$: 6000,
    usage: '110',
    use: 'R1'
  },
  '25-16': {
    address: '22 MCQUADE RD',
    area: 0.17,
    building$: 5800,
    centers: [
      {
        lat: 43.13788239563646,
        lon: -72.08757364005334
      }
    ],
    cu$: 1200,
    land$: 15100,
    owner: 'HOULE, MATTHEW',
    taxed$: 22100,
    usage: '110',
    use: 'R1A'
  },
  '25-17': {
    address: '40 MCQUADE RD',
    area: 1.06,
    building$: 0,
    centers: [
      {
        lat: 43.138401626379945,
        lon: -72.08776578010085
      }
    ],
    cu$: 600,
    land$: 13000,
    owner: 'PEABODY, CHARLES L REV TRUST',
    taxed$: 13600,
    usage: '110',
    use: 'R1A'
  },
  '25-19': {
    address: 'MCQUADE RD',
    area: 0.51,
    building$: 0,
    centers: [
      {
        lat: 43.137370336117584,
        lon: -72.08799038236283
      }
    ],
    cu$: 0,
    land$: 12000,
    owner: 'LAVOIE, DANIEL',
    taxed$: 12000,
    usage: '110',
    use: 'R1A'
  },
  '25-20': {
    address: '23 MCQUADE RD',
    area: 0.17,
    building$: 19500,
    centers: [
      {
        lat: 43.13738691525806,
        lon: -72.08752400784627
      }
    ],
    cu$: 500,
    land$: 10800,
    owner: 'DANEAU, JAMES H',
    taxed$: 30800,
    usage: '110',
    use: 'R1A'
  },
  '25-28': {
    address: 'VALLEY RD',
    area: 0.33,
    building$: 0,
    centers: [
      {
        lat: 43.13540938414639,
        lon: -72.08784957553219
      }
    ],
    cu$: 2600,
    land$: 14300,
    owner: 'BROUTHERS, ROBERT',
    taxed$: 16900,
    usage: '110',
    use: 'R1A'
  },
  '25-29': {
    address: 'VALLEY RD',
    area: 0.29,
    building$: 0,
    centers: [
      {
        lat: 43.13525399506036,
        lon: -72.08800534090581
      }
    ],
    cu$: 0,
    land$: 14200,
    owner: 'DURIS, ROBERT A & JOAN',
    taxed$: 14200,
    usage: '110',
    use: 'R1A'
  },
  '25-31': {
    address: 'VALLEY RD',
    area: 0.15,
    building$: 0,
    centers: [
      {
        lat: 43.13478743260205,
        lon: -72.088679925726
      }
    ],
    cu$: 0,
    land$: 10000,
    owner: 'HICKS, JEFFREY',
    taxed$: 10000,
    usage: '110',
    use: 'R1A'
  },
  '25-32': {
    address: 'VALLEY RD',
    area: 0.45,
    building$: 0,
    centers: [
      {
        lat: 43.13450418969271,
        lon: -72.0890437178542
      }
    ],
    cu$: 0,
    land$: 14800,
    owner: 'KIROVAC, MARC',
    taxed$: 14800,
    usage: '110',
    use: 'R1A'
  },
  '25-69': {
    address: 'VALLEY RD',
    area: 0.31,
    building$: 0,
    centers: [
      {
        lat: 43.13112910846593,
        lon: -72.08559447583865
      }
    ],
    cu$: 15700,
    land$: 14200,
    owner: 'CROMBIE, FREDERICK C III REV T',
    taxed$: 29900,
    usage: '110',
    use: 'R1'
  },
  '25-75': {
    address: 'HEMLOCK CIR',
    area: 0.21,
    building$: 0,
    centers: [
      {
        lat: 43.13047805681099,
        lon: -72.0853484753945
      }
    ],
    cu$: 0,
    land$: 11200,
    owner: 'FONE, PATRICIA L',
    taxed$: 11200,
    usage: '110',
    use: 'R1A'
  },
  '25-76': {
    address: 'HEMLOCK CIR',
    area: 0.17,
    building$: 0,
    centers: [
      {
        lat: 43.13069898684395,
        lon: -72.08499469644389
      }
    ],
    cu$: 0,
    land$: 9700,
    owner: 'FONE, PATRICIA L',
    taxed$: 9700,
    usage: '110',
    use: 'R1A'
  },
  '25-96': {
    address: 'VALLEY RD',
    area: 0.36,
    building$: 0,
    centers: [
      {
        lat: 43.13444490283078,
        lon: -72.08811933763384
      }
    ],
    cu$: 0,
    land$: 95300,
    owner: 'HICKS, JEFFREY',
    taxed$: 95300,
    usage: '110',
    use: 'R1W'
  },
  '25-102': {
    address: 'VALLEY RD',
    area: 0.64,
    building$: 0,
    centers: [
      {
        lat: 43.135645275502924,
        lon: -72.08679060722832
      }
    ],
    cu$: 0,
    land$: 119200,
    owner: 'BOULEY, MICHAEL',
    taxed$: 119200,
    usage: '110',
    use: 'R1'
  },
  '25-119': {
    address: 'VALLEY RD',
    area: 0.42,
    building$: 0,
    centers: [
      {
        lat: 43.1305325165163,
        lon: -72.0885642073791
      }
    ],
    cu$: 0,
    land$: 14700,
    owner: 'PROCTOR FAMILY TRUST',
    taxed$: 14700,
    usage: '110',
    use: 'R1A'
  },
  '25-120': {
    address: 'VALLEY RD',
    area: 1.33,
    building$: 0,
    centers: [
      {
        lat: 43.129940796575056,
        lon: -72.08844213458079
      }
    ],
    cu$: 0,
    land$: 2000,
    owner: 'PROCTOR FAMILY TRUST',
    taxed$: 2000,
    usage: '110',
    use: 'R1'
  },
  '5-2': {
    address: 'HALFMOON PD RD',
    area: 641,
    building$: 0,
    centers: [
      {
        lat: 43.22126495936856,
        lon: -72.06660100573654
      }
    ],
    cu$: 0,
    land$: 265900,
    owner: 'STATE OF NEW HAMPSHIRE',
    taxed$: 265900,
    usage: '500',
    use: 'EX-S'
  },
  '18-31': {
    address: 'ASHUELOT POND',
    area: 0.17,
    building$: 0,
    centers: [
      {
        lat: 43.14683773210379,
        lon: -72.15233343057231
      }
    ],
    cu$: 0,
    land$: 300,
    owner: 'STROUT, DOUGLAS, THOMAS',
    taxed$: 300,
    usage: '110',
    use: 'R1'
  },
  '20-87': {
    address: 'LONG POND RD',
    area: 6,
    building$: 0,
    centers: [
      {
        lat: 43.13729511703878,
        lon: -72.07518371529473
      }
    ],
    cu$: 0,
    land$: 31400,
    owner: 'CABRAL, ROBERT T.',
    taxed$: 31400,
    usage: '110',
    use: 'R1A'
  },
  '3-4': {
    address: 'BACK MT RD',
    area: 460,
    building$: 0,
    centers: [
      {
        lat: 43.23496005036263,
        lon: -72.05014511637228
      }
    ],
    cu$: 0,
    land$: 11177,
    owner: 'BUTLER MOUNTAIN HOLDINGS, LLC',
    taxed$: 11177,
    usage: '190',
    use: 'CUMH'
  },
  '7-2': {
    address: 'TWIN BRIDGE RD',
    area: 40,
    building$: 0,
    centers: [
      {
        lat: 43.20195150538099,
        lon: -72.12378032940546
      }
    ],
    cu$: 0,
    land$: 1727,
    owner: 'GASKELL, JAMES & GWENDOLYN',
    taxed$: 1727,
    usage: '190',
    use: 'CUUH'
  },
  '11-42': {
    address: '494 MILLEN POND RD',
    area: 19,
    building$: 182400,
    centers: [
      {
        lat: 43.17308659039257,
        lon: -72.11726906671521
      }
    ],
    cu$: 27100,
    land$: 208865,
    owner: 'HORTON, 2017 TRUST STEVEN L., ',
    taxed$: 418365,
    usage: '110',
    use: 'R1W'
  },
  '20-107': {
    address: '274 BAILEY RD',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.14202781381583,
        lon: -72.07081617233074
      }
    ],
    cu$: 0,
    land$: 15200,
    owner: 'DEMERS, JEFFREY',
    taxed$: 15200,
    usage: '110',
    use: 'R1'
  },
  '16-77-01': {
    address: 'MILL ST',
    area: 5.025,
    building$: 0,
    centers: [
      {
        lat: 43.17081510267328,
        lon: -72.08611199855034
      }
    ],
    cu$: 0,
    land$: 544,
    owner: 'LAWRENCE, KEVIN A',
    taxed$: 544,
    usage: '190',
    use: 'CUUW'
  },
  '19-34': {
    address: 'BARDEN POND RD',
    area: 22,
    building$: 0,
    centers: [
      {
        lat: 43.13088328354818,
        lon: -72.10621840283423
      }
    ],
    cu$: 0,
    land$: 942,
    owner: 'TUTHILL, JOHN & NORA M-TRUSTEE',
    taxed$: 942,
    usage: '190',
    use: 'CUUO'
  },
  '20-52': {
    address: 'BALSAM CIR',
    area: 12.6,
    building$: 0,
    centers: [
      {
        lat: 43.134539242311256,
        lon: -72.06660826113084
      }
    ],
    cu$: 0,
    land$: 34500,
    owner: 'RUMSON, KERRI ANN',
    taxed$: 34500,
    usage: '110',
    use: 'R1'
  },
  '21-8': {
    address: 'OLD COUNTY RD',
    area: 150,
    building$: 0,
    centers: [
      {
        lat: 43.13344562948369,
        lon: -72.04543147307047
      }
    ],
    cu$: 0,
    land$: 8373,
    owner: 'MARCHILENA, FRANCIS S',
    taxed$: 8373,
    usage: '190',
    use: 'CUUH'
  },
  '0-1': {
    address: 'AP UTILITY PROPERTY',
    area: 0,
    building$: 0,
    centers: [],
    cu$: 1365100,
    land$: 0,
    owner: 'NH ELECTRIC COOP',
    taxed$: 1365100,
    usage: '261',
    use: 'UTLE'
  },
  '0-2': {
    address: 'UTILITY PROPERTY',
    area: 0,
    building$: 0,
    centers: [],
    cu$: 3490200,
    land$: 0,
    owner: 'PUBLIC SERVICE CO OF NH',
    taxed$: 3490200,
    usage: '261',
    use: 'UTLE'
  },
  '23-26': {
    address: 'EAST WASHINGTON ROAD',
    area: 3.1,
    building$: 0,
    centers: [
      {
        lat: 43.18986147655329,
        lon: -72.01329064545914
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '12-210': {
    address: 'HALFMOON POND ROAD',
    area: 0.5032479793580408,
    building$: 0,
    centers: [
      {
        lat: 43.17553686716565,
        lon: -72.0856574559024
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '19-20': {
    address: 'VALLEY ROAD',
    area: 6.6,
    building$: 0,
    centers: [
      {
        lat: 43.14511865046249,
        lon: -72.10187351179498
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '19-21': {
    address: 'VALLEY ROAD',
    area: 6.6,
    building$: 0,
    centers: [
      {
        lat: 43.14557224959905,
        lon: -72.10278330967719
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '20-193': {
    area: 0.42802700377479413,
    building$: 0,
    centers: [
      {
        lat: 43.14248052112626,
        lon: -72.07081111633161
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '12-127': {
    address: 'WASHINGTON DRIVE',
    area: 3.67,
    building$: 0,
    centers: [
      {
        lat: 43.17141176742857,
        lon: -72.05683377406342
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-359': {
    address: 'COOLIDGE DRIVE',
    area: 1.04,
    building$: 0,
    centers: [
      {
        lat: 43.16379295166794,
        lon: -72.14481467594952
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-117': {
    address: 'MADISON DRIVE',
    area: 1.71,
    building$: 0,
    centers: [
      {
        lat: 43.15955484293032,
        lon: -72.1490950784629
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-367': {
    address: 'STOWELL RD',
    area: 1.12,
    building$: 0,
    centers: [
      {
        lat: 43.160786491431864,
        lon: -72.14200418486739
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-371': {
    address: 'COOLIDGE DR',
    area: 1.17,
    building$: 0,
    centers: [
      {
        lat: 43.161140414903656,
        lon: -72.13991741907647
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-255': {
    address: 'MCKINLEY DR',
    area: 0.83,
    building$: 0,
    centers: [
      {
        lat: 43.15467138953238,
        lon: -72.13923529364898
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '14-259': {
    address: 'MONROE RD',
    area: 0.8,
    building$: 0,
    centers: [
      {
        lat: 43.15415435129323,
        lon: -72.13828064594419
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '7-24': {
    address: 'WASHINGTON HEIGHTS RD',
    area: 5.1,
    building$: 0,
    centers: [
      {
        lat: 43.19473377391131,
        lon: -72.117164005631
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  },
  '19-26': {
    address: 'KING ST',
    area: 28.29,
    building$: 0,
    centers: [
      {
        lat: 43.135959776727724,
        lon: -72.12546986078497
      }
    ],
    cu$: 0,
    land$: 0,
    taxed$: 0,
    usage: '110'
  }
};
