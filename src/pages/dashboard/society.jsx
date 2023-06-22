import { MapContainer } from "@/widgets/layout";
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import { findSocietyById } from "../../data/og-data";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Society() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const params = useParams();
  const id = params.id;
  var society = findSocietyById(id);

  const geocode = async (query) => {
    const res = await axios.get("https://api.geoapify.com/v1/geocode/search", {
      params: {
        text: query,
        lang: "en",
        limit: 1,
        format: "json",
        apiKey: import.meta.env.VITE_GEOAPIFY_API,
      },
    });

    setCurrentPosition({
      lat: res.data.results[0].lat,
      lng: res.data.results[0].lon,
    });
  };
  geocode(society["Address"]);

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-5 md:grid-cols-10">
      <div className="col-span-6 mb-4">
        <Card className="overflow-hidden">
          <CardBody className="w-100 h-[72vh] overflow-x-auto">
            <div className="flex flex-row items-stretch justify-between">
              <div className="h-100 w-[100%]">
                <div className="border-gray  grid grid-cols-2 rounded border-gray-800">
                  <div className="align-items-center border-b-1 mt-6 mr-2 grid h-[100px] grid-cols-1 border-b border-gray-500 p-2 text-left text-sm">
                    <div className="align-center  font-bold text-blue-gray-900">
                      Name of Society:
                    </div>
                    <div className="text-blue-gray-800">
                      {society["Name of Society"]
                        ? society["Name of Society"]
                        : "-"}
                    </div>
                  </div>
                  <div className="align-items-center border-b-1 mt-6 ml-2 grid h-[100px] grid-cols-1 border-b border-gray-500 p-2 text-left text-sm">
                    <div className="align-center  font-bold text-blue-gray-900">
                      Date of Registration:
                    </div>
                    <div className="text-blue-gray-800">
                      {society["Date of Registration"]
                        ? society["Date of Registration"]
                        : "  -"}
                    </div>
                  </div>
                  <div className="align-items-center border-b-1 mt-8 mr-2 grid h-[100px]  grid-cols-1 border-b border-gray-500 p-2 text-left text-sm">
                    <div className="align-center  font-bold text-blue-gray-900">
                      Address:
                    </div>
                    <div className="text-blue-gray-800">
                      {society["Address"] ? society["Address"] : "  -"}
                    </div>
                  </div>
                  <div className="align-items-center border-b-1 mt-8 ml-2 grid h-[100px] grid-cols-1 border-b border-gray-500 p-2 text-left text-sm">
                    <div className="align-center  font-bold text-blue-gray-900">
                      State:
                    </div>
                    <div className="text-blue-gray-800">
                      {society["State"] ? society["State"] : "  -"}
                    </div>
                  </div>
                  <div className="align-items-center border-b-1 mt-8 ml-2 grid h-[100px] grid-cols-1 border-b border-gray-500 p-2 text-left text-sm">
                    <div className="align-center  font-bold text-blue-gray-900">
                      Area of Operation:
                    </div>
                    <div className="text-blue-gray-800">
                      {society["Area of Operation"]
                        ? society["Area of Operation"]
                        : "  -"}
                    </div>
                  </div>
                  <div className="align-items-center border-b-1 mt-8 ml-2 grid h-[100px] grid-cols-1 border-b border-gray-500 p-2 text-left text-sm">
                    <div className="align-center  font-bold text-blue-gray-900">
                      Sector Type:
                    </div>
                    <div className="text-blue-gray-800">
                      {society["Sector Type"] ? society["Sector Type"] : "  -"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-4 mb-4">
        <Card className="overflow-hidden">
          <CardBody className="w-100 h-[72vh] overflow-x-auto p-0">
            {currentPosition != null ? (
              <MapContainer
                currentPosition={currentPosition}
                name={society["Name of Society"]}
              />
            ) : (
              <></>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Society;
