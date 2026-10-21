const Listing =  require("../models/listing");

module.exports.index = async (req , res)=>{                       //to show main page 1
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
};

module.exports.renderNewForm = (req , res)=>{               //form to add new listing 3
    res.render("listings/newlisting.ejs");
}

module.exports.showListing = async (req , res)=>{                                   
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({ path : "reviews",
        populate : {
            path : "author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error" , "listing you requested for does not exsit");
        res.redirect("/listings");
    }
    // console.log(listing);
    res.render("listings/show.ejs" , {listing});
}

module.exports.createListing = async (req, res, next) => {

    const newlisting = new Listing(req.body.listing);

    newlisting.owner = req.user._id;

    // Main image
    if (req.files["listing[image]"]) {
        newlisting.image = {
            url: req.files["listing[image]"][0].path,
            filename: req.files["listing[image]"][0].filename
        };
    }

    // Image 2
    if (req.files["listing[image2]"]) {
        newlisting.image2 = {
            url: req.files["listing[image2]"][0].path,
            filename: req.files["listing[image2]"][0].filename
        };
    }

    // Image 3
    if (req.files["listing[image3]"]) {
        newlisting.image3 = {
            url: req.files["listing[image3]"][0].path,
            filename: req.files["listing[image3]"][0].filename
        };
    }

    // Image 4
    if (req.files["listing[image4]"]) {
        newlisting.image4 = {
            url: req.files["listing[image4]"][0].path,
            filename: req.files["listing[image4]"][0].filename
        };
    }

    await newlisting.save();

    req.flash("success", "New listing created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req ,res)=>{                
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error" , "listing you requested for does not exsit");
        res.redirect("/listings");
    }
    let ImageUrl = listing.image.url;
    ImageUrl = ImageUrl.replace("/upload" , "/upload/h_200,w_250");
    res.render("listings/edit.ejs" , {listing , ImageUrl});
}

module.exports.updateListing = async (req, res) => {

    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );

    if (!listing) {
        req.flash("error", "listing you requested for does not exist");
        return res.redirect("/listings");
    }

    // Main image
    if (req.files["listing[image]"]) {
        listing.image = {
            url: req.files["listing[image]"][0].path,
            filename: req.files["listing[image]"][0].filename
        };
    }

    // Image 2
    if (req.files["listing[image2]"]) {
        listing.image2 = {
            url: req.files["listing[image2]"][0].path,
            filename: req.files["listing[image2]"][0].filename
        };
    }

    // Image 3
    if (req.files["listing[image3]"]) {
        listing.image3 = {
            url: req.files["listing[image3]"][0].path,
            filename: req.files["listing[image3]"][0].filename
        };
    }

    // Image 4
    if (req.files["listing[image4]"]) {
        listing.image4 = {
            url: req.files["listing[image4]"][0].path,
            filename: req.files["listing[image4]"][0].filename
        };
    }

    await listing.save();

    req.flash("success", "listing updated!");
    res.redirect("/listings");
};

module.exports.destroyListing = async (req , res)=>{      
    let {id}= req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success" , "listing deleted!");
    res.redirect("/listings");
}