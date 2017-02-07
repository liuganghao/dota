
namespace core.adf.md {
    ///sdfsdgsdg
    ///dsfsdgsd
    ///sdgsdg
    export class ElementBase {
        constructor() {

        }
        public ID: number;
        public Code: string;
        public Name: string;
        public Namespace: string;
        public get FullName(): string {
            return this.Namespace + "." + this.Code;
        }
        public Description: string;
        public DiagramFileName: string;
        public DiagramID: number;
        public ToString(): string {
            return this.Code + "/" + this.Name;
        }
    }
    export const enum EntityType {
        Empty = 0,
        Order = 1,
        Document = 2,
        BusinessType = 4,
        Record = 8
    }
    export const enum MetaDataType {
        Integer,
        Decimal,
        Boolean,
        String,
        Text,
        Uid,
        Email,
        Phone,
        URL,
        Datetime,
        Date,
        Time,
        QRCode,
        Enumeration,
        Entity,
        Object,
        File,
        //Xml,
        //Json,
        Image,
        UndefinedType

    }
    export const enum VisibilityType {
        Create = 1,
        Edit = 2,
        Query = 4,
        None = -1
    }

}
