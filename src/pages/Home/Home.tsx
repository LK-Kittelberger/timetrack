import React from 'react';
import {Button} from '../../components/atoms/TextField/Button/Button';
import {TextField} from '../../components/atoms/TextField/TextField';

export default function Home(): JSX.Element {
    
    return (
        <div className="container mx-auto pt-20">
            <h1 className="text-2xl sm:px-2 md:px-0 font-bold">Hallo Lukas, Tracke deine Zeit!</h1>
            <div className="relative overflow-hidden mt-5">
                <div className="justify-evenly flex-row rounded-none md:rounded-xl overflow-hidden bg-gradient-to-r from-green-700 to-green-400 p-6">
                    <div className="flex flex-wrap">
                        <div className="flex-1 px-2">
                            <TextField 
                                title="Ticket"
                                placeholder="Trage hier die Ticketnummer ein"
                                type="text"
                                value=''
                            />
                        </div>
                        <div className="flex-1 px-2">
                            <TextField 
                                title="Startzeit"
                                placeholder="Trage hier die Startzeit ein"
                                type='datetime-local'
                                value=''
                            
                            />
                        </div>
                        <div className="flex-1 px-2">
                            <TextField 
                                title="Endzeit"
                                placeholder="Trage hier die Endzeit ein"
                                type='datetime-local'
                                value=''
                            />
                        </div>
                    </div>
                    <div className="float-right px-2 mt-2">
                        <Button title='Speichern'/> 
                    </div>
                </div>
            </div>
        </div>
    );
}