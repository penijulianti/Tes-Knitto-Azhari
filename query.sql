SELECT a.customerNumber, COUNT(*) AS totalOrders FROM orders a INNER JOIN orderdetails b ON a.orderNumber = b.orderNumber 
INNER JOIN products c ON b.productCode = c.productCode WHERE c.productLine = 'Classic Cars' GROUP BY a.customerNumber
HAVING COUNT(c.productLine) > 23;