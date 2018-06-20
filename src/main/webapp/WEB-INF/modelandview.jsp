<%@ page language="java" contentType="text/html; ISO-8859-1" pageEncoding="ISO-8859-1" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
</head>
<body>
    <h1>Model And View</h1>
    <h2>${name}</h2>
    <h3>${user.name}</h3>
    <h4>${user.imgUrl}</h4>
    <div>
        <img src="${user.imgUrl}" width="300" height="200" alt="">
    </div>
</body>
</html>