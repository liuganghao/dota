namespace core.adf.md {
    export class EntityStateMachine extends ElementBase {
        public entityStateCollection: EntityState[];
    }
   export class EntityState extends ElementBase {
        public seq: number;
        public preState: EntityState;
        public nextState: EntityState;
    }
}