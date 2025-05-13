import vitejs from '/public/svg/skills/vitejs.svg';
import html from '/public/svg/skills/html.svg';
import css from '/public/svg/skills/css.svg';
import react from '/public/svg/skills/react.svg';
import javascript from '/public/svg/skills/javascript.svg';
import materialui from '/public/svg/skills/materialui.svg';
import typescript from '/public/svg/skills/typescript.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import nextjs from '/public/svg/skills/nextjs.svg';
import git from '/public/svg/skills/git.svg';
import springboot from '/public/svg/skills/springboot.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import firebase from '/public/svg/skills/firebase.svg';
import java from '/public/svg/skills/java.svg';
import mongodb from '/public/svg/skills/mongodb.svg';
import django from '/public/svg/skills/django.svg';
import angular from '/public/svg/skills/angular.svg';
import netframework from '/public/svg/skills/netframework.svg';
import csharp from '/public/svg/skills/csharp.svg';
import python from '/public/svg/skills/python.svg';
import mysql from '/public/svg/skills/mysql.svg';
import canva from '/public/svg/skills/canva.svg';

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'vitejs':
            return vitejs;
        case 'html':
            return html;
        case 'css':
            return css;
        case 'react':
            return react;
        case 'javascript':
            return javascript;
        case 'materialui':
            return materialui;
        case 'typescript':
            return typescript;
        case 'java':
            return java;
        case 'tailwind':
            return tailwind;
        case 'nextjs':
            return nextjs;
        case 'git':
            return git;
        case 'csharp':
            return csharp;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongodb;
        case 'springboot':
            return springboot;
        case 'angular':
            return angular;
        case 'firebase':
            return firebase;
        case 'django':
            return django;
        case 'python':
            return python;
        case 'mysql':
            return mysql;
        case 'netframework':
            return netframework;
        case 'canva':
            return canva;
        default:
            return null;
    }
}