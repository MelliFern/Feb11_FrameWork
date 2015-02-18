'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');

require('../lib/httpACTION.js');

chai.use(chaihttp);

var expect = chai.expect; 

describe('ACTION - POST Test1 ', function(){
	
	it('Test id', function(done){
		chai.request('localhost:3000')
		.post('/school')
		.send({id:"student"})
		.end(function(err,res){
		expect(err).to.eql(null);
		fs.exists('./files/file_student.json', function (exists){
			expect(exists).to.be.true; // jshint ignore:line
		});
		done();
		});
	});
});


describe('ACTION - POST Test2 ', function(){
	
	it('POST - creates new file and writes post data ', function(done){
		chai.request('localhost:3000')
		.post('/school')
		.send({id:'student', name: 'Jane Doe'})
		.end(function(err,res){
		expect(err).to.eql(null);
		fs.readFile('./files/file_student.json','utf8', function(err,data){
			if (err) throw "GET - error   -> "+ err; 
			else {
				//createResponse(res,200,'\n GET json data to file\n');
				var fileObj = JSON.parse(data);	
				expect(fileObj).to.eql({id:'student', name: 'Jane Doe'});
				}
		});
		done();
		});
	});
});
	
describe('ACTION - PUT Test ', function(){
	
	it('PUT - writes to file', function(done){
		chai.request('localhost:3000')
		.put('/school')
		.send({id:"student", fname:"Jane", lname:"Doe"})
		.end(function(err,res){
		expect(err).to.eql(null);
		fs.readFile('./files/file_student.json','utf8', function(err,data){
			if (err) throw "GET - error   -> "+ err; 
			else {
				//createResponse(res,200,'\n GET json data to file\n');
				var fileObj = JSON.parse(data);	
				expect(fileObj).to.be.eql({id:"student", fname:"Jane", lname:"Doe"});
				}
		});
		done();
		});
	});
});


	
describe('ACTION - GET Test ', function(){
	
	it('GET -JSON data ', function(done){
		chai.request('localhost:3000')
		.get('/school/student')
		.end(function(err,res){
		expect(err).to.eql(null);		
		var actualVal = JSON.parse(res.text.replace(/\n/g, ""));

		expect(actualVal).to.eql({id:"student", fname:"Jane", lname:"Doe"});
		done();
		});
	});
});

	
describe('ACTION - DEL Test ', function(){
	
	it('DELETE - Delete File ', function(done){
		chai.request('localhost:3000')
		.del('/school')
		.send({id:"student"})		
		.end(function(err,res){
		expect(err).to.eql(null);				
		fs.exists('./files/file_student.json', function (exists){
			expect(exists).to.be.false; // jshint ignore:line
		});
		done();
		});
	});
});













