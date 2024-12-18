import properties from "../models/properties.js";

export const AddProperties = async (req, res, next) => {
    try {
        const { title, desc, img, rating, location, price } = req.body;
        const Property = new properties({
            title,
            desc,
            img,
            rating,
            location,
            price,
        });
        const createProperty = await Property.save();
        return res
        .status(201)
        .json({ message: "Property added to successfull", createProperty });
    } catch (err) {
        next(err);
    }
};

export const GetProperties = async (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
};

export const AddProperties = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};