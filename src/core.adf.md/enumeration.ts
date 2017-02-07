namespace core.adf.md {
    export class Enumeration extends ElementBase {
        public IsMultiOption: boolean;
        public IsExtend: boolean;
        public LiteralCollection: core.adf.md.Literal[];
    }
      export class Literal extends ElementBase {
        public IsSystem: boolean;
        public Value: number;
    }
}