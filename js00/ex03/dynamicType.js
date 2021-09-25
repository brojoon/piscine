global.changeValue = 10;

const dynamicType = {
	value : null,
	changeValue: null,
	isPrint: true,
	
	put : function (v) {
		console.log(this);
		if (this.isPrint === false)
		{
			console.log("put error");
			return;
		}
		this.value = v;
		this.isPrint = false;
	},
	change : function (type) {
		if (this.value === null)
		{
			console.log("change error");
			return
		}
		if (type == "Number")
			this.changeValue = this.value;
		else if (type == "String")
		{
			this.changeValue = String(this.value);
		}
		else if (type == "Object")
			this.changeValue = {value : this.value};
		else if (type == "Array")
			this.changeValue = [this.value];
	},
	printType : function () {
		console.log(this.changeValue);
		this.isPrint = true;
	}
}
const type = dynamicType;

type.put(42);
type.put(42);
type.put(42);
type.change("Object");
type.change("Array");
type.printType();

type.put(1);
type.put(1);
type.put(1);
type.change("String");
type.printType();

type.put(1994);
type.change("String");
type.printType();