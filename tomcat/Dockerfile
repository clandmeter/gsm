FROM tomcat:9 AS staging

RUN apt update
RUN apt -y install busybox
RUN curl https://download.gigabyte.com/FileList/Utility/server_utility_gsm.zip | \
    busybox unzip - */Linux/*.deb -d /tmp

RUN dpkg --fsys-tarfile /tmp/*/Linux/*.deb | \ 
	tar Ox ./root/gsm/web/GSM.tar.gz | \
    tar zx -C /tmp

RUN jar -xf /tmp/tomcat7/webapps/GSM.war WEB-INF/classes/resources/connection.properties
RUN sed -i 's/127\.0\.0\.1/mongodb/g' WEB-INF/classes/resources/connection.properties
RUN sed -i 's/localhost/mongodb/g' WEB-INF/classes/resources/connection.properties
RUN jar -uf /tmp/tomcat7/webapps/GSM.war WEB-INF/classes/resources/connection.properties

FROM tomcat:9

COPY --from=staging /tmp/tomcat7/ /usr/local/tomcat/