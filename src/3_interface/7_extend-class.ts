namespace ExtendClass {
    /*
    * 接口继承类，会继承类的成员但不包括其实现，就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
    */

    class Control {
        private state: any;
    }

    interface SelectableControl extends Control {
        select(): any
    }

    class Button extends Control implements SelectableControl {
        select() {
        }
    }

    class TextBox extends Control {
        select() {
        }
    }


    /*
    * 接口同样会继承到类的private和protected成员，【当接口继承了拥有私有或受保护的成员的类时，这个接口只能被这个类或其子类所实现】
    */

    // class Image implements SelectableControl { //Property 'state' is missing in type 'Image' but required in type 'SelectableControl'.
    //     private state: any = 0;
    //
    //     select() {
    //     }
    // }
}
