<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="/">

<html><head><title>List Of Clients</title></head>
<body><h1>ABC Financial Startup</h1>
<img style="display:block;margin-left:auto;margin-right:auto" src="static/images/financialstartup.jpg"/>
<p> We are a very young financial manager company and we are proud of our clients<br/><br/>
    We have started with 1 client a little bit more than 10 years ago and now we have <xsl:value-of select="count(Accounts/Client)" /> clients!<br/><br/>
    These are our clients: 
    <xsl:for-each select="Accounts/Client">
    <xsl:value-of select="Name"/>
    <xsl:choose>
      <xsl:when test="position()=last()">.</xsl:when>
      <xsl:when test="position()=last() - 1">, and </xsl:when>
      <xsl:otherwise>, </xsl:otherwise>
    </xsl:choose>
    </xsl:for-each>
    <br/><br/>
    <xsl:value-of select="count(Accounts/Client[Years&gt;7])" /> of our clients have been with us more than 7 years!<br/><br/>
</p>

</body>
</html>
</xsl:template>
</xsl:stylesheet>