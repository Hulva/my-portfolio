import angular from '/public/svg/skills/angular.svg';
import vscode from '/public/svg/skills/vscode.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import bulma from '/public/svg/skills/bulma.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import rabbitmq from '/public/svg/skills/rabbitmq.svg';
import redis from '/public/svg/skills/redis.svg';
import css from '/public/svg/skills/css.svg';
import dart from '/public/svg/skills/dart.svg';
import deno from '/public/svg/skills/deno.svg';
import docker from '/public/svg/skills/docker.svg';
import figma from '/public/svg/skills/figma.svg';
import flutter from '/public/svg/skills/flutter.svg';
import gimp from '/public/svg/skills/gimp.svg';
import git from '/public/svg/skills/git.svg';
import go from '/public/svg/skills/go.svg';
import graphql from '/public/svg/skills/graphql.svg';
import haxe from '/public/svg/skills/haxe.svg';
import html from '/public/svg/skills/html.svg';
import nodejs from '/public/svg/skills/nodejs.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import kotlin from '/public/svg/skills/kotlin.svg';
import markdown from '/public/svg/skills/markdown.svg';
import materialui from '/public/svg/skills/materialui.svg';
import matlab from '/public/svg/skills/matlab.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import maven from '/public/svg/skills/maven.svg';
import nginx from '/public/svg/skills/nginx.svg';
import numpy from '/public/svg/skills/numpy.svg';
import logstash from '/public/svg/skills/logstash.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import react from '/public/svg/skills/react.svg';
import sketch from '/public/svg/skills/sketch.svg';
import linux from '/public/svg/skills/linux.svg';
import svelte from '/public/svg/skills/svelte.svg';
import kibana from '/public/svg/skills/kibana.svg';
import kafka from '/public/svg/skills/kafka.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';
import typescript from '/public/svg/skills/typescript.svg';
import unity from '/public/svg/skills/unity.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import vue from '/public/svg/skills/vue.svg';
import vuetifyjs from '/public/svg/skills/vuetifyjs.svg';
import hadoop from '/public/svg/skills/hadoop.svg';
import idea from '/public/svg/skills/intellij-idea.svg';
import jenkins from '/public/svg/skills/jenkins.svg';
import postman from '/public/png/skills/postman.png';
import spring from '/public/png/skills/spring.png';
import springboot from '/public/png/skills/springboot.png';
import springcloud from '/public/png/skills/springcloud.png';
import visualstudio from '/public/svg/skills/Visual_Studio_2022.svg';
import cassandra from '/public/svg/skills/cassandra.svg';
import elasticsearch from '/public/svg/skills/elasticsearch.svg';
import hive from '/public/svg/skills/hive.svg';
import hbase from '/public/png/skills/hbase.png';
import spark from '/public/svg/skills/spark.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'hadoop':
      return hadoop;
    case 'hive':
      return hive;
    case 'hbase':
      return hbase;
    case 'cassandra':
      return cassandra;
    case 'elasticsearch':
      return elasticsearch;
    case 'spark':
      return spark;
    case 'postman':
      return postman;
    case 'spring':
      return spring;
    case 'springboot':
      return springboot;
    case 'springcloud':
      return springcloud;
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'idea':
      return idea;
    case 'jenkins':
      return jenkins;
    case 'linux':
      return linux;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'kibana':
      return kibana;
    case 'kafka':
      return kafka;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'logstash':
      return logstash;
    case 'maven':
      return maven;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'vscode':
      return vscode;
    case 'matlab':
      return matlab;
    case 'python':
      return python;
    case 'nodejs':
      return nodejs;
    case 'adobe audition':
      return adobeaudition;
    case 'redis':
      return redis;
    case 'deno':
      return deno;
    case 'rabbitmq':
      return rabbitmq;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'pytorch':
      return pytorch;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    case 'visual studio':
      return visualstudio;
    default:
      break;
  }
}
