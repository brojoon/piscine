const exid = {
	count: 30,
	up(){
		this.count++;
	},
	down(){
		this.count--;
	},
	showCount(){
		console.log(this.count);
	}
};

exid.up();
exid.up();
exid.down();
exid.up();
exid.down();
exid.up();
exid.up();
exid.up();
exid.showCount();