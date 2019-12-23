# Kids Chores App v2.0

# Project Description

I wanted to create a web application that would allow parents to incentize their kids to do their daily/weekly chores while also saving money for the future goals or experiences.   There are 2 users for the application User and Admin.  The admin user would be the parent and they can pre-load the kids account page with chores that can be done along with the amount earned for the chore.  The child would log into the application and be able to see how much money they have saved from doing chores and see chores they can perform now.

# User Experience

The user experience should be simply and inuititve.  The application is rather simple in its build and can be viewed in mobile and desktop environments.  If an user accidently closes the application, they can reopen the website and be navigated directly to their user dashboard.

# Welcome Page

When a user enters the website they will be greeted with a simple page homepage.  The homepage has been slightly styled with bootstrap.  

# Sign Up Page

Upon clicking the "sign up" button on the homepage you will be sent to the Sign Up Page.  On this page an user can securely sign up for an account within the application.  

# User Dashboard Page

After confirming your email address, an user will create a password and be routed to their account dashboard.  Once you have signed up and logged in the child will be routed to their dashboard page to see their savings/chores.


The Kids Chores App v2 was built with a Ruby on Rails backend and React front end.  The react components were only used in areas that featured dynamic content.  Below is a list of the applications/gems used for this project

# Ruby on Rails

![enter image description here](https://s3.amazonaws.com/com.twilio.prod.twilio-docs/images/twilio-on-rails.width-808.png)

Ruby on Rails is a development framework which gives web developers a structural framework for all the code they write. The Rails framework assist programmers to build websites and apps by abstracting and simplifying most of the repetitive tasks.

Ruby is the programming language which is used alongside Rails. Ruby is to Rails as PHP is to Symfony and Zend, or as Python is to Django. The only appeal of Ruby towards the programmers lies beneath the elegance and concise of the language.

## Pros:
Easy to build MVC (Model, Views and Controllers)
Wide variety of 'gems' that can help you execute an web project quickly
Syntax is easy to understand and initutive
Great error and debugging with gems like Better Errors
Large selection of open sourced libraries


## Cons: 

Not a great experience for windows users 
Not a high demand skill in my job market


# Devise

![enter image description here](https://i.imgur.com/PCL91pN.png)

Devise is a flexible and popular authentication solution for Rails.  This was a great gem to get authorization implemented quickly into the CampBase application.  The package allows you to authenticate users and offers a wide variety of helper methods.

- Devise GitHub page - https://github.com/plataformatec/devise

- Where to install Devise Gem  - https://rubygems.org/gems/devise

- Here is more information about the gem - https://launchschool.com/blog/how-to-use-devise-in-rails-for-authentication


# Webpacker

Webpacker makes it easy to use the JavaScript pre-processor and bundler webpack 4.x.x+ to manage application-like JavaScript in Rails. It coexists with the asset pipeline, as the primary purpose for webpack is app-like JavaScript, not images, CSS, or even JavaScript Sprinkles (that all continues to live in app/assets).

However, it is possible to use Webpacker for CSS, images and fonts assets as well, in which case you may not even need the asset pipeline. This is mostly relevant when exclusively using component-based JavaScript frameworks.

- Install Webpacker Gem - https://rubygems.org/gems/webpacker

- WebPacker GitHub Page - https://github.com/rails/webpacker
