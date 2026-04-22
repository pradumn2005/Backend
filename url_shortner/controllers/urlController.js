const { nanoid } = require("nanoid");
const Url = require("../models/urlModel");

exports.createShortUrl = async (req, res) => {
    try {
        const { longUrl } = req.body;

        const shortCode = nanoid(6);

        const newUrl = await Url.create({
            shortCode,
            longUrl
        });

        res.json({
            shortUrl: `http://localhost:3000/url/${shortCode}`
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.redirectUrl = async (req, res) => {
    try {
        const { code } = req.params;

        const url = await Url.findOne({ shortCode: code });

        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).send("URL not found");
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
