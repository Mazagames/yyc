


const scriptsInEvents = {

		async EventSheet1_Event3_Act3(runtime, localVars)
		{
			var url = "https://gameapi.cosmicegg.tech/gameapi.aspx?fn=GetGameToken";
			
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url);
			
			xhr.setRequestHeader("Authorization", "a44dfa90fb2b4f4e98f7b9149cc1bf3807b7628465dd9d467c58cf0fcbd9354f");
			xhr.setRequestHeader("Content-Type", "text/plain");
			
			xhr.onreadystatechange = function () {
			   if (xhr.readyState === 4) {
			      console.log(xhr.status);
			      console.log(xhr.responseText);
			   }};
			
			var data = "1639576817476";
			
			xhr.send(data);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

