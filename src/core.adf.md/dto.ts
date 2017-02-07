namespace core.adf.md {
    export class DTO extends ElementBase {
        public IsMainEntity: boolean;
        public EntityType: EntityType;
        public PropertyCollection: core.adf.md.DTOProperty[];
    }
    export class DTOProperty extends ElementBase {
        public Type: MetaDataType;
        public TypeFullName: string;
        public MetaDataType: string;
        public Sequence: number;
        public Group: string;
        public IsNullable: boolean;
        public DefaultValue: string;
        public MaxValue: string;
        public MinValue: string;
    }
}