namespace core.adf.md {
  export class MainEntity {
        public entityMethodCollection: core.adf.md.EntityMethod[];
        public stateMachine: EntityStateMachine;
        public entityType: EntityType;
        public isVersionEntity: boolean;
        public abstractBaseEntity: string;
        public PropertyCollection: core.adf.md.EntityProperty[];
    }
    export class SubEntity {
        public PropertyCollection: core.adf.md.EntityProperty[];
    }
    export class EntityMethod extends ElementBase {
        public parameterCollection: Parameter[];
        public returnValue_IsCollection: boolean;
        public returnValue_MetaDataType: MetaDataType;
        public returnValue_TypeFullName: string;
        public returnValue_DefaultValue: string;
        public group: string;
        public groupSeq: number;
        public isSVAgent: boolean;
        public isUIAgent: boolean;
        public isOfflineAgent: boolean;
        public isAllowAnonymous: boolean;
        public isScheduledAgent: boolean;
        public isLog: boolean;
        //public transactionType: TransactionType;
    }
    export class Parameter extends ElementBase {
        public isCollection: boolean;
        public type: MetaDataType;
        public typeFullName: string;
        public metaDataType: string;
        public defaultValue: string;
    }
    export class EntityProperty extends ElementBase {
        public type: MetaDataType;
        public metaDataType: string;
        public typeFullName: string;
        public isBusinessKey: boolean;
        public isCalculation: boolean;
        public isDynamic: boolean;
        public sequence: number;
        public visibility: VisibilityType;
        // public get isSystem(): boolean {
        //     return isSystem;
        // }
        // public set isSystem(value: boolean) {
        //     isSystem = value;
        //     if (isSystem.HasValue && isSystem.Value) {
        //         Editable = core.adf.md.EditableType.System;
        //         Visibility = VisibilityType.Query;
        //     }
        // }
        // isSystem: boolean;
        public group: string;
        public groupSeq: number;
        //public nullableType: NullableType;
        public defaultValue: string;
        //public editable: EditableType;
        public maxValue: string;
        public minValue: string;
        public precision: number;
        public length: number;
        public isColumn: boolean;
        public isColumnDefine: boolean;
        public isSort: boolean;
        public isSortDefine: boolean;
        public isFilter: boolean;
        public isFilterDefine: boolean;
    }
}