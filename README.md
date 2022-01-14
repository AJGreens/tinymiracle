# Tiny Miracle

## Layout 
* Home
    * History of Organization
* Pet Care
    * Services and Rates
    * Hours
    * Questions
    * Pet Care Kids?? (possibly make carousel)
* Rescue
    *  Adoptable Dogs
    *  Adoption Process (apply)
    *  Adoption Application
    *  Events
    *  Intreseted in Fostering
    *  Rescue Stories
    *  Furever Homes
    *  Donate (combine 2 pages)
* Contact Us
* Admin

## Plan

1. Finish Admin Page
    * Add a dog (missing some stuff)
    * View or Update dogs
    * My foster dogs(How does this connect to adoptable Dogs?)
    * Print animal info sheet(stupid)
    * Add a new contact
    * View or edit existing contact
    * Send welcome email to contact
    * Events(Optional picture?)
    * Dog Warden Reports(Do they upload the reports themselves on the site?)
    * Foster Management view
    * View Adoption Applications
    * Download PDF documents
    * Vet Information
    * Change Password
2. Create text documents to have a rough draft of the information that
we need on the site.
3. Application Submission page functionality
4. Regular User pages
5. (Check in back later)


## Questions
1. How to upload images/pdf to firebase?
2. How does a router work(again)?
3. What firebase security are needed to make the site is secure?
4. How to generate pdf files?
5. What is point of print animal info sheet?
6. How to do authentication(again)?
7. Do we need Auth Provider/Context?


## Database Layout

* Root
    * (CRUD)
    * dogs(fosterdogs/adoptabledogs)
        * id, name, aka, primary breed, secondary breed, gender, approximate birthdate, age group, foster, status, shelter, date due, discription, picture
    * people(contacts/fosters)
        * name, address, city, state, zip, primary email,  secondary email, mobile phone, home phone, username, active foster?
    * adoptionApplications
        * Look at org site application
