import {data} from '../constant';

export const ownershipDetails = () => {
  let ownerList = data.data.keys.groups;
  let ownerFields = [];
  ownerList.map(item => {
    if (item.title === 'Ownership Details') {
      ownerFields = item.fields;
    }
  });
  return ownerFields;
};

export const vehicleDetails = () => {
  let vehicleList = data.data.keys.groups;
  let vehicleFields = [];
  vehicleList.map(item => {
    if (item.title === 'Vehicle Details') {
      vehicleFields = item.fields;
    }
  });
  return vehicleFields;
};

export const importantDetails = () => {
  let importantList = data.data.keys.groups;
  let importantFields = [];
  importantList.map(item => {
    if (item.title === 'Important Dates') {
      importantFields = item.fields;
    }
  });
  return importantFields;
};

export const additionalDetails = () => {
  let additionalList = data.data.keys.groups;
  let additionalFields = [];
  additionalList.map(item => {
    if (item.title === 'Additional Details') {
      additionalFields = item.fields;
    }
  });
  return additionalFields;
};

export const rtoDetails = () => {
  let rtoList = data.data.keys.groups;
  let rtoFields = [];
  rtoList.map(item => {
    if (item.title === 'RTO Details') {
      rtoFields = item.fields;
    }
  });
  return rtoFields;
};
