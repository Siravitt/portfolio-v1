'use client';

import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function NavIcon() {
  return (
    <Card className='ml-1 mt-8 flex w-fit items-center border-slate-400 bg-transparent text-slate-400'>
      <CardContent className='flex items-center gap-4 px-4 py-3'>
        <Avatar>
          <AvatarImage
            className='object-cover'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavzYgaK38MC0YFyNDbM-OodSZLoJkDpGPHg&s'
          />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <ul className='flex items-center gap-4'>
          <li className='text-xs duration-150 hover:text-slate-200'>
            <button
              className='flex'
              onClick={() => {
                window.open('mailto:' + 'siravitt.tan@gmail.com');
              }}
            >
              <span className='sr-only'>Email</span>
              <Mail />
            </button>
          </li>
          <li className='text-xs duration-150 hover:text-slate-200'>
            <a href='https://github.com/Siravitt' target='_blank'>
              <span className='sr-only'>Github</span>
              <Github />
            </a>
          </li>
          <li className='text-xs duration-150 hover:text-slate-200'>
            <a
              href='https://www.linkedin.com/in/siravit-thaenrattanavijit-137b15244/'
              target='_blank'
            >
              <span className='sr-only'>LinkedIn</span>
              <Linkedin />
            </a>
          </li>
          <li className='text-xs duration-150 hover:text-slate-200'>
            <a href='https://www.instagram.com/flamesiravittt/' target='_blank'>
              <span className='sr-only'>Instagram</span>
              <Instagram />
            </a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
