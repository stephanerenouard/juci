/*	
	This file is part of JUCI (https://github.com/mkschreder/juci.git)

	Copyright (c) 2015 Reidar Cederqvist <reidar.cederqvist@gmail.com>

	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/ 

UCI.$registerConfig("power_mgmt");
UCI.power_mgmt.$registerSectionType("power_mgmt", {
	"cpur4kwait":	{ dvalue: false, type: Boolean },
	"sr":			{ dvalue: false, type: Boolean },
	"ethapd":		{ dvalue: false, type: Boolean },
	"eee":			{ dvalue: false, type: Boolean },
	"cpuspeed":		{ dvalue: 0, type: Number }
});
			