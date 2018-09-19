/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojcollectiontabledatasource', 'ojs/ojpagingtabledatasource'],
 function(oj, ko, $) {
  
    function CustomerViewModel() {
      var self = this;

      self.collection = ko.observable();

      self.pagingDatasource = ko.observable();

      //self.serviceURL = 'http://localhost:3000/customers' 
      self.serviceURL = '/customers'

      self.Customer = oj.Model.extend({
          urlRoot: self.serviceURL
      });

      self.CustomerCollection = oj.Collection.extend({
          url: self.serviceURL,
          model: new self.Customer()
      });

      var collection = new self.CustomerCollection();
      var datasource = new oj.CollectionTableDataSource(collection);
      self.pagingDatasource(new oj.PagingTableDataSource(datasource));
     
    }

    return new CustomerViewModel();
  }
);
