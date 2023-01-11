# PNV T1 #


## Table of contents ##

- [PNV T1](#pnv-t1)
  - [Table of contents](#table-of-contents)
    - [# Why PNV T1](#-why-pnv-t1)
    - [# Create new account](#-create-new-account)
    - [# Developer mode](#-developer-mode)
### # Why PNV T1 ###
If you want to create new website, just focus on logic,
Because we will store your files

Start with 100MB, you will store some file and you need to pay to store more

### # Create new account  ###
  1. Visit homepage to create <a href="">new account</a>
  2. Input information
  3. Get the email

      In the email include:

      ![alt text](./../../../../assets/Screenshot%20from%202023-01-11%2014-15-02.png)

      username: 

      password:

      access_key:
  4. Login to check your account or uses GET HTTP method
     
     Visit your <a href="">dashboard</a>

     use GET: HTTP method

     ```
      http://ec2-18-136-208-234.ap-southeast-1.compute.amazonaws.com/api/files?access_key={your access key}
     ```


### # Developer mode ###
    
    Please always add secret key in API endpoint
    
Visit <a href="http://ec2-18-136-208-234.ap-southeast-1.compute.amazonaws.com/api/documentation">swagger</a> to view API endpoint