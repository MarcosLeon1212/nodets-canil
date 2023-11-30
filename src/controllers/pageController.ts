import{Request, Response} from 'express';
import {Pet} from '../models/pet';
import {creaMenuObject} from '../helpers/createMenuObject';



export const home = (req: Request, res: Response)=>{
        let list = Pet.getAll();
        
    res.render('pages/page.mustache', {
        menu: creaMenuObject('all'),

        banner:{
            title: 'Todos os animais',
            background:'allanimals.jpg'
            
        },
        list
    })
   
}

export const dogs = (req: Request, res: Response)=>{
    let list = Pet.getFromType('dog');

    res.render('pages/page.mustache', {
        menu: creaMenuObject('dog'),

        banner:{
            title: 'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req: Request, res: Response)=>{
    let list = Pet.getFromType('cat');

    res.render('pages/page.mustache', {
        menu: creaMenuObject('cat'),
           
        banner:{
            title: 'Gatos',
            background:'banner_cat.jpg'
        },
        list
    })
}

export const fishes = (req: Request, res: Response)=>{
    let list = Pet.getFromType('fish');

    res.render('pages/page.mustache', {

        menu: creaMenuObject('fish'),

        banner:{
            title: 'Peixes',
            background:'banner_fish.jpg'
        },
        list
    })
}