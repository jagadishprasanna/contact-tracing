COVID-19 has decimated worlds economy forcing economies to go to a lock-down mode,as places are re-opening  world has realized that contact tracing app is key to help isolate the COVID spreaders and stop the virus in its track.

GOAL: The Goal of this system is to provide contact-tracing ability for any entity Government or Private (Companies from any sector or Government body such as Cities or states) to implement Contact-Tracing. 

AnoNYM 's goal is to democratize the software with Opensource licensing, the system does not need need to collect PII data users data such as Phone Number or Email is optional.


SYSTEM COMPONENTS:

Back end system is composed of the following :
NodeJS App (which is dockerized and can be hosted on K8)
Kafaka (either on premise K8 OR a hosted Kafaka service)
ElasticSearch Instance (Either on Premise k8 or hosted service)

Firebase for Authentication (Plug-gable with other Auth systems such as Auth0)
Front-End consists of mobiles apps on Andriod and ios
All the APP code is written in React-Native.


For Development purpose we can spin up all these components in docker-compose.This application is written in typescript and node.
