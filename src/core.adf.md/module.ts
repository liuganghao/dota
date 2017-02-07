namespace core.adf.md {
    export class module extends ElementBase {

        public SubEntityCollection: SubEntity[];
        //public EntityViewCollection: EntityView[];
        public EnumerationCollection: Enumeration[];
        //public ValidatorCollection: Validator[];
        public BusinessExceptionCollection: BusinessException[];
        public DTOCollection: DTO[];
        public MainEntity: MainEntity;
        // public get FullName(): string {
        //     return Namespace;
        // }
    }
}
/// <reference path="jsonify" />

function generateModel() {
    const elt = document.getElementById("greeting");
    let m = new core.adf.md.module();
    m.code = 'test';
    m.Name = "测试模型名称";
    elt.innerText = JSON.stringify(m);
}