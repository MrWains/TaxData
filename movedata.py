import csv
import requests
from tqdm import tqdm
import json
import time

def parse_geometry(str):
    data = []
    str = str[10:-2]
    str = str.split(',')
    for s in str:
        try:
            d = s.split(" ")
            for item in d:
                if item != '':
                    data.append(float(item))
        except:
            # print(f"item: {item} cannot be converted into a float")
            continue
    # print(data)
    return data


def dumpData():
    payload = {}
    src_file = "./frontend/src/local_DB_df.csv"
    with open(src_file, "r") as f:
        reader = csv.reader(f, delimiter=',')
        next(reader)
        for row in tqdm(reader):
            # print(row)
            if row[0] not in payload:
                payload[row[0]] = []
            uc = {
                "name": row[1],
                "area": float(row[2]),
                "shape_area": float(row[3])
            }
            uc["geometry"] = parse_geometry(row[4])
            uc["years"] = [
                {
                    "year": "2021",
                    "sum": float(row[5]),
                    "sum_per_area": float(row[6]),
                    "sum_per_shape_area": float(row[7]),
                },
                {
                    "year": "2012",
                    "sum": float(row[8]),
                    "sum_per_area": float(row[9]),
                    "sum_per_shape_area": float(row[10]),
                }
            ]

            payload[row[0]].append(uc)
    with open("dump.json", "w") as f:
        json.dump(payload, f)

def sendData():
    payload = None
    with open("./dump.json", "r") as f:
        payload = json.load(f)
    try:
        for data in payload["Peshawar"][1:]:
            res = requests.post("http://localhost:3000/addindividual", json={
                "city": "Peshawar",
                "uc": data["name"],
                "area": data["area"],
                "shape_area": data["shape_area"],
                "geometry": data["geometry"],
                "years": data["years"]
            })
            print(res.json())
            print("waiting 2 seconds")
            time.sleep(2)
    except Exception as e:
        print(e)

def main():
    # dumpData()
    sendData()


if __name__ == "__main__":
    main()
