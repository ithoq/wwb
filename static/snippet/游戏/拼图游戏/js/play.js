// JavaScript Document
function play(args){
	this.args = this.extend(this.defOptions, args);
	if(!this.args.parent || !this.$(this.args.parent)){return false;}
	this.parent = this.$(this.args.parent);
	this.defImgSrc = []; // 背景图数组
	this.defImgPath = this.args.defImgPath;
	this.defImgNum = this.args.defImgNum; // 分多少张图
	this.defCol = this.args.defCol; // 分几列
	this.defImgW = this.args.defImgW; // 一个块儿的宽度 和高度相等
	this.defImgCount = this.defImgSrc.length;// 背景图张数	
	this.playTime = this.args.playTime;// 计时赛使用
	this.type = this.args.type; //游戏类型 默认计时
	this.allCount = 0; // 完整得分 每一个图等分总和
	this.init();
}

play.prototype = {
	init : function(){// 创建默认图片列表
		var self = this; 
		self.loading().imgLoad();
		return self;
	},
	
	defOptions : {
		parent : "play",
		defImgPath : "images/520/",
		//defImgSrc : ["images/m_1326551951737.jpg", "images/psu.jpg", "images/2201973_175124014_2.jpg", "images/800.jpg", "images/2009060621131276393.jpg", "images/007.jpg","images/2010053112290644947.jpg", "images/2009060621123476354.jpg"],
		defImgNum : 25,
		defCol: 6,
		defImgW : 104,
		type : "level", // time | level  
		playTime : 300 // 游戏时间10秒
	},
	
	LevelConfig : {
		"1" : {
			num : 4, // 多少块
			width : 260,//宽度
			time : 5, // 游戏时间10秒
			col : 2, // 列数
			total:1000
		},
		"2" : {
			num : 9, // 多少块
			width : 173,//宽度
			time : 20, // 游戏时间10秒
			col : 3, // 列数
			total:2000	
		},
		"3" : {
			num : 16, // 多少块
			width : 130,//宽度
			time : 60, // 游戏时间10秒
			col : 4, // 列数
			total:4000
		},
		"4" : {
			num : 25, // 多少块
			width : 104,//宽度
			time : 120, // 游戏时间10秒
			col : 5, // 列数
			total:8000
		}
	},
	
	level : 1,
	
	maxLevel : 4,
	
	selectVal : "", // 选项卡已选的图片id 当图片选择生效后 重置为空
	
	x : 8, // 运动系数
	
	isTouchEvent : (
		function(){
			return ( 'ontouchstart' in document.documentElement ) ? true : false;	
		}
	)(),
	
	getLevel : function(){
		var self = this, level = self.level, config = self.LevelConfig[level];
		self.defImgNum = config["num"]; // 分多少张图
		self.defCol = config["col"]; // 分几列
		self.defImgW = config["width"]; // 一个块儿的宽度 和高度相等
		self.levelTotal = config["total"];
		if(self.type=="level"){
			self.playTime = config["time"];
		}
		
		return self;
	},
	
	setLevel : function(){
		
	},
		
	
	
	// 事件绑定
	bindEvent : function(){
		var self = this;
		// 开始按钮
		self.startBtn.onclick = function(){
			self.startBtn.style.display = self.maskDrag.style.display =  "none";
			self.getDefBg();
			self.clickArr = []; // 单个互换临时数组
			self.setDefCss().sortList().showPlayTime();// 时间
			document.onclick = function(event){
				event = event || window.event;
				var name = (event.srcElement) ? event.srcElement.className : event.target.className;
				if(name == "warp"){
					//clearTimeout(self.autoFlag);
					self.sortList();	
				}
			};
		
			// 拼图点击
			for(var i=0;i<self.nodes.length;i++){
				(function(i){
					self.nodes[i].className = "";
					self.nodes[i].onclick = function(){
						self.nodes[i].className = "active";
						switch (self.clickArr.length){
							case 0:
							self.clickArr[0] = i;
							break;
							case 1:
							var a = self.areas[self.clickArr[0]];
							self.areas[self.clickArr[0]] = self.areas[i];
							self.areas[i] = a;
							self.Move();
							//console.log(i+"-"+self.clickArr[0]);
							self.nodes[i].className = self.nodes[self.clickArr[0]].className = ""; // IE 用
							//self.nodes[i].removeAttribute("class");
							//self.nodes[self.clickArr[0]].removeAttribute("class");
							self.clickArr = [];
							self.getIsSuccess();
							break;
							default:
							for(var j=0;j<self.clickArr.length;j++){
								self.nodes[self.clickArr[j]].removeAttribute("class");
							}
							self.clickArr.splice(1,1);
							self.clickArr.splice(0,1);
							self.clickArr[0] = i;
							break;
						}
					};
				})(i);
			}
		}
		
		// 图片选择器
		self.imgSelect.onchange = function(){
			if(self.type == "time"){
				self.playTime = self.args.playTime;
			}
			self.selectVal = this.value;
			self.getSelect(this.value);
			self.getIsSuccess();
		}
		
		
		/*if(!self.isTouchEvent){
			self.getDoc.onmouseup = DocMouseUp;
			self.getDoc.onmousedown = DocMouseDown;
			self.getDoc.onmousemove = DocMouseMove;
		}else{
			self.getDoc.ontouchstart = DocTouchStart;
			self.getDoc.ontouchend = DocTouchEnd;
			self.getDoc.ontouchmove = DocTouchMove;
		}*/
		return self;
	},
	
	getSelect:function(index){ // 改变select 选项卡选中项 及 原始图 内容
		var self = this;
		self.viewImage.src = self.defImgSrc[index];
		for(var i=0; i<self.imgSelect.childNodes.length;i++){
			if(i == parseInt(index)){
				self.imgSelect.childNodes[i].selected = true;
			}else{
				self.imgSelect.childNodes[i].selected = false;
			}
		}
	},
	
	sortList: function(){
		var self = this;
		self.areas.sort(function(){
			return Math.random() > 0.5 ? -1 : 1;
		});
		self.Move();
		return self;
	},
	
	Move : function(){
		var self = this;
		self.bstop = 0;
		for(var i=0; i<self.areas.length; i++){
			self.nodeMove(self.nodes[i], i);// li && 新坐标 && 序列
		}
		return self;
	},
	nodeMove:function(obj, i){
		var self = this,
			newLeft = parseInt(self.areas[i][0]),
			newTop = parseInt(self.areas[i][1]);
		clearTimeout(obj.timer);
		obj.timer = setInterval(function(){
			var oldLeft = parseInt(self.getLiAttr(obj).left),
				oldTop = parseInt(self.getLiAttr(obj).top),
				l = (newLeft - oldLeft) / self.x,
				t = (newTop - oldTop) / self.x;
				l = l>0 ? Math.ceil(l) : Math.floor(l);
				t = t>0 ? Math.ceil(t) : Math.floor(t);
			
			if(oldLeft == newLeft && oldTop == newTop){
				++self.bstop;
				clearTimeout(obj.timer);
				/*if(parseInt(self.bstop) == parseInt(self.nodes.length)){
					self.autoSelect();	
				}*/
			}
			if(oldLeft != newLeft){
				obj.style.left = oldLeft + l + "px";
			}
			if(oldTop != newTop){
				obj.style.top = oldTop + t + "px";	
			}
		}, 20);
	},
	
	getDefBg : function(){
		var self = this;
		self.defImgIndex = (self.selectVal != "") ? self.selectVal : 
		//Math.ceil(self.defImgSrc.length *  Math.random())-1;
		// 随机选取：原理是 总张数乘以随机数，随机数永远小于1，再向上去整也就永远不会超过总张数。 但貌似 第一张和最后1张是不会出来的 额
		((self.defImgIndex < self.defImgSrc.length -1) && self.count ==100 ) ? ++self.defImgIndex : 0;// 背景图默认第几张
		self.getSelect(self.defImgIndex);
		self.selectVal = "";
		//console.log(self.defImgIndex);
		return self;
	},
	
	setDefDom : function(){
		var self = this, parent = self.parent,
			col = self.defCol, w = self.defImgW;
		// 设置容器宽高
		parent.style.width = (w+1) * col + 1 +"px";
		parent.style.height = (w+1) * (self.defImgNum/col) + 1 +"px";
		
		// 载入遮罩层
		self.maskDrag = self.getDoc.createElement("div");
		self.maskDrag.className = "drag";
		self.parent.appendChild(self.maskDrag);
		
		// 载入开始按钮
		self.startBtn = self.getDoc.createElement("button");
		self.startBtn.className = "startBtn";
		self.startBtn.innerHTML = "开始游戏";
		self.parent.appendChild(self.startBtn);
		self.startBtn.style.top = (parseInt(self.parent.style.height) - parseInt(self.startBtn.offsetHeight)) / 2 +"px";
		self.startBtn.style.left = (parseInt(self.parent.style.width) - parseInt(self.startBtn.offsetWidth)) / 2 +"px";
		
		// 载入记分器
		var countDiv = self.getDoc.createElement("div");
		countDiv.className = "count";
		countDiv.innerHTML = "总分数：<span>0</span>分";
		self.countDiv = countDiv.getElementsByTagName("span")[0];
		self.parent.appendChild(countDiv);
		
		// 载入记时器
		var timeDiv = self.getDoc.createElement("div");
		timeDiv.className = "time";
		timeDiv.innerHTML = "倒计时：<span>0</span> 秒";
		self.timeDiv = timeDiv.getElementsByTagName("span")[0];
		self.parent.appendChild(timeDiv);
		
		// 载入原图及图片选择器
		var viewDiv = self.getDoc.createElement("div"), viewHtml;
		viewDiv.className = "viewDiv";
		viewHtml = "<select>";
		for(var i=0; i<self.defImgSrc.length; i++){
			viewHtml += "<option value="+ i +">"+ self.defImgSrc[i] +"</option>";
		}
		viewHtml += "</select>";
		viewHtml += "<img src="+ self.defImgSrc[0] +" />";
		viewDiv.innerHTML = viewHtml;
		self.imgSelect = viewDiv.getElementsByTagName("select")[0]; // 图片选择器
		self.viewImage = viewDiv.getElementsByTagName("img")[0]; // 原图片标签
		self.parent.appendChild(viewDiv);
		return self;
	},
	
	// 生成方块列表
	createUL:function(){
		var self = this, list = "";
		if(!self.defUl)	{
			self.defUl = self.getDoc.createElement("ul");
			self.defUl.setAttribute("id", "imglist");	
		}
		for(var i = 0; i < self.defImgNum; i++){
			list += "<li id='"+i+"'></li>";
		} 
		self.defUl.innerHTML = list;
		return self;
	},
	
	setDefCss: function(){
		var self = this,
			col = self.defCol,
			parent = self.parent, w = self.defImgW,
			nodes = self.defUl.childNodes;
			self.areas = [];
			self.defArea = [];
			self.nodes = [];
		for(var i=0, n=0; i<nodes.length;i++){
			if(nodes[i].nodeName == "LI"){
				var t = parseInt(i/col) * w, 
					l = (n % col) * w,// t:top l:left
					t1 = parseInt(self.parent.offsetHeight)/2 - self.defImgW/2,
					l1 = (parseInt(self.parent.offsetWidth) - self.defImgW)/2,
					_t = parseInt(i/col) * (w+1) + 1, 
					_l = (n % col) * (w+1)+1; 
				nodes[i].style.height = nodes[i].style.width = w +"px";
				nodes[i].style.background = "url("+ self.defImgSrc[self.defImgIndex] +") -"+l+"px -"+t+"px no-repeat";
				//width:"+ self.defImgW +"px;height:"+ self.defImgW +"px;background:url("+ self.defImgSrc +") 0 0 no-repeat;
				nodes[i].style.top = t1 +"px";
				nodes[i].style.left = l1 +"px";
				self.nodes.push(nodes[i]);
				self.defArea.push([_l, _t, i]);// 初始顺序
				self.areas.push([_l, _t, i]);// 可以变化的临时顺序
				++n;
			}
			
		}
		self.parent.appendChild(self.defUl);
	 	//self.sortList();// 默认进行一次 随机变换
		return self;
	},
	// 自动选择一个li
	/*autoSelect : function(){
		var self = this, x=0;
		var num = self.nodes.length;
		clearInterval(self.autoFlag);
		self.autoFlag = setInterval(function(){
			++x;
			x = (parseInt(x) < parseInt(num)) ? x : 0;
			for(var j=0;j<num;j++){
				self.nodes[j].removeAttribute("class");
			}
			console.log(x);
			self.nodes[x].className = "active";
			
		}, 100);
	},*/
	// 游戏时间
	showPlayTime : function(){
		var self = this;
			self.tempCount = self.playTime; // 将总时间缓存
		clearInterval(self.timeflag);
		self.timeflag = setInterval(function(){
			//console.log(self.playTime);
			self.getIsSuccess();
			--self.playTime;
		}, 1000);
		return self;
	},
	
	// 评分
	getCount : function(){
		var self = this, count = 0,
			areas = self.areas,
			len = areas.length,
			defArea = self.defArea;
		for(var i=0;i < len;i++){
			if(areas[i][2] == defArea[i][2]){
				count++;
			}
		}
		count = Math.ceil(count/len*100);
		//self.aCount = self.allCount + count;
		self.aCount = (self.type=="level" && count == 100) ? self.allCount + count + Math.ceil(self.playTime/self.tempCount*100) : self.allCount + count;
		if(count == 100){
			self.allCount = self.aCount;
		}
		self.count = count;
		return self;
	},
	
	getIsSuccess : function(){
		var self = this;
		if(!self.selectVal)self.getCount();
		var getCount = self.count, // 单关分数
			Acount = self.aCount,  // 总分
			time = self.playTime;
		if(Acount != undefined && !self.selectVal.length) self.countDiv.innerHTML = Acount;
		if(time != undefined && !self.selectVal.length) self.timeDiv.innerHTML = time;
		
		//console.log("self.selectVal:"+self.selectVal);
		//console.log(time);
		if(getCount == 100 || !time || self.selectVal){
			for(var i=0;i<self.nodes.length;i++){
				self.nodes[i].onclick = null;
			}
			self.getDoc.onclick = null;
			//self.playTime = 0;
			clearInterval(self.timeflag);
			self.startBtn.style.display = self.maskDrag.style.display =  "block";
		}
		
			if((!time || self.selectVal) && self.timeflag && getCount<100){
				//alert("游戏结束了!您本关的得分。总得分是);
				//self.playTime = self.args.playTime;
				self.level = 1;
				self.getLevel().createUL().setDefCss();
				self.startBtn.innerHTML = "本局得分："+ getCount +"<br>总分：	"+ Acount +"<br>重新开始";
				self.count = self.aCount = self.allCount = 0; // 重置当前得分 总分 缓存总分
			}else if(getCount == 100 && self.timeflag){
				self.startBtn.innerHTML = "继续";
				if(Acount >= self.levelTotal){
					self.level++;
					if(self.level > self.maxLevel && self.type == "level"){
						self.level = 1;
						self.count = self.aCount = self.allCount = 0; // 重置当前得分 总分 缓存总分
						self.startBtn.innerHTML = "恭喜您已通关!<br>重新挑战!";
					}
					self.getLevel().createUL().setDefCss();
				}else{
					self.getLevel();
				}
				
				return false;
			}
	},
	
	loading: function(){
		var self = this, 
			doc = self.getDoc,
			docW = parseInt(doc.body.offsetWidth),
			docH = parseInt(doc.documentElement.clientHeight) + parseInt(doc.body.scrollTop);
		self.loadDiv = doc.createElement("div");
		self.loadDiv.className = "loadDiv";
		self.loadDiv.style.width = "300px";
		self.loadDiv.style.height = "30px";
		self.loadDiv.style.top = (docH - parseInt(self.loadDiv.style.height)) /2 + "px";
		self.loadDiv.style.left = (docW - parseInt(self.loadDiv.style.width)) /2 + "px";
		self.loadDiv.innerHTML = "素材加载中...";
		self.getDoc.body.appendChild(self.loadDiv);
		return self;
	},
	
	imgLoad : function(index){
		if(index == undefined) index = 0;
		var self = this, img = new Image(), src = self.defImgPath + index +".jpg";
		img.onload = function(){
			self.defImgSrc.push(src);
			self.imgLoad(index+1);
		}
		img.onerror = function(){
			self.loadDiv.style.display = "none";
			self.getLevel().createUL().setDefDom().getDefBg().setDefCss().bindEvent();	
		}
		img.src = src;
		return self;
	},
	
	/*ajax : function(){
		var self = this, xmlHttp;
		// ff 
		try {
			xmlHttp = new XMLHttpRequest();
		}catch (e){
			try{
				xmlHttp = new ActiveXObject("MSxml2.XMLHTTP");
			}catch (e){
				try{
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				}catch (e){
					alert("error");
				}
			}
		}
		self.xmlHttp = xmlHttp;
		return self;
	},*/
	
	getLiAttr : function(obj){
		return obj.style;
	},
	
	getDoc : (function(){
		return document;	
	})(),
	
	getWin : (function(){
		return window;	
	})(),
	
	$ : function(id){
		return this.getDoc.getElementById(id);	
	},
	
	extend : function (def, args){
		for(var key in args){
			def[key] = args[key];
		}
		return def;
	} 
}

