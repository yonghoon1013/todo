export interface data {
    date : string,
    key : string,
    text : string,
    type : boolean
}

export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];