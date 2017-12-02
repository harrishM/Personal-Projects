//Input CONTROLLER
var inputController=(function(){
  

    var inputItem1= function(id,strid,strname,email,phnum){
        this.id=id;
        this.strid=strid;
        this.strname=strname;
        this.email=email;
        this.phnum=phnum;
    }; 
     var inputItem2= function(id,prid,brand,colour,cost){
        this.id=id;
        this.prid=prid;
        this.brand=brand;
        this.colour=colour;
        this.cost=cost;
    }; 
     var inputItem3= function(id,empid,empname,desig,phno){
        this.id=id;
        this.empid=empid;
        this.empname=empname;
        this.desig=desig;
        this.phno=phno;
    }; 
     var inputItem4= function(id,custid,custname,dob,age,phno,address){
        this.id=id;
        this.custid=custid;
        this.custname=custname;
        this.dob=dob;
        this.age=age;
        this.phno=phno;
        this.address=address;
    }; 
     var inputItem5= function(id,centreid,country,pincode){
        this.id=id;
        this.centreid=centreid;
        this.country=country;
        this.pincode=pincode;
    }; 
     var inputItem6= function(id,factid,prid,country,pincode){
         this.id=id;
        this.factid=factid;
        this.prid=prid;
        this.country=country;
        this.pincode=pincode;
    }; 
    
    
    
    
    
    var data = {
        allitems:{
            stores:[],
            products:[],
            emp:[],
            cust:[],
            dist:[],
            fact:[]
        },
        totals:{
        stores:0,
        products:0,
        emp:0,
        cust:0,
        dist:0,
        fact:0
    }
        
    };
    
    return {
        
        addItem1:function(type,type1,type2,type3,type4){
            var newItem,ID;
            
            //Create new ID
            if(data.allitems[type].length>0){
                
                ID = data.allitems[type][data.allitems[type].length-1].id +1;
                
            }
            else if(data.allitems[type].length<0){
                ID=0;
                
            }
            
            
            //Create new item based on inc or exp type
            if(type === 'stores')
                {
            newItem = new inputItem1(ID,type1,type2,type3,type4);
                    
                }
            else if(type === 'products')
                {
            newItem = new inputItem2(ID,type1,type2,type3,type4);
                    
                    
                }
            else if(type === 'emp')
                {
            newItem = new inputItem3(ID,type1,type2,type3,type4);
                }
            
            else if(type === 'fact')
                {
            newItem = new inputItem6(ID,type1,type2,type3,type4);
                    
                }
            data.allitems[type].push(newItem);
            //push it into our data structure
            
            return newItem;
            
        },
        
        addItem2:function(type,type1,type2,type3,type4,type5,type6){
            var newItem,ID;
            
            //Create new ID
            if(data.allitems[type].length>0){
                
                ID = data.allitems[type][data.allitems[type].length-1].id +1;
                
            }
            else if(data.allitems[type].length<0){
                ID=0;
                
            }
            
            
            //Create new item based on inc or exp type
          if(type === 'cust'){
                
            newItem = new inputItem4(ID,type1,type2,type3,type4,type5,type6);
            }
            data.allitems[type].push(newItem);
            //push it into our data structure
            
            return newItem;
            
        },
        
        
        addItem3:function(type,type1,type2,type3){
            var newItem,ID;
            
            //Create new ID
            if(data.allitems[type].length>0){
                
                ID = data.allitems[type][data.allitems[type].length-1].id +1;
                
            }
            else if(data.allitems[type].length<0){
                ID=0;
                
            }
            
            
            //Create new item based on inc or exp type
          if(type === 'dist'){
                
            newItem = new inputItem5(ID,type1,type2,type3);
            }
            data.allitems[type].push(newItem);
            //push it into our data structure
            
            return newItem;
            
        },
        
        
        testing:function()
        {
            
            console.log(data);
        }
        
    } 
    
    
    
    
    
})();






















var uicontroller = (function (){
    var DOMstrings={
        tablecall:'.add__type',
        inputButton0:'.add__btn0',
        inputButton1:'.add__btn1',
        inputButton2:'.add__btn2',
        inputButton3:'.add__btn3',
        inputButton4:'.add__btn4',
        inputButton5:'.add__btn5',
        inputButton6:'.add__btn6',
        addContainer:'.add__container',
        topBox:'.budget',
        tableContainer:'.income__list'
        
        
    };
    
    
    return{
        
  getinput:function(){
            return{
                table:document.querySelector(DOMstrings.tablecall).value// Any one of the tables
            
          
            };
      
      
    },      
        addReleventBoxes:function(table){
            var html,prevhtml,newhtml,element,top,topholder;
            if(table === 'stores')
                {
                    element=DOMstrings.addContainer;
                    
                    topholder=DOMstrings.topBox;
                    html='<div class="add"><div class="add__container"><input type="text" class="add__description" id="store_id" placeholder="Store ID"><input type="text" class="add__description" id="store_name" placeholder="Store_Name"><input type="text" class="add__description" id="email" placeholder="Email"><input type="text" class="add__value" id="ph_no" placeholder="Ph_no"><button class="add__btn1"><i class="ion-ios-checkmark-outline"></i></button></div></div>';
                    
                    
                    
                    top='<div class="top"><div class="budget"><div class="title_new1">Stores</div></div></div>';
                    
                    
                }
            else if(table === 'products')
                {
                    element=DOMstrings.addContainer;
                    topholder=DOMstrings.topBox;
                    html='<div class="add"><div class="add__container"><input type="text" class="add__description" id="prod_id" placeholder="Product ID"><input type="text" class="add__description" id="brand" placeholder="Brand"><input type="text" class="add__description" id="colour" placeholder="Colour"><input type="text" class="add__description" id="cost" placeholder="Cost"><button class="add__btn2"><i class="ion-ios-checkmark-outline"></i></button></div></div>';
                    
                    top='<div class="top"><div class="budget"><div class="title_new2">Products</div></div></div>';
                    
                }
            else if(table === 'emp')
                {
                    element=DOMstrings.addContainer;
                    topholder=DOMstrings.topBox;
                    hmtl='<div class="add"><div class="add__container"><input type="number" class="add__description" id="emp_id" placeholder="Employee ID"><input type="text" class="add__description" id="name" placeholder="Name"><input type="text" class="add__description" id="designation" placeholder="Designation"><input type="number" class="add__description" id="ph_no" placeholder="Ph_no"><button class="add__btn3"><i class="ion-ios-checkmark-outline"></i></button></div></div>';
                    
                    top='<div class="budget"><div class="title_new3">Employees</div></div>';
                    
                }
            else if(table === 'cust')
                {
                    element=DOMstrings.addContainer;
                    topholder=DOMstrings.topBox;
                    html='<div class="add"><div class="add__container"><input type="text" class="add__description" id="cust_id" placeholder="Customer ID"><input type="text" class="add__description" id="cust_name" placeholder="Customer Name"><input type="text" class="add__description" id="dob" placeholder="D.O.B"><input type="text" class="add__description" id="age" placeholder="Age"><input type="text" class="add__description" id="ph_no" placeholder="Phone number"><input type="text" class="add__description" id="address" placeholder="Address"><button class="add__btn4"><i class="ion-ios-checkmark-outline"></i></button></div></div>';
                    
                    top='<div class="top"><div class="budget"><div class="title_new4">Customers</div></div></div>';
                                    
                    
                }
            else if(table === 'dist') 
                {
                    element=DOMstrings.addContainer;
                    topholder=DOMstrings.topBox;
                    html='<div class="add"><div class="add__container"><input type="text" class="add__description" id="centre_id" placeholder="Centre ID"><input type="text" class="add__description"  id="country" placeholder="Country"><input type="text" class="add__description" id="pincode" placeholder="pincode"><button class="add__btn5"><i class="ion-ios-checkmark-outline"></i></button></div></div>';
                    
                    
                    top='<div class="top"><div class="budget"><div class="title_new5">Distribution Centres</div></div></div>';
                    
                    
                }
            else if(table === 'fact')
                {
                    element=DOMstrings.addContainer;
                    topholder=DOMstrings.topBox;
                    html='<div class="add"><div class="add__container"><input type="text" class="add__description" id="factory_id"  placeholder="Factory ID"><input type="text" class="add__description" id="prod_id" placeholder="Product ID"><input type="text" class="add__description" id="country" placeholder="Country"><input type="text" class="add__description" id="pincode" placeholder="pincode"><button class="add__btn6"><i class="ion-ios-checkmark-outline"></i></button></div></div>';
                    
                        
                    top='<div class="top"><div class="budget"><div class="title_new6">Factories</div></div></div>';
                                
                    
                    
                }
        
            
            prevhtml=' <div class="add"><div class="add__container"><select class="add__type"><option value="stores" selected>Stores</option><option value="products">Products</option><option value="emp">Employees</option><option value="cust">Customers</option><option value="dist">Dist_Centres</option><option value="fact">Factories</option></select><button class="add__btn0"><i class="ion-ios-checkmark-outline"></i></button></div></div>';
            
          
            
        
            document.querySelector(element).insertAdjacentHTML('beforeend',html);
            
            document.querySelector(topholder).insertAdjacentHTML('beforeend',top);
            
                    
            
            
            
            
            
            
        },
        
        addStoreTable:function(obj,table){
            
            var html,prevhtml,newhtml,element,top,topholder;
            if(table === 'stores')
                {
                    element=DOMstrings.tableContainer;
                    
                     html='<div class="item clearfix" id="income-%id%"><div class="item__value">%store_id%</div><div class="item__description">%store_name%</div><div class="item__description">%email%</div><div class="right clearfix"><div class="item__description">%phno%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                    
                   
                }
            
            newhtml=html.replace('%id%',obj.id);
            newhtml=newhtml.replace('%store_id%',obj.storeid);
            newhtml=newhtml.replace('%store_name%',obj.storename);
            newhtml=newhtml.replace('%email%',obj.email);
            newhtml=newhtml.replace('%phno%',obj.phno);
            
            document.querySelector(element).insertAdjacentHTML('beforeend',newhtml);
           
            
            
        },
        addProdTable:function(obj,table){
            var html,prevhtml,newhtml,element,top,topholder;
            if(table === 'products')
                {
                    element=DOMstrings.tableContainer;
                    
                     html=  '<div class="item clearfix" id="income-%id%"><div class="item__description">%prid%</div><div class="item__description">%brand%</div><div class="item__description">%colour%</div><div class="right clearfix"><div class="item__description">%cost%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                        
                        
                    
                   
                }
            newhtml=html.replace('%id%',obj.id);
            newhtml=newhtml.replace('%prid%',obj.prid);
            newhtml=newhtml.replace('%brand%',obj.brand);
            newhtml=newhtml.replace('%colour%',obj.colour);
            newhtml=newhtml.replace('%cost%',obj.cost);
            
            document.querySelector(element).insertAdjacentHTML('beforeend',newhtml);
            
            
            
            
        },
        
        
        
      
        getDOMstrings:function(){
            
            return DOMstrings;
        }
     
        
        
        
    };

    
    
    
    
})();
                    
                    
                    
                    
                    
                    
                    
                    
//Global event Listener
                    
var controller=(function(Inpctrl,UIctrl){
    
    var setupEventListeners = function(){
        
        var DOM=UIctrl.getDOMstrings();
        
        document.querySelector(DOM.inputButton0).addEventListener('click',ctrlAddItem);
        
        document.querySelector(DOM.inputButton1).addEventListener('click',storebutton);
        document.querySelector(DOM.inputButton2).addEventListener('click',prodbutton);
        
        
        
        
        
        document.addEventListener('keypress',function(event){
                                  
                                  if(event.keycode===13){
            
            ctrlAddItem();
                                      
        }
                                  });
              
    };
    
    
    
    var storebutton=function(){
        
        var storeid=document.getElementById('store_id').value;
        var storename=document.getElementById('store_name').value;
        var email=document.getElementById('email').value;
        var phno=document.getElementById('ph_no').value;
        
        var input=UIctrl.getinput();
        
        var id = input.table;
        
        var newitem=Inpctrl.addItem1(id,storeid,storename,email,phno);
        
        
        UIctrl.addStoreTable(newitem,input.table);
        
        
        
    };
    var prodbutton=function(){
        var prid=document.getElementById('prod_id').value;
        var  brand=document.getElementById('brand').value;
        var colour=document.getElementById('colour').value;
        var cost=document.getElementById('cost').value;
        
        var input=UIctrl.getinput();
        
        var id = input.table;
        
        var newitem=Inpctrl.addItem1(id,prid,brand,colour,cost);
        
        
        UIctrl.addProdTable(newitem,input.table);
        
        
        
    }
    
    
    var ctrlAddItem=function(){ 
        
        var input;
        
        input=UIctrl.getinput();
        
        console.log(input.table);
        
        UIctrl.addReleventBoxes(input.table);
        
              
        
    };
    
    return{
        
        init:function(){
            
            
        
        console.log('App has started');
            
       
            setupEventListeners();
            
        }
    };
    
    

    
})(inputController,uicontroller);






controller.init();
