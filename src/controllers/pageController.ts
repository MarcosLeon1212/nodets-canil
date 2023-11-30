import{Request, Response} from 'express';
import {Pet} from '../models/pet';
import {creaMenuObject} from '../helpers/createMenuObject';
import { type } from 'os';


export const home = (req: Request, res: Response)=>{
        let list = Pet.getAll();
        
    res.render('pages/page.mustache', {
        menu: creaMenuObject('all'),

        banner:{
            title: 'Todos os animais',
            background:'allanimals.jpg'
            
        }
    }),
    list
}

export const dogs = (req: Request, res: Response)=>{

    res.render('pages/page.mustache', {
        menu: creaMenuObject('dog'),

        banner:{
            title: 'Cachorros',
            background:'banner_dog.jpg'
        }
    })
}

export const cats = (req: Request, res: Response)=>{

    res.render('pages/page.mustache', {
        menu: creaMenuObject('cat'),
           
        banner:{
            title: 'Gatos',
            background:'banner_cat.jpg'
        }
    })
}

export const fishes = (req: Request, res: Response)=>{

    res.render('pages/page.mustache', {

        menu: creaMenuObject('fish'),

        banner:{
            title: 'Peixes',
            background:'banner_fish.jpg'
        }
    })
}