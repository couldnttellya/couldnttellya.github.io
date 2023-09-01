<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="/">

<html><head><title>List Of Clients</title></head>
<body><h1>List of Clients</h1>

<table style="border:solid; border-color:blue">
<tr><th>Name</th><th>Phone</th><th>Email</th><th>Account Total</th></tr>
<xsl:for-each select="Accounts/Client">
<tr>
<td style="border:solid; border-color:blue"><xsl:value-of select="Name"/></td>
<td style="border:solid; border-color:blue"><xsl:value-of select="Phone"/></td>
<td style="border:solid; border-color:blue"><xsl:value-of select="E-mail"/></td>

<!--This is the if than statement to make the account values less than 80k show in red... I have no idea why it didn't work-->

      <xsl:choose>
        <xsl:when test="Account_Total &lt; 80001">
          <td style="color:red; text-align:right; border:solid; border-color:blue">
          $<xsl:value-of select="Account_Total"/></td>
        </xsl:when>
        <xsl:otherwise>
          <td style="text-align:right; border:solid; border-color:blue">$<xsl:value-of select="Account_Total"/></td>
        </xsl:otherwise>
      </xsl:choose>

<!--
<xsl:choose>
    <xsl:when test="Account_Total &lt; 80001>">
        <td style="text-align:right; border:solid; border-color:blue; color:red">$<xsl:value-of select="Account_Total"/></td>
    </xsl:when>
    <xsl:otherwise>
        <td style="text-align:right; border:solid; border-color:blue">$<xsl:value-of select="Account_Total"/></td>
    </xsl:otherwise>
</xsl:choose>
-->
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>