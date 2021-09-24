export class InquireUnits{
  static readonly type = '[Units] UnitsActions';
}

export class getUnit{
  static readonly type = '[Unit] UnitsActions';
  constructor(public readonly payload: number) {}
}
