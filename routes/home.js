const express = require('express')
const router = express.Router()


router.get('/',(req,res) =>{
    try{
        res.render('home')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/home',(req,res) =>{
    try{
        res.render('home')
    }
    catch{
        res.status(404).json({success:false})
    }
})


router.get('/visionary-team',(req,res) =>{
    try{
        res.render('VisionaryTeam')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/execution-team',(req,res) =>{
    try{
        res.render('execution')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/mba',(req,res) =>{
    try{
        res.render('mba')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/mca',(req,res) =>{
    try{
        res.render('mca')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/mba-people',(req,res) =>{
    try{
        res.render('mba_people')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/mba-eligiblity',(req,res) =>{
    try{
        res.render('mba_eligiblity')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/mba-syllabus',(req,res) =>{
    try{
        res.render('mba_syllabus')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/mca-people',(req,res) =>{
    try{
        res.render('mca_people')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/mca-eligiblity',(req,res) =>{
    try{
        res.render('mca_eligiblity')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/mca-syllabus',(req,res) =>{
    try{
        res.render('mca_syllabus')
    }
    catch{
        res.status(404).json({success:false})
    }
})

router.get('/how-to-apply',(req,res) =>{
    try{
        res.render('How_To_Apply')
    }
    catch{
        res.status(404).json({success:false})
    }
})



















module.exports = router