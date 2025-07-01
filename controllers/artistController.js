import Artist from "../models/ArtistModel.js";

export const createArtist = async (req, res) => {
  try {
    let { name, image, category } = req.body;

    const artist = new Artist({
      name,
      image,
      category,
    });
    await artist.save();

    res
      .status(201)
      .json({ message: "Artist Successfully Created", newArtist: artist });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getArtist = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateArtist = async (req, res) => {
  try {
    const { name, image, category } = req.body;
    const artist = await Artist.findByIdAndUpdate(
      req.params.id,
      { name, image, category },
      { new: true, runValidators: true }
    );
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    res
      .status(200)
      .json({ message: "Artist Successfully Updated", updatedArtist: artist });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    res.status(200).json({ message: "Artist Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
