// const Product = require('../models/product');
const Player = require("../models/player");

exports.getAddPlayer = (req, res, next) => {
  res.render("admin/edit-player", {
    pageTitle: "Add Product",
    path: "/admin/add-player",
    editing: false
  });
};

//Create New Player

exports.postAddProduct = (req, res, next) => {
  const playerName = req.body.playerName;
  const playerRole = req.body.playerRole;
  const playerDob = req.body.playerDob;
  const playerBio = req.body.playerBio;

  const player = new Player(
    playerName,
    playerRole,
    playerDob,
    playerBio,
    null,
    req.user._id
  );
  player
    .save()
    .then(result => {
      // console.log(result);
      console.log("Created Player");
      res.redirect("/admin/players");
    })
    .catch(err => {
      console.log(err);
    });
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const prodId = req.params.productId;
//   Product.findById(prodId)
//     // Product.findById(prodId)
//     .then(product => {
//       if (!product) {
//         return res.redirect('/');
//       }
//       res.render('admin/edit-product', {
//         pageTitle: 'Edit Product',
//         path: '/admin/edit-product',
//         editing: editMode,
//         product: product
//       });
//     })
//     .catch(err => console.log(err));
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;

//   const product = new Product(
//     updatedTitle,
//     updatedPrice,
//     updatedDesc,
//     updatedImageUrl,
//     prodId
//   );
//   product
//     .save()
//     .then(result => {
//       console.log('UPDATED PRODUCT!');
//       res.redirect('/admin/products');
//     })
//     .catch(err => console.log(err));
// };

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll()
//     .then(products => {
//       res.render('admin/products', {
//         prods: products,
//         pageTitle: 'Admin Products',
//         path: '/admin/products'
//       });
//     })
//     .catch(err => console.log(err));
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.deleteById(prodId)
//     .then(() => {
//       console.log('DESTROYED PRODUCT');
//       res.redirect('/admin/products');
//     })
//     .catch(err => console.log(err));
// };
