function signalR() {}
function notesSignalR() {}
function constants() {}

// WebPI and SignalR server
// local
//constants.serverURL = 'http://localhost:8181/';

// azure
constants.serverURL = 'http://omicrondemo.azurewebsites.net/';

// connected event
signalR.onConnected = "signalRConnected";

// hub
notesSignalR.hubName = "notesHub";

// client calls
notesSignalR.addNote = "addNote";
notesSignalR.removeNote = "removeNote";
notesSignalR.getAllNotes = "getAllNotes";

// client callbacks
notesSignalR.onNewNote = "broadcastNewNote";
notesSignalR.onRemoveNote = "broadcastRemoveNote";


// Some helper methods
function safeApply(scope, fn) {
    (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
}