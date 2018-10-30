# StringManipulation
1.	A function to take in a string and return a string that is itself with the reverse of it interwoven together. For example, "ab12" would be"ab12" and "21ba" interwoven to make: "a2b11b2a"
2.	A function to check a string to see if it is a palindrome. Spaces should be ignored. For example:

Sample Text	Result
taco cat	true
some men interpret nine memos	true
never odd or even	true
This is not a palindrome	false
1 test for numerics	false
289982	true
1234321	true

3.	A mapping function that takes in a string of json payload and another string of mappings and returns a string of the mapped data. For example a payload of:
{
"Name" : "Hello",
"This" : {
"That" : {
“TheOther” : "There"
}
}
}
And a map of:
{
"Test_Name" : "Name",
"Test_Value" : "This.That.TheOther"
}
Should return:
{
"Test_Name" : "Hello",
"Test_Value" : "There"
}

