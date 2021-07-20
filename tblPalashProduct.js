class tblPalashProduct{
    constructor(id,productname,priceperunit,category,availableqty,productimagename,createddate,createdby,isactive){
        this.id = id; 
        this.productname = productname; 
        this.category = category;
        this.availableqty = availableqty;
        this.productimagename = productimagename; 
        this.createddate=createddate;
        this.createdby=createdby
        this.isactive=isactive
    }
}

module.exports = tblPalashProduct;