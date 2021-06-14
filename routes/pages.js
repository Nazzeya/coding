const express=require('express');
const authController=require('../controllers/auth');
const router = express.Router();

router.get('/',authController.isLoggedIn,(req,res)=>{
  res.render('index',{
    user:req.user
  });
});

router.get('/register', (req,res)=>{
  res.render('register');
})

router.get('/login', (req,res)=>{
  res.render('login');
})

router.get('/profile', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('profile',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})

router.get('/dresses', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('dresses',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})

router.get('/blouse', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('blouse',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})

router.get('/shoes', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('shoes',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})

router.get('/trousers', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('trousers',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})

router.get('/jew', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('jew',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})

router.get('/accessories', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('accessories',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})
router.get('/cart', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('cart',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})
router.get('/product', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('product',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})
router.get('/dress1', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('dress1',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})
router.get('/blouse', authController.isLoggedIn, (req,res)=>{
console.log(req.user)
  if(req.user){
    res.render('blouse',{
      user:req.user
    });
  }else{
    res.redirect('/login');
  }
})
module.exports=router;
