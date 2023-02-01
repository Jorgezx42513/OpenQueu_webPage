import React from 'react'
import '../styles/section.css'
import logo_mysql from '../images/mysql.png'
import logo_apache from '../images/apache.png'
import logo_filezilla from '../images/icon_filezilla.png'

export function Dts_sect() {
  return (
    <section id='dts_sect'>
        <div className='dts_conteiner Shadow'>
            <img src={logo_mysql} alt="logo_bts_mysql" />
            <p>MySQL is a relational database management system developed under a dual license: General Public License/Commercial License by Oracle Corporation and is 
              considered the most popular open source database in the world,and one of the most generally popular alongside Oracle and Microsoft SQL Server, all for web development 
              environments.</p>
            <a href="https://www.mysql.com">
              <button id='btn_mysql'>go!</button>
            </a>
        </div>
        <div className='dts_conteiner Shadow'>
          <img src={logo_filezilla} alt="logo_bts_filezilla" />
            <p>FileZilla is a free and open source FTP application consisting of a client and a server. It supports the FTP, SFTP and FTP over SSL/TLS (FTPS) protocols.
              Initially it was designed to work on Microsoft Windows, but since version 3.0.0, thanks to the use of wxWidgets, it is cross-platform, also being available for other operating systems, including GNU/Linux, 
              FreeBSD and macOS.</p>
            <a href="https://filezilla-project.org">
              <button id='btn_filezilla'>go!</button>
            </a>
        </div>
        <div className='dts_conteiner Shadow'>
        <img src={logo_apache} alt="logo_bts_apache" />
            <p>He Apache HTTP Serveris a free and open-source cross-platform web server software, released under the terms of Apache License 2.0. Apache is developed and maintained by an open community of developers under the auspices of the Apache Software Foundation. </p>
            <a href="https://httpd.apache.org">
              <button id='btn_apache'>go!</button>
            </a>
        </div>
    </section>
  )
}
